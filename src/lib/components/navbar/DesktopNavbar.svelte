<script lang="ts">
  import Container from '../Container.svelte';
  import ClassesDropdown from './ClassesDropdown.svelte';
  import MoreInfoDropdown from './MoreInfoDropdown.svelte';
</script>

<div class="hidden md:block py-4 bg-white z-20 transition-all">
  <Container>
    <div class="flex flex-row space-x-8">
      <ClassesDropdown />
      <MoreInfoDropdown />
    </div>
  </Container>
</div>
