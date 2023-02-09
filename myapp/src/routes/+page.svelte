<script lang="ts">
	import Timer from '../comp/Timer.svelte';
	import '../style.css';
	import type { PageData } from './$types';

	export let data: PageData;

	let isTime = 0;
	function isTimeClick() {
		console.log('isTimeClick() called');
		isTime = 1;
	}
	function isTimeUnclick() {
		console.log('isTimeUnclick() called');
		isTime = 0;
	}
</script>

<svelte:head>
	<title>Time it</title>
</svelte:head>
<body>
	{#if data.session}
	<h1>Welcome, {data.session.user.email}</h1>
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
{/if}{:else}
	<div>
		<h1>Log in to time it</h1> </div>
	{/if}
</body>

<style>
</style>
