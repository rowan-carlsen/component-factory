<script>
	class Choice {
		constructor(text, leadsTo) {
			this.text = text;
			this.leadsTo = leadsTo;
		}
	}
	let scenarios = [
		{
			id: 'A',
			text: 'Scenario A',
			choices: [],
			backdrop: './sample.jpeg'
		}
	];
	let rows = [[scenarios[0]]];
	$: if (rows[rows.length - 1].some((scenario) => scenario.choices.length)) {
		rows.push([]);
	}
</script>

<main>
	{#each rows as row}
		<div class="row">
			{#each row as scenario}
				<div class="scenario">
					{scenario.text}
					{#each scenario.choices as choice}
						<div class="choice">
							<input type="text" bind:value={choice.leadsTo} />
						</div>
					{/each}
					<button
						on:click={() => {
							scenario.choices.push({ leadsTo: '' });
							scenarios = scenarios;
							rows = rows;
						}}>Add Choice</button
					>
				</div>
			{/each}
		</div>
	{/each}
	<output>{JSON.stringify(rows)}</output>
</main>

<style>
	:global(*) {
		box-sizing: border-box;
	}
	.row {
		height: 100px;
		background: lightblue;
		border: 1px solid black;
		display: flex;
		justify-content: space-around;
	}
	.scenario {
		width: 100px;
		border: 1px solid black;
		background: white;
	}
	input {
		max-width: 100%;
	}
</style>
