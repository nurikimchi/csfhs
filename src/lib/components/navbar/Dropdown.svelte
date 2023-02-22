<script lang="ts">
  import { spring } from 'svelte/motion';
  import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte';

  export let title: string;
  export let padding: number = 32;
  export let arrowLeftOffset: number = -1;

  let isInButton = false;
  let isInDropdown = false;

  const dropdownOpacity = spring(0);
  const arrowRotation = spring(0);

  $: show = isInButton || isInDropdown;
  $: dropdownOpacity.set(+show);
  $: arrowRotation.set(show ? 180 : 0);
  $: animationIsActive = $dropdownOpacity < 1 && $dropdownOpacity > 0;

  function handleMouseIn() {
    isInButton = true;
  }

  function handleMouseLeave() {
    setTimeout(() => (isInButton = false), 1);
  }

  function handleMouseInDropdown() {
    if (!animationIsActive || isInButton) {
      isInDropdown = true;
    }
  }

  function handleMouseLeaveDropdown() {
    setTimeout(() => (isInDropdown = false), 1);
  }
</script>

<div>
  <div
    class="flex flex-row pr-8 py-2 items-center"
    on:mouseenter={handleMouseIn}
    on:mouseleave={handleMouseLeave}
  >
    <p class="font-semibold cursor-default transition hover:text-gray-600 w-max text-sm pr-2">
      {title}
    </p>

    <div class="h-[0.8rem] block origin-center" style="transform: rotateZ({$arrowRotation}deg);">
      <FaChevronDown />
    </div>
  </div>

  {#if $dropdownOpacity !== 0}
    <div>
      {#if arrowLeftOffset > 0}
        <div
          class="arrow"
          style:opacity={$dropdownOpacity}
          style:margin-left="{arrowLeftOffset - 8}px"
        />
      {/if}
      <div
        class="absolute pt-2 pr-4 z-20"
        on:mouseenter={handleMouseInDropdown}
        on:mouseleave={handleMouseLeaveDropdown}
        style:transform-origin="top"
        style:opacity={$dropdownOpacity}
        style:transform="rotateX({(1 - $dropdownOpacity) * 10}deg)"
        style:pointer-events={show ? 'initial' : 'none'}
      >
        <div
          class="bg-white rounded-md shadow-2xl max-w-2xl border-4 border-gray-100"
          style:padding="{padding}px"
        >
          <slot />
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .arrow {
    @apply bg-gray-100 shadow-2xl z-10 rounded-sm;

    position: absolute;
    width: 16px;
    height: 16px;
    margin-left: 21px;
    transform: rotateZ(45deg);
  }
</style>
