<script lang="ts">
  import { supabase } from '$lib/supabaseClient';
  import { invalidate } from '$app/navigation';
  import { onMount } from 'svelte';
  import '../app.css';
  import Navbar from '$lib/components/navbar/Navbar.svelte';

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

<main>
  <slot />
</main>
