<script>
	import Timer from '../Timer.svelte';
	import '../style.css';
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
</style>
