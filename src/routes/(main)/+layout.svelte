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
  <title>FHS Computer Science</title>
  <meta name="description" content="The Computer Science Pathway at Franklin High School offers a wide range of courses for students to learn about the world of technology." />
  <meta name="keywords" content="Franklin High School Computer Science, FHS Computer Science, CSFHS, FHS, FRHS, STEAM Academy, STEAM Computer Science Pathway" />
</svelte:head>

<Navbar />

<main class="bg-white">
  <slot />
</main>

<Footer />
