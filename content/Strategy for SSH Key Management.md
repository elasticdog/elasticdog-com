---
tags: sapling
---

## TL;DR

```
ssh-keygen -a 120 -C "auth@aarons-mac-mini" -f ~/.ssh/id_ed25519
ssh-keygen -a 120 -C "sign@aarons-mac-mini" -f ~/.ssh/id_ed25519_sign
```

## Guidelines

- Use unique key pairs per device
- Separate keys based on purpose:
  - auth (authentication)
  - sign (signing)
- Key generation and storage:
  - Prefer secure enclave if available (no passphrase needed)
  - Otherwise, use Ed25519 keys on the local filesystem _with a strong passphrase_
- Increase [key derivation function (KDF) rounds](https://flak.tedunangst.com/post/new-openssh-key-format-and-bcrypt-pbkdf) to `120` for enhanced security
- Comment format:
  - Desktop devices: `<PURPOSE>@<HOSTNAME>` (e.g., `auth@aarons-mac-mini`)
  - Mobile devices: `<PURPOSE>@<APPLICATION>.<HOSTNAME>` (e.g., `sign@working-copy.aarons-ipad`)
- File naming convention:
  - `~/.ssh/id_ed25519` for auth key (default lookup location)
  - `~/.ssh/id_ed25519_sign` for sign key (must be explicitly referenced)
- When adding a key into your SSH agent via [`ssh-add`](https://www.ssh.com/academy/ssh/add-command):
  - Set a maximum lifetime with `-t <LIFE>` to expire your credentials and force a passphrase prompt after the given amount of time.
  - Store the passphrase in a password manager ([[Memorize Only Two Passwords|you should not need to memorize it]]). I personally use the script [`bw-ssh-add`](https://github.com/elasticdog/bw-ssh-add) to automate pulling it from [[Why Bitwarden?|Bitwarden]].

## KDF Rounds Benchmark

The upstream [default for KDF rounds](https://github.com/openssh/openssh-portable/commit/999a2886ca1844a7a74b905e5f2c8c701f9838cd) is currently `24` (it's only `16` on macOS). Higher numbers increase resistance to brute-force attacks but slow down passphrase verification. Choose the highest number you can tolerate.

To benchmark KDF rounds using [hyperfine](https://github.com/sharkdp/hyperfine) on your own hardware, use the following commands:

```text
$ ssh-keygen -q -f ./initial_key -N ""

$ hyperfine -L rounds 24,48,96,120 --prepare "cp initial_key test_key" --cleanup "rm test_key" "yes | ssh-keygen -p -a {rounds} -f test_key -N 'password' -P ''"
Benchmark 1: yes | ssh-keygen -p -a 24 -f test_key -N 'password' -P ''
  Time (mean ± σ):     170.7 ms ±   0.7 ms    [User: 166.9 ms, System: 3.4 ms]
  Range (min … max):   169.6 ms … 171.9 ms    16 runs

Benchmark 2: yes | ssh-keygen -p -a 48 -f test_key -N 'password' -P ''
  Time (mean ± σ):     338.7 ms ±   1.2 ms    [User: 332.8 ms, System: 5.4 ms]
  Range (min … max):   337.4 ms … 340.5 ms    10 runs

Benchmark 3: yes | ssh-keygen -p -a 96 -f test_key -N 'password' -P ''
  Time (mean ± σ):     674.0 ms ±   2.1 ms    [User: 665.0 ms, System: 8.4 ms]
  Range (min … max):   671.8 ms … 678.1 ms    10 runs

Benchmark 4: yes | ssh-keygen -p -a 120 -f test_key -N 'password' -P ''
  Time (mean ± σ):     840.8 ms ±   0.8 ms    [User: 830.2 ms, System: 10.1 ms]
  Range (min … max):   838.9 ms … 841.8 ms    10 runs

Summary
  yes | ssh-keygen -p -a 24 -f test_key -N 'password' -P '' ran
    1.98 ± 0.01 times faster than yes | ssh-keygen -p -a 48 -f test_key -N 'password' -P ''
    3.95 ± 0.02 times faster than yes | ssh-keygen -p -a 96 -f test_key -N 'password' -P ''
    4.93 ± 0.02 times faster than yes | ssh-keygen -p -a 120 -f test_key -N 'password' -P ''

$ rm initial_key{,.pub}
```

For posterity, this is the hardware I ran the above commands on:

```text
$ system_profiler -detailLevel mini SPHardwareDataType SPSoftwareDataType
Hardware:

    Hardware Overview:

      Model Name: Mac mini
      Model Identifier: Mac14,12
      Model Number: MNH73LL/A
      Chip: Apple M2 Pro
      Total Number of Cores: 10 (6 performance and 4 efficiency)
      Memory: 16 GB
      System Firmware Version: 10151.140.19
      OS Loader Version: 10151.140.19

Software:

    System Software Overview:

      System Version: macOS 14.6 (23G80)
      Kernel Version: Darwin 23.6.0
      Time since boot: 3 days, 3 hours, 35 minutes

$ ssh -V
OpenSSH_9.7p1, LibreSSL 3.3.6

$ date -Ru
Fri, 09 Aug 2024 16:29:11 +0000
```
