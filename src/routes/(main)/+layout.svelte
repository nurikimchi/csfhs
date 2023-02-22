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

<div class="bg-white">
  <Navbar />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style>
  :global(body) {
    @apply bg-gray-900;
  }

  * {
    background-color: white;
  }
</style>
