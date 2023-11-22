<script lang="ts">
	import { fade } from 'svelte/transition';
	import { supabase } from '../clients/supabaseClient';
	import userStore, { type User } from '../stores/userStore';

	let showLoginForm = false;
	let isRegistering = false;
	let email = '';
	let password = '';

	function toggleLoginForm() {
		showLoginForm = !showLoginForm;
	}

	function toggleRegister() {
		isRegistering = !isRegistering;
	}
	export let onSuccess: (user: User) => void = (user: User) => {
		userStore.set(user);
	};

	async function handleSubmit() {
		try {
			const { data, error } = isRegistering
				? await supabase.auth.signUp({ email, password })
				: await supabase.auth.signInWithPassword({ email, password });

			if (error) {
				alert(error.message);
			} else if (data?.user) {
				const { user } = data;

				if (user.email) {
					const userId = user.id ?? null;
					const newUser: User = { email: user.email, id: userId };
					userStore.set(newUser);
					onSuccess(newUser);
				}
			}
		} catch (error) {
			alert((error as Error).message);
		}
	}
	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			toggleLoginForm();
		}
	}
</script>

{#if !showLoginForm}
	<i
		tabindex="0"
		class="login-icon"
		on:click={toggleLoginForm}
		on:keydown={handleKeyDown}
		role="button"
		aria-label="Toggle login form">🔒</i
	>
{:else}
	<div in:fade>
		<form class="login-form" on:submit|preventDefault={handleSubmit}>
			<input type="email" placeholder="Email" required bind:value={email} />
			<input type="password" placeholder="Password" required bind:value={password} />
			<button type="submit">
				{isRegistering ? 'Register' : 'Login'}
			</button>
			<button type="button" on:click={toggleRegister}>
				{isRegistering ? 'Login' : 'Register'}
			</button>
		</form>
		<i
			tabindex="0"
			class="login-icon"
			on:click={toggleLoginForm}
			on:keydown={handleKeyDown}
			role="button"
			aria-label="Close login form">❌</i
		>
	</div>
{/if}
