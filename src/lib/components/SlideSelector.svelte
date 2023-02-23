<script lang="ts">
  type Options = $$Generic<string[] | readonly string[]>;
  type Option = Options[number];

  export let options: Options;
  export let onClick: (option: Option) => void;

  const selectedClasses = 'bg-blue-600 text-white';

  let selected: Option = options[0];
</script>

<div class="rounded-md flex flex-row bg-gray-50 overflow-hidden my-2 shadow-inner">
  {#each options as option}
    <button
      class="flex-1 py-2 text-xs capitalize transition rounded-md font-medium tracking-wide {option ===
      selected
        ? selectedClasses
        : 'hover:text-blue-600'}"
      on:click={() => {
        selected = option;
        onClick(option);
      }}
    >
      {option}
    </button>
  {/each}
</div>
