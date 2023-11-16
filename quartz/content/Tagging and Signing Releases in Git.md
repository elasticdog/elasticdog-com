Fish:

```
$ set -x GPG_TTY (tty)
```

Bash:

```
$ export GPG_TTY=$(tty)
```

This will tag and sign a release via GPG:

```
$ git tag -s v0.9.4 -m "Release v0.9.4"
```

...the signature can be verified if you have the proper public key in your GPG keyring with:

```
$ git tag -v v0.9.4
```

You can see a tagged release with:

```
$ git show v0.9.4
```

Push your annotated tags to the remote repo with:

```
$ git push –tags
```
