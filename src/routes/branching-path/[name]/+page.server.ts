type Tparams = {
	params: {
		name: string;
	};
};
type Tscenario = {
	default: JSON;
};
const scenarios = import.meta.glob('./*.json');

export function _scenarioTest() {
	return scenarios;
}
export function entries() {
	const scenarioList = [];
	for (const path in scenarios) {
		const pathName = path.split('.')[1].slice(1);
		scenarioList.push({ name: pathName });
	}
	return scenarioList;
}
export async function load({ params }: Tparams) {
	for (const path in scenarios) {
		if (path.includes(params.name)) {
			const module = (await scenarios[path]()) as Tscenario;
			return module['default'];
		}
	}
	return;
}
