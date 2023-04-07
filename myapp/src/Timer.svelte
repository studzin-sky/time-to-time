<script lang="ts">
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  
	const dispatch = createEventDispatcher();
  
	let time: number = 0;
	let startTime: number;
	let interval: ReturnType<typeof setInterval>;
  
	const formatTime = (time: number): string => {
	  const minutes: number = Math.floor(time / 60);
	  const seconds: number = parseFloat((time % 60).toFixed(3));
	  return `${minutes}:${seconds.toFixed(3)}`;
	};
  
	const updateTimer = (): void => {
	  const currentTime: number = performance.now();
	  time = (currentTime - startTime) / 1000;
	};
  
	function stopTimer(): void {
	  clearInterval(interval);
	  dispatch("stop", time);
	}
  
	onMount(() => {
	  startTime = performance.now();
	  interval = setInterval(updateTimer, 50);
	});
  
	onDestroy(stopTimer);
  </script>
  
  <h2>{formatTime(time)}</h2>
  