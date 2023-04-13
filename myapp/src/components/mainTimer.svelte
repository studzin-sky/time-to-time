<script lang="ts">
	import Timer from '../Timer.svelte';
	import '../style.css';
	import { addTimeRecord } from '../stores/timeRecordsStore';

	let isTime: number = 0;

	function isTimeClick(): void {
		isTime = 1;
	}

	function isTimeUnclick(e: CustomEvent<{ duration: number; title: string }>): void {
		isTime = 0;
		const record = {
			start: Date.now() - e.detail.duration * 1000,
			duration: e.detail.duration,
			title: e.detail.title
		};
		addTimeRecord(record);
	}
</script>

<div class="content" class:waving={isTime}>
	{#if !isTime}
		<h1>It's time to time</h1>
		<button on:click={isTimeClick}>Time it</button>
	{:else}
		<Timer on:stop={isTimeUnclick} on:back={isTimeUnclick} />
	{/if}
</div>
