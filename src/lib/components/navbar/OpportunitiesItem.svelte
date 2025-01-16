<script lang="ts">
    import ExternalArrow from './ExternalArrow.svelte';
  
    export let title: string;
    export let preview: string;
    export let href: string;
    export let type: string;
  
    let show = false;
</script>
  
<a
  class="p-2 w-full cursor-pointer group"
  on:mouseenter={() => (show = true)}
  on:mouseleave={() => (show = false)}
  {href}
>
  <div class="flex flex-row items-center justify-between">
    <h1 class="text-m font-semibold">{title}</h1>
    <ExternalArrow {show} />
  </div>

  <p class="mt-2 text-xs max-w-[32rem] lg:max-w-[16rem] text-gray-600 group-hover:text-black">{preview}</p>

  <div class="flex flex-row items-center mt-2">
      {#if type === 'Award'}
          <span class="inline-flex items-center rounded-md bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700">{type}</span>
      {/if}
      {#if type === 'Certification'}
          <span class="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700">{type}</span>
      {/if}
      {#if type === 'Club'}
          <span class="inline-flex items-center rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">{type}</span>
      {/if}
      {#if type === 'Competition'}
          <span class="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">{type}</span>
      {/if}
  </div>
</a>
  