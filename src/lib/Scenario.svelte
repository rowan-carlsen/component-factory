<script>
	import Choice from '$lib/Choice.svelte';
	import { slide, fade } from 'svelte/transition';

	export let text, backdrop, choices;
	const choiceArray = Object.values(choices);
</script>

<div class="scenario" style="background-image: url({backdrop})">
	<div class="scenario-text" class:end={!choiceArray.length}>{text}</div>
	<div class="choice-holder" class:hidden={!choiceArray.length} in:slide={{ delay: 1250 }}>
		{#each choiceArray as choice}
			<Choice {...choice} on:choose></Choice>
		{/each}
	</div>
</div>

<style>
	.scenario-text {
		background: #fff9;
		padding: 0.5em;
		font-size: 1.1em;
		width: max-content;
		margin: 0 auto;
	}
	.scenario-text.end {
		grid-column: span 2;
	}
	.scenario {
		width: 100%;
		height: 100%;
		background-size: cover;
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
	}
	.choice-holder {
		display: flex;
		flex-flow: column;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100%;
		background: #fffd;
		border-left: 2px solid blue;
	}
	.choice-holder.hidden {
		display: none;
	}
</style>
