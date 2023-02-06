<script lang="ts">
  type Options = $$Generic<string[] | readonly string[]>;
  type Option = Options[number];

  export let options: Options;
  export let onClick: (option: Option) => void;

  const selectedClasses = 'bg-indigo-600 text-white';

  let selected: Option = options[0];
</script>

<div class="rounded-full flex flex-row bg-gray-50 overflow-hidden my-2 shadow-inner">
  {#each options as option}
    <button
      class="flex-1 py-2 text-xs capitalize transition rounded-full {option === selected
        ? selectedClasses
        : ''}"
      on:click={() => {
        selected = option;
        onClick(option);
      }}
    >
      {option}
    </button>
  {/each}
</div>
