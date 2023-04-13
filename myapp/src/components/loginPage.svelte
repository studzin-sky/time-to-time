<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createClient } from '@supabase/supabase-js';
	import userStore from '../stores/userStore';

	const SUPABASE_URL = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
	const SUPABASE_ANON_KEY = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

	const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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
	export let onSuccess: (email: string) => void = (email: string) => {
		userStore.set({ email });
	};

	async function handleSubmit() {
		try {
			const response = isRegistering
				? await supabase.auth.signUp({ email, password })
				: await supabase.auth.signInWithPassword({ email, password });

			if (response.error) {
				alert(response.error.message);
			} else {
				if (response.data && response.data.user) {
					onSuccess(response.data.user.email || '');
				} else {
					supabase.auth.onAuthStateChange(async (event, session) => {
						if (event === 'SIGNED_IN' && session && session.user) {
							onSuccess(session.user.email || '');
						}
					});
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

<style>
	.login-icon {
		cursor: pointer;
		font-size: 24px;
	}

	.login-form {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;
	}

	input {
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
</style>
