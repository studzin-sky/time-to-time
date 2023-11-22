<script lang="ts">
	import LoginPage from '../components/LoginPage.svelte';
	import MainTimer from '../components/MainTimer.svelte';
	import LoggedIn from '../components/LoggedIn.svelte';
	import TimeRecordBoard from '../components/TimeRecordBoard.svelte';
	import userStore, { type User } from '../stores/userStore';

	// This function is called when a user successfully logs in
	function handleLoginSuccess(user: User) {
		userStore.set(user);
	}
</script>

<header>
	{#if $userStore.id} 
		<LoggedIn />
	{:else}
		<LoginPage onSuccess={handleLoginSuccess} />
	{/if}
</header>
<TimeRecordBoard />
<div class="container">
	<MainTimer />
</div>