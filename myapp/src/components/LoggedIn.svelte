<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import userStore from '../stores/userStore';
	let isVisible = writable(false);
	onMount(() => {
		isVisible.set(true);
		setTimeout(() => {
			isVisible.set(false);
		}, 3000); // Hide after 3 seconds
	});
</script>

<div class="logged-in-container" class:visible={$isVisible}>
	<p>It's your time: {$userStore.email}</p>
</div>
