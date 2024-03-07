<script>
	import Scenario from '$lib/Scenario.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	export let scenarioList;

	let currentScenario = {};

	onMount(() => {
		currentScenario = scenarioList['A'];
	});

	function changeScenario(leadsTo) {
		currentScenario = scenarioList[leadsTo];
	}
</script>

{#key currentScenario}
	<div transition:fade={{ duration: 750 }}>
		<Scenario {...currentScenario} on:choose={(e) => changeScenario(e.detail.leadsTo)}></Scenario>
	</div>
{/key}

<style>
	div {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
