<script>
	import Timer from '../Timer.svelte';
	let isTime = 0;
	function isTimeClick() {
		isTime = 1;
	}
	function isTimeUnclick() {
		isTime = 0;
	}
</script>

<body>
	{#if !isTime}
		<div>
			<h1>It's time to time</h1>
			<button on:click={isTimeClick}>Time it</button>
		</div>
	{/if}
	{#if isTime}
		<div>
			<Timer />
			<button on:click={isTimeUnclick}>back</button>
		</div>
	{/if}
</body>

<style>
	body {
		background-color: rgb(169, 197, 221);
		color: rgb(105, 0, 243);
	}
	div {
		font-family: 'Open Sans', sans-serif;
		background-color: var(--clr-background);
		color: var(--clr-dark);
		min-width: 320px;
		font-weight: 900;
		position: fixed;
		top: 50%;
		left: 50%;
		margin-top: -50px;
		margin-left: -100px;
	}
</style>
