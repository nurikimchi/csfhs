<script lang="ts">
  import { spring } from 'svelte/motion';
  import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte';
  import { page } from '$app/stores';
  import { fly } from 'svelte/transition';

  const TRANSFORM_OFFSET = -240;

  export let title: string;
  export let padding: number = 32;
  export let arrowLeftOffset: number = -1;

  let isInButton = false;
  let isInDropdown = false;

  const dropdownOpacity = spring(0);
  const arrowRotation = spring(0);

  $: visible = isInButton || isInDropdown;
  $: dropdownOpacity.set(+visible);
  $: arrowRotation.set(visible ? 180 : 0);
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

  $: $page.url.href, (visible = false);
</script>

<div>
  <div
    class="flex flex-row pr-10 py-2 items-center hover:text-gray-600"
    on:mouseenter={handleMouseIn}
    on:mouseleave={handleMouseLeave}
  >
    <p class="font-semibold font-sans cursor-default transition w-max text-sm pr-2">
      {title}
    </p>

    <div
      class="h-[0.8rem] block origin-center transition-colors"
      style="transform: rotateZ({$arrowRotation}deg);"
    >
      <FaChevronDown />
    </div>
  </div>

  {#if $dropdownOpacity !== 0}
    <div>
      <div
        class="absolute pt-2 pr-4 z-20"
        on:mouseenter={handleMouseInDropdown}
        on:mouseleave={handleMouseLeaveDropdown}
        style:transform-origin="top"
        style:opacity={$dropdownOpacity}
        style:pointer-events={visible ? 'initial' : 'none'}
      >
        <div
          class="bg-gradient-to-tr from-slate-50 to-gray-50 rounded-md shadow-2xl shadow-slate-500/30 max-w-2xl border-[rgb(218, 223, 232)] border"
          in:fly={{ x: -20 }}
          style:padding="{padding}px"
        >
          <slot />
        </div>
      </div>
    </div>
  {/if}
</div>
