<script lang="ts">
	import LoginPage from '../components/LoginPage.svelte';
	import TimerList from '../components/TimerList.svelte';
	import MainTimer from '../components/MainTimer.svelte';
	import LoggedIn from '../components/LoggedIn.svelte';
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
<div class="container">
	<TimerList />
	<MainTimer />
</div>
