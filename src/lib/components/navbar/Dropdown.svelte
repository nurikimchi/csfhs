<script lang="ts">
  import { spring } from 'svelte/motion';
  import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte';
  import { page } from '$app/stores';

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
    class="flex flex-row pr-8 py-2 items-center"
    on:mouseenter={handleMouseIn}
    on:mouseleave={handleMouseLeave}
  >
    <p
      class="font-semibold font-sans cursor-default transition hover:text-gray-600 w-max text-sm pr-2"
    >
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
        style:pointer-events={visible ? 'initial' : 'none'}
      >
        <div
          class="bg-gradient-to-tr from-slate-50 to-gray-50 rounded-md shadow-2xl shadow-slate-500/30 max-w-2xl"
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
    @apply bg-slate-100 shadow-2xl shadow-slate-500/30 z-10 rounded-sm;

    position: absolute;
    width: 16px;
    height: 16px;
    margin-left: 21px;
    transform: rotateZ(45deg);
  }
</style>
