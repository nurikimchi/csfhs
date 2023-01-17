<script lang="ts">
	import { supabase } from '$lib/supabaseClient';

	let loading = false;
	let email: string;
	let password: string;

	async function handleLogin() {}
</script>

<form on:submit|preventDefault={handleLogin}>
	<input type="email" placeholder="Your email" bind:value={email} />
	<input type="password" placeholder="Your password" bind:value={password} />
	<button type="submit">Submit</button>
</form>
