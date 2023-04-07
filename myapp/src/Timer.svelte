<!-- src/Timer.svelte -->
<script lang="ts">
	import { onDestroy } from 'svelte';
	import { createEventDispatcher } from 'svelte';
  
	const dispatch = createEventDispatcher<{ stop: number; back: number }>();
	let time: number = 0;
	let lastTimestamp: number = performance.now();
  
	function step(timestamp: number): void {
	  const deltaTime = timestamp - lastTimestamp;
	  time += deltaTime / 1000;
	  lastTimestamp = timestamp;
	  requestAnimationFrame(step);
	}
  
	function stopTimer(): void {
	  dispatch('stop', time);
	}
  
	function backTimer(): void {
	  dispatch('back', time);
	}
  
	onDestroy(() => {
	  requestAnimationFrame(step);
	});
  
	requestAnimationFrame(step);
  </script>
  
  <div>
	<h2>{time.toFixed(3)}</h2>
	<button on:click={stopTimer}>Stop</button>
	<button on:click={backTimer}>back</button>
  </div>
  