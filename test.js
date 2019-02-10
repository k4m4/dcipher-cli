import test from 'ava';
import execa from 'execa';
import dcipher from 'dcipher';

test('success', async t => {
	const {stdout} = await execa('./cli.js', ['1abcb33beeb811dca15f0ac3e47b88d9']);
	t.is(stdout, (`✔ ` + await dcipher('1abcb33beeb811dca15f0ac3e47b88d9')));
});

test('fail', async t => {
	const stdout = await t.throwsAsync(execa('./cli.js', ['unicorn']));
	const error = await dcipher('unicorn');
	t.is(stdout.error, error.error);
});