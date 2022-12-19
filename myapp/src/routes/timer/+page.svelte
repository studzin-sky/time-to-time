
<script>
	import { onMount } from "svelte";

    let milisecond = 0;
    let second = 0;
    let minute = 0;
    let hour = 0;
	onMount(() => {
		const interval = setInterval(() => {
			milisecond = milisecond + 1;
		}, 1);
	});
    if (milisecond === 1000) {second++; milisecond = 0;}
    if (second === 60) {minute ++; second = 0;}
    if (minute === 60) {hour ++; minute = 0;}
    if (hour === 24) {hour = 0}
</script>
<style>

</style><body>
<p>you timed</p>
<p>{milisecond} miliseconds</p>
<p>{second} seconds</p>
<p>{minute} minutes</p>
<p>{hour} hours</p>
<button><a href='./'>back</a></button></body>