<script lang="ts">
  import type { Writable } from 'svelte/store';

  type Options = $$Generic<string[] | readonly string[]>;
  type Option = Options[number];

  export let options: Options;
  export let selected: Writable<Option>;

  const selectedClasses = 'bg-blue-600 text-white';
</script>

<div class="rounded-md flex flex-row bg-gray-50 overflow-hidden my-2 shadow-inner">
  {#each options as option}
    <button
      class="flex-1 py-2 text-xs capitalize transition rounded-md font-medium tracking-wide {option ===
      $selected
        ? selectedClasses
        : 'hover:text-blue-600'}"
      on:click={() => ($selected = option)}
    >
      {option}
    </button>
  {/each}
</div>
