<!-- src/Timer.svelte -->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
  
	const dispatch = createEventDispatcher<{ stop: { duration: number; title: string }; back: { duration: number; title: string } }>();
	let startTime: number = Date.now();
	let elapsedTime: number = 0;
	let title: string = '';
  
	const formatTimestamp = (timestamp: number): string => {
	  const date = new Date(timestamp);
	  return date.toLocaleString();
	};
  
	function stopTimer(): void {
	  elapsedTime = (Date.now() - startTime) / 1000;
	  dispatch('stop', { duration: elapsedTime, title });
	}
  
	function backTimer(): void {
	  elapsedTime = (Date.now() - startTime) / 1000;
	  dispatch('back', { duration: elapsedTime, title });
	}
  </script>
  
  <div>
	<h4>Start time: {formatTimestamp(startTime)}</h4>
	<input bind:value={title} placeholder="Enter title for timing" />
	<h2>{(Date.now() - startTime) / 1000}</h2>
	<button on:click={stopTimer}>Stop</button>
	<button on:click={backTimer}>back</button>
  </div>
  