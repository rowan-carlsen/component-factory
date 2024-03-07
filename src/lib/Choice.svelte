<script>
	import { createEventDispatcher } from 'svelte';

	export let text, leadsTo;

	const dispatch = createEventDispatcher();

	function makeChoice() {
		dispatch('choose', { leadsTo });
	}
</script>

<button class="container btn" on:click={makeChoice}>
	<div>{text}</div>
	<div>leads to: {leadsTo}</div>
</button>

<style>
	/* button {
		font-size: 1.1rem;
		cursor: pointer;
		padding: 0.25em 0.5em;
	} */
</style>
