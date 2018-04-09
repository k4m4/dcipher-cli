# dcipher-cli [![Build Status](https://travis-ci.org/k4m4/dcipher-cli.svg?branch=master)](https://travis-ci.org/k4m4/dcipher-cli)

> Crack hashes using online rainbow & lookup table attack services, right from your terminal.

---

## Install

```
~ ❯❯❯ npm install -g dcipher-cli
```


## Usage

```
~ ❯❯❯ dcipher --help

  Crack hashes using online rainbow table attack services, right from your terminal.

  Usage
    ~ ❯❯❯ dcipher <string>
    ~ ❯❯❯ echo <string> | dcipher
  Example
    ~ ❯❯❯ dcipher 1abcb33beeb811dca15f0ac3e47b88d9
    ✔ unicorn
```


## Supported Hashes

- [`Base64`](https://github.com/kevva/base64-regex)
- [`MD5`](https://github.com/k4m4/md5-regex)
- [`SHA1`](https://github.com/k4m4/sha-regex)
- [`SHA224`](https://github.com/k4m4/sha-regex)
- [`SHA256`](https://github.com/k4m4/sha-regex)
- [`SHA384`](https://github.com/k4m4/sha-regex)
- [`SHA512`](https://github.com/k4m4/sha-regex)


## Credits

- `dcipher` depends on the following online services:
  - [Hash Toolkit](https://hashtoolkit.com) - Hash Toolkit Hash Decrypter enables you to decrypt/reverse a hash in various formats into their original text. Hashes are often used to store passwords securely in a database.
  - [GromWeb](https://md5.gromweb.com) - MD5 & SHA conversion and reverse lookup service.
  - [MD5Hashing](https://md5hashing.net) - Yet another hash conversion and reverse lookup service.


## Related

- [dcipher](https://github.com/k4m4/dcipher) - API for this module


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)