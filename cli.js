#!/usr/bin/env node
'use strict';
const meow       = require('meow');
const getStdin   = require('get-stdin');
const logSymbols = require('log-symbols');
const dcipher    = require('dcipher');

const cli = meow(`
	Usage
	  ~ ❯❯❯ dcipher <string>
	  ~ ❯❯❯ echo <string> | dcipher
	Options
	  -p, --plain   Display output without log symbols
	Example
	  ~ ❯❯❯ dcipher 1abcb33beeb811dca15f0ac3e47b88d9
	  ${logSymbols.success} unicorn
`, {
	flags: {
		plain: {
			type: 'boolean',
			alias: 'p',
			default: false
		}
	}
});

const input = cli.input[0];

function display(plaintext) {
	if (plaintext != 'Hash could not be deciphered' && plaintext != 'Hash type not supported') {
		const leading = (cli.flags["plain"]) ? `` : `${logSymbols.success} `
		console.log(leading + plaintext);
	} else if (plaintext == 'Hash type not supported') {
		const leading = (cli.flags["plain"]) ? `` : `${logSymbols.error} `
		console.log(leading + `Hash type not supported`);
		process.exit(1);
	} else {
		const leading = (cli.flags["plain"]) ? `` : `${logSymbols.error} `
		console.log(leading + `Hash could not be deciphered`);
		process.exit(1);
	}
}

if (!input && process.stdin.isTTY) {
	console.log('Specify a hash to decipher');
	process.exit(1);
}
if (input) {
	dcipher(input)
		.then(plaintext => {
			display(plaintext);
		})
} else {
	getStdin().then(stdin => {
		dcipher(stdin).then(plaintext => {
			display(plaintext);
		})
	})
}