<script lang="ts">
  import Container from '$lib/components/Container.svelte';
  import DesktopNavbar from './DesktopNavbar.svelte';
  import MobileNavbar from './MobileNavbar.svelte';
</script>

<nav class="py-4 border-b">
  <Container>
    <MobileNavbar />
    <DesktopNavbar />
  </Container>
</nav>
