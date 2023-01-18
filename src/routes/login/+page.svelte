<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import { supabase } from '$lib/supabaseClient';

	let loading = false;
	let email: string;
	let password: string;

	async function handleLogin() {
		loading = true;
		const { data, error } = await supabase.auth.signUp({ email, password });
		console.log(data);
		console.log(error);
		loading = false;
	}
</script>

<Container width={600}>
	<form on:submit|preventDefault={handleLogin} class="flex flex-col my-12">
		<h1 class="text-3xl font-semibold">Login</h1>
		<p class="mb-2 mt-1">Login to that site!</p>

		<input
			class="text-sm my-2 rounded-md px-4 py-2 border outline-indigo-400 text-gray-700 placeholder:text-gray-400"
			type="email"
			placeholder="Your email"
			bind:value={email}
		/>
		<input
			class="text-sm my-2 rounded-md px-4 py-2 border outline-indigo-400 text-gray-700 placeholder:text-gray-400"
			type="password"
			placeholder="Your password"
			bind:value={password}
		/>

		<button
			type="submit"
			class="my-2 bg-indigo-500 transition hover:bg-indigo-600 p-4 font-semibold text-white rounded-md"
			>Log In</button
		>
	</form>
</Container>
