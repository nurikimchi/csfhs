<script lang="ts">
  import Container from '../Container.svelte';
  import ClassesDropdown from './ClassesDropdown.svelte';
  import MoreInfoDropdown from './MoreInfoDropdown.svelte';

  let scrollY: number;
</script>

<div
  class="hidden md:block py-4 text-white z-20 sticky top-0 backdrop-blur-lg {scrollY > 10
    ? 'border-b border-white/10 shadow-lg shadow-slate-600/10'
    : ''}"
>
  <Container>
    <div class="flex flex-row space-x-8">
      <ClassesDropdown />
      <MoreInfoDropdown />
    </div>
  </Container>
</div>

<svelte:window bind:scrollY />
