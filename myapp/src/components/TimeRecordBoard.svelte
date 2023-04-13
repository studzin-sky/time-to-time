<script lang="ts">
	import type { TimeRecord } from '../stores/timeRecordsStore';
	import { topFiveRecords } from '../stores/timeRecordsStore';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	let records: TimeRecord[] = [];
	topFiveRecords.subscribe(($topFiveRecords) => {
		records = $topFiveRecords;
	});
</script>
<div class="board-container" in:fly="{{ x: -200, duration: 500 }}" out:fly="{{ x: 200, duration: 500 }}">
    {#each records as record (record.start)}
      <div class="time-record" animate:flip="{{ duration: 300 }}">
        <h3>{record.title}</h3>
        <p>Start: {new Date(record.start).toLocaleString()}</p>
        <p>Duration: {Math.floor(record.duration / 60)}m {record.duration % 60}s</p>
      </div>
    {/each}
  </div>
<style>
	.board-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 16px;
		padding: 16px;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	}

	.time-record {
		background-color: #333;
		border-radius: 5px;
		padding: 16px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.time-record h3 {
		color: #f9a1bc;
		margin: 0;
	}

	.time-record p {
		color: #ccc;
		margin: 0;
	}
</style>
