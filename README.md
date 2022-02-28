# ncrip

## _ncrip is Encryption program_

## Features

- Advanced Text Encryption Package
- Key Cryptography
- You can generate cryptographically secure random keys and IVs for you project.

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies

```sh
npm install ncrip
```

## Development

Want to contribute? Great!

require in your project:

```sh
const ncrip = require('ncrip');
```

## .enc(text,key)

Text Encryption:

```sh
let data = ncrip.enc(text,key);
```

this function retrune a long encryption code.

> text : this is your plain string text.
> key:this is uniq number that use for decryption the text;

## .dnc(encriptedText,key)

Text decryption:

```sh
let data = ncrip.dnc(encriptedText,key);
```

this function retrune a long encryption code.

> encriptedText : this is encryption code you want to decryption
> key:this is uniq number that use for decryption the text;

## License

MIT
