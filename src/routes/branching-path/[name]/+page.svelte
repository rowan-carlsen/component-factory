<script>
	import AdventureChooser from '$lib/AdventureChooser.svelte';
	export let data;
</script>

<main>
	<AdventureChooser scenarioList={data}></AdventureChooser>
</main>
<button type="reset" id="reset" class="btn" on:click={() => window.location.reload()}>
	Restart
</button>

<style>
	main {
		width: 1000px;
		aspect-ratio: 2;
		margin: 0 auto;
		position: relative;
	}
	:global(body) {
		background-color: lightgrey;
		font-family: sans-serif;
	}
</style>
