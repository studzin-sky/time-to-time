<!-- src/Timer.svelte -->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
  
	const dispatch = createEventDispatcher<{ stop: number; back: number }>();
	let startTime: number = Date.now();
	let elapsedTime: number = 0;
	
	const formatTimestamp = (timestamp: number): string => {
	  const date = new Date(timestamp);
	  return date.toLocaleString();
	};
  
	function stopTimer(): void {
	  elapsedTime = (Date.now() - startTime) / 1000;
	  dispatch('stop', elapsedTime);
	}
  
	function backTimer(): void {
	  elapsedTime = (Date.now() - startTime) / 1000;
	  dispatch('back', elapsedTime);
	}
  </script>
  
  <div>
	<h4>Start time: {formatTimestamp(startTime)}</h4>
	<h2>{(Date.now() - startTime) / 1000}</h2>
	<button on:click={stopTimer}>Stop</button>
	<button on:click={backTimer}>back</button>
  </div>
  