---
tags:
  - seed
---
- Unique key pairs per device
- Separate keys based on purpose:
  - auth (authentication)
  - sign (signing)
- For desktop devices:
  - Comment format of `<PURPOSE>@<HOSTNAME>` (e.g., `auth@aarons-mac-mini`).
  - File naming convention:
  - `~/.ssh/id_ed25519` auth key in default lookup location
  - `~/.ssh/id_ed25519_sign` sign key must be explicitly referenced
- For mobile devices:
  - Comment format of `<PURPOSE>@<APPLICATION>.<HOSTNAME>` (e.g., `deploy@working-copy.aarons-ipad`), as applications are typically sandboxed from each other, so you can't share keys.
- Use the secure enclave for generation and storage, if possible. No passphrase is necessary.
- Generate ed25519 keys otherwise, using a strong passphrase.
  - `ssh-keygen -a 100 -C "sign@aarons-mac-mini" -f ~/.ssh/id_ed25519_sign
  - The upstream  [default number](https://github.com/openssh/openssh-portable/commit/999a2886ca1844a7a74b905e5f2c8c701f9838cd) of [key derivation rounds](https://flak.tedunangst.com/post/new-openssh-key-format-and-bcrypt-pbkdf) is currently `24`, which I bump up to `100`.  Higher numbers result in slower passphrase verification, but increased resistance to brute-force password cracking. You want this to be as slow as you can tolerate.

```bash
$ cd tmp/
$ ssh-keygen -a 24 -f ./test_id_ed25519 -N "correct horse battery staple"

```