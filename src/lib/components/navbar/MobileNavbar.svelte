<script lang="ts">
  import { browser } from '$app/environment';
  import { courses } from '$lib/utils/navdata/courses';
  import { moreInformationItems } from '$lib/utils/navdata/moreinfo';
  import { onMount } from 'svelte';
  import IoMdClose from 'svelte-icons/io/IoMdClose.svelte';
  import IoMdMenu from 'svelte-icons/io/IoMdMenu.svelte';
  import { fade, fly } from 'svelte/transition';
  import Container from '../Container.svelte';
  import SlideSelector from '../SlideSelector.svelte';
  import MobileItem from './MobileItem.svelte';
  import MobileNavbarSection from './MobileNavbarSection.svelte';

  const NO_SCROLL_CLASSES = ['overflow-hidden', 'h-full'];

  const selectedAreaOptions = ['classes', 'info'] as const;
  type SelectedArea = (typeof selectedAreaOptions)[number];

  let selectedArea: SelectedArea = 'classes';
  let visible = false;

  $: visible, lockScroll();

  function lockScroll() {
    if (!browser) return;

    if (visible) {
      window.document.body.classList.add(...NO_SCROLL_CLASSES);
      return;
    }

    window.document.body.classList.remove(...NO_SCROLL_CLASSES);
  }

  function handleSlideSelect(option: SelectedArea) {
    selectedArea = option;
  }
</script>

<div
  class="md:hidden bg-gradient-to-b w-full bg-white z-50 {visible
    ? 'fixed min-h-screen overflow-scroll max-h-screen'
    : ''}"
>
  <Container>
    <div class="flex flex-row justify-end relative z-40 py-4 bg-white">
      <button class="cursor-pointer rounded-md w-8" on:click={() => (visible = !visible)}>
        {#if visible}
          <IoMdClose />
        {:else}
          <IoMdMenu />
        {/if}
      </button>
    </div>
  </Container>

  {#if visible}
    <div class="bg-white w-full z-30 overflow-scroll" in:fly={{ y: -25, duration: 300 }}>
      <div class="flex flex-col px-4 bg-white">
        <SlideSelector options={selectedAreaOptions} onClick={handleSlideSelect} />

        <div class="mt-2">
          {#if selectedArea === 'classes'}
            <MobileNavbarSection title="Classes">
              {#each courses as course}
                <MobileItem item={course} />
              {/each}
            </MobileNavbarSection>
          {/if}

          {#if selectedArea === 'info'}
            <MobileNavbarSection title="Info">
              {#each moreInformationItems as moreInformationItem}
                <MobileItem item={moreInformationItem} />
              {/each}
            </MobileNavbarSection>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>
