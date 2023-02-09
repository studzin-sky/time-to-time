<script lang="ts">
	import { onMount } from 'svelte';

	//declare variables
	let second = 0;
	let minute = 0;
	let hour = 0;
	
	//start the timer
	onMount(() => {
		const interval = setInterval(() => {
			second = second + 1;
		}, 1000);
	});
	
	//check if seconds have reached 60
	$: if (second === 60) {
		minute++;
		second = 0;
	}
	
	//check if minutes have reached 60
	$: if (minute === 60) {
		hour++;
		minute = 0;
	}
	
	//check if hours have reached 24
	$: if (hour === 24) {
		hour = 0;
	}
</script>

<p>you timed</p>
<p>{second} seconds</p>
<p>{minute} minutes</p>
<p>{hour} hours</p>
