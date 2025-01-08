<script lang="ts">
  import ExternalArrow from './ExternalArrow.svelte';

  export let title: string;
  export let description: string;
  export let href: string;

  let show = false;
</script>

<a
  class="p-4 w-full cursor-pointer group"
  on:mouseenter={() => (show = true)}
  on:mouseleave={() => (show = false)}
  {href}
>
  <div class="flex flex-row items-center justify-between">
    <h1 class="text-m font-semibold">{title}</h1>

    <ExternalArrow {show} />
  </div>
  <p class="text-xs max-w-[35ch] text-gray-600 group-hover:text-black">{description}</p>
</a>
