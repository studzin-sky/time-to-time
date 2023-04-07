<script lang="ts">
	import Timer from '../Timer.svelte';
	import '../style.css';
	let isTime: number = 0;
	function isTimeClick(): void {
	  isTime = 1;
	}
	function isTimeUnclick(): void {
	  isTime = 0;
	}
  </script>
  
  {#if !isTime}
	<div>
	  <h1>It's time to time</h1>
	  <button on:click={isTimeClick}>Time it</button>
	</div>
  {:else}
	<div>
	  <Timer />
	  <button on:click={isTimeUnclick}>back</button>
	</div>
  {/if}
  
  <style>
  </style>
  