
<script lang='ts'>
	import { onMount } from "svelte";

    let second = 0;
    let minute = 0;
    let hour = 0;
	onMount(() => {
		const interval = setInterval(() => {
			second = second + 1;
		}, 1000);
	});
    $: if (second === 60) {minute ++; second = 0;}
    $: if (minute === 60) {hour ++; minute = 0;}
    $: if (hour === 24) {hour = 0}
</script>
<style>

</style><body>
<p>you timed</p>
<p>{second} seconds</p>
<p>{minute} minutes</p>
<p>{hour} hours</p>
<button><a href='./'>back</a></button></body>