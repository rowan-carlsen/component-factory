import { expect, test } from 'vitest';
import { _scenarioTest } from './+page.server.ts';
const JSONData = _scenarioTest();

test.each(Object.entries(JSONData))('all required keys %s', async (path, file) => {
	const JSONFile = await file();
	expect(
		Object.values(JSONFile.default).every(
			(prompt) =>
				typeof prompt['text'] === 'string' &&
				typeof prompt['backdrop'] === 'string' &&
				typeof prompt['choices'] === 'object'
		)
	).toBe(true);
});

test.each(Object.entries(JSONData))('all choices lead somewhere %s', async (path, file) => {
	const JSONFile = await file();
	expect(
		Object.values(JSONFile.default).every((prompt) =>
			Object.values(prompt.choices).every((choice) =>
				Object.prototype.hasOwnProperty.call(JSONFile.default, choice.leadsTo)
			)
		)
	).toBe(true);
});
