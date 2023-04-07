<script lang="ts">
	import Timer from '../Timer.svelte';
	import '../style.css';
	import { addTimeRecord, topFiveRecords } from '../stores/timeRecordsStore';
	let isTime: number = 0;
  
	function isTimeClick(): void {
	  isTime = 1;
	}
  
	function isTimeUnclick(duration: number): void {
	  isTime = 0;
	  const record = {
		start: Date.now() - duration * 1000,
		duration: duration,
	  };
	  addTimeRecord(record);
	}
  </script>
  
  <div>
	<h3>Top 5 Longest Time Records</h3>
	<ul>
	  {#each $topFiveRecords as record, i}
		<li>
		  {i + 1}. Start: {new Date(record.start).toLocaleString()} | Duration: {record.duration.toFixed(3)} seconds
		</li>
	  {/each}
	</ul>
  </div>
  
  {#if !isTime}
	<div>
	  <h1>It's time to time</h1>
	  <button on:click={isTimeClick}>Time it</button>
	</div>
  {:else}
	<div>
	  <Timer on:stop={e => isTimeUnclick(e.detail)} />
	  <button on:click={() => isTimeUnclick(0)}>back</button>
	</div>
  {/if}
  
  <style>
  </style>
  