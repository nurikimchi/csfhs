<script lang="ts">
  import Container from '../Container.svelte';
  import ClassesDropdown from './ClassesDropdown.svelte';
  import MoreInfoDropdown from './MoreInfoDropdown.svelte';
  import FRHSLogo from '$lib/images/frhs-logo.jpeg';
</script>

<div class="hidden md:block py-4 z-20 transition-all bg-white">
  <Container>
    <div class="flex flex-row items-center">
      <a href="/">
        <img src={FRHSLogo} alt="" class="w-12 rounded mr-10 transition-all hover:brightness-125" />
      </a>
      <ClassesDropdown />
      <MoreInfoDropdown />
    </div>
  </Container>
</div>
