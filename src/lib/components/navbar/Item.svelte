<script lang="ts" context="module">
  export interface ItemProps {
    title: string;
    preview: string;
    href: string;
  }
</script>

<script lang="ts">
  import ExternalArrow from './ExternalArrow.svelte';

  export let title: string;
  export let preview: string;
  export let href: string;
  export let type: string;
  export let grades: string;

  let show = false;
</script>

<a
  class="w-full cursor-pointer group"
  on:mouseenter={() => (show = true)}
  on:mouseleave={() => (show = false)}
  {href}
>
  <div class="flex flex-row justify-between text-lg items-center">
    <h1 class="font-semibold text-black hover:text-black">{title}</h1>
    <div class="ml-auto">
      <span class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">{grades}</span>
    </div>
    <div class="ml-4">
      
      {#if type === 'Pathway'}
          <span class="inline-flex items-center rounded-md bg-pink-100 px-2 py-1 text-xs font-medium text-pink-700">{type}</span>
      {/if}
      {#if type === 'Elective'}
          <span class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">{type}</span>
      {/if}
    </div>
    

    <ExternalArrow {show} />
  </div>
  <p class="mt-2 text-xs text-gray-500 transition duration-100 group-hover:text-gray-900">
    {preview}
  </p>
</a>
