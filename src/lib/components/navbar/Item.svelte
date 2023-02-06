<script lang="ts" context="module">
  export interface ItemProps {
    title: string;
    description: string;
    href: string;
  }
</script>

<script lang="ts">
  import ExternalArrow from './ExternalArrow.svelte';

  export let title: string;
  export let description: string;
  export let href: string;

  let show = false;
</script>

<a
  class="w-full cursor-pointer group"
  on:mouseenter={() => (show = true)}
  on:mouseleave={() => (show = false)}
  {href}
>
  <div class="flex flex-row justify-between text-sm items-center">
    <h1 class="font-semibold text-black hover:text-black">{title}</h1>

    <ExternalArrow {show} />
  </div>
  <p class="text-xs text-gray-500 transition duration-100 group-hover:text-gray-900">
    {description}
  </p>
</a>
