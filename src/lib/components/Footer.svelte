<script>
  import Container from './Container.svelte';
</script>

<div class="relative mt-64 bg-gray-900 min-h-[13rem]">
  <div class="absolute bg-gray-900 origin-bottom-left -skew-y-[5deg] w-screen h-52">
    <div class="flex flex-row">
      <div class="h-4 w-32 bg-blue-600 -translate-y-1/2 flex-1" />
      <div class="h-4 w-20 bg-indigo-600 -translate-y-1/2 flex-1" />
      <div class="h-4 w-32 bg-cyan-600 -translate-y-1/2 flex-1" />
      <div class="h-4 w-32 bg-violet-600 -translate-y-1/2 flex-1" />
      <div class="h-4 w-32 bg-sky-600 -translate-y-1/2 flex-1" />
    </div>
  </div>
  <div class="bg-gray-900 py-12">
    <div class="text-white">
      <Container>
        <h1 class="font-bold text-3xl">CSFHS</h1>
        <p class="text-sm">
          by <a class="contributer-link" href="/">Esteban Garcia</a> &
          <a class="contributer-link" href="/">Omar Sadat</a>
        </p>
      </Container>
    </div>
  </div>
</div>

<style>
  .contributer-link {
    @apply text-sky-400 transition;
  }

  .contributer-link:hover {
    @apply text-sky-200;
  }
</style>
