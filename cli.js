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
	Example
	  ~ ❯❯❯ dcipher 1abcb33beeb811dca15f0ac3e47b88d9
	  ${logSymbols.success} unicorn
`);

const input = cli.input[0];

function display(plaintext) {
	if (plaintext != 'Hash could not be deciphered' && plaintext != 'Hash type not supported') {
		console.log(`${logSymbols.success} ` + plaintext);
	} else if (plaintext == 'Hash type not supported') {
		console.log(`${logSymbols.error} Hash type not supported`);
		process.exit(1);
	} else {
		console.log(`${logSymbols.error} Hash could not be deciphered`);
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