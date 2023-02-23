<script lang="ts">
  import Container from '../Container.svelte';
  import ClassesDropdown from './ClassesDropdown.svelte';
  import MoreInfoDropdown from './MoreInfoDropdown.svelte';

  let scrollY: number;
</script>

<div
  class="hidden md:block py-4 sticky top-0 bg-white z-20 transition-all {scrollY > 10
    ? 'border-b shadow-lg shadow-slate-400/20'
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
