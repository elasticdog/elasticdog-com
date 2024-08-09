---
tags:
  - seed
---
* Unique key pairs per device
* Multiple keys based on purpose:
  * auth
  * sign
  * deploy
- Use the secure enclave for generation and storage, if possible. No passphrase is necessary.
- Generate ed25519 keys otherwise, using a strong passphrase.
- For desktop devices:
  - Comment format of `<PURPOSE>@<HOSTNAME>` (e.g., `auth@aarons-mac-mini`).
- For mobile devices:
  - Prefer deploy keys to limit the scope of their access.
  - Comment format of `<PURPOSE>@<APPLICATION>.<HOSTNAME>` (e.g., `deploy@working-copy.aarons-ipad`), as applications are typically sandboxed from each other, so you can't share keys.
- File naming convention:
  -  `~/.ssh/id_ed25519` auth key in default lookup location
  - `~/.ssh/id_ed25519_sign` sign key must be explicitly referenced
  - `~/.ssh/id_ed25519_deploy` deploy key must be explicitly referenced