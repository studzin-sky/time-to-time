<script lang="ts">
	import LoginPage from '../components/LoginPage.svelte';
	import MainTimer from '../components/MainTimer.svelte';
	import LoggedIn from '../components/LoggedIn.svelte';
	import TimeRecordBoard from '../components/TimeRecordBoard.svelte';
	import userStore from '../stores/userStore';
	let showLogin = true;

	function handleLoginSuccess(email: string) {
		userStore.update((user) => ({ ...user, email }));
		showLogin = false;
	}
</script>

<header>
	{#if showLogin}
		<LoginPage onSuccess={handleLoginSuccess} />
	{:else}
		<LoggedIn />
	{/if}
</header>
<TimeRecordBoard />
<div class="container">
	<MainTimer />
</div>
