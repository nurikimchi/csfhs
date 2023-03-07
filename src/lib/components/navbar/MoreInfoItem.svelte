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
    <div>
      <h1 class="text-sm font-semibold">{title}</h1>
    </div>

    <div>
      <ExternalArrow {show} />
    </div>
  </div>
  <p class="text-xs max-w-[35ch] text-gray-400 group-hover:text-gray-500">{description}</p>
</a>
