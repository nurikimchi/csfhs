<script lang="ts">
  import { supabase } from '$lib/supabaseClient';
  import { invalidate } from '$app/navigation';
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/navbar/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  onMount(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange(() => {
      invalidate('supabase:auth');
    });

    return () => {
      subscription.unsubscribe();
    };
  });
</script>

<svelte:head>
  <title>CSFHS</title>
</svelte:head>

<Navbar />

<main>
  <slot />
</main>

<Footer />

<style>
  :global(body) {
    background-color: black;
  }
</style>
