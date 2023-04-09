<script lang="ts">
  import { browser } from '$app/environment';
  import { courseHref, courses } from '$lib/utils/navdata/courses';
  import { moreInformationItems, moreInfoHref } from '$lib/utils/navdata/moreinfo';
  import IoMdClose from 'svelte-icons/io/IoMdClose.svelte';
  import IoMdMenu from 'svelte-icons/io/IoMdMenu.svelte';
  import { fly, type TransitionConfig } from 'svelte/transition';
  import { onDestroy } from 'svelte';
  import Container from '../Container.svelte';
  import SlideSelector from '../SlideSelector.svelte';
  import MobileItem from './MobileItem.svelte';
  import MobileNavbarSection from './MobileNavbarSection.svelte';
  import { page } from '$app/stores';
  import IoLogoInstagram from 'svelte-icons/io/IoLogoInstagram.svelte';

  const NO_SCROLL_CLASSES = ['overflow-hidden', 'h-full'];

  function buttonFade(_node: Element): TransitionConfig {
    return {
      css: (t) => `
        position: absolute;
        top: 0;
        opacity: ${t};
      `,
      duration: 150
    };
  }

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

  $: $page.url.href, (visible = false);
</script>

<div id="movile-nav-csfhs" class="md:hidden w-full bg-white z-50" class:nav-enabled={visible}>
  <Container>
    <div class="flex flex-row justify-between relative z-40 py-4 h-max">
      <div>
        <a href="https://instagram.com/fhs.computerscience?igshid=YmMyMTA2M2Y=" class="mr-10">
          <div class="relative">
            <div
              class="w-14 h-14 bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 to-blue-500 text-indigo-500"
            >
              <IoLogoInstagram />
            </div>
          </div>
        </a>
      </div>

      <button
        class="cursor-pointer rounded-md w-8 h-8 relative"
        on:click={() => (visible = !visible)}
      >
        {#if visible}
          <div transition:buttonFade>
            <IoMdClose />
          </div>
        {:else}
          <div transition:buttonFade>
            <IoMdMenu />
          </div>
        {/if}
      </button>
    </div>

    {#if visible}
      <div class="w-full z-30" in:fly={{ y: -25, duration: 300 }}>
        <div class="flex flex-col">
          <SlideSelector options={selectedAreaOptions} onClick={handleSlideSelect} />

          <div class="mt-2 mb-6">
            {#if selectedArea === 'classes'}
              <MobileNavbarSection title="Classes">
                {#each courses as course}
                  <MobileItem item={{ ...course, href: courseHref(course) }} />
                {/each}
              </MobileNavbarSection>
            {/if}

            {#if selectedArea === 'info'}
              <MobileNavbarSection title="Info">
                {#each moreInformationItems as moreInformationItem}
                  <MobileItem item={{ ...moreInformationItem, href: moreInfoHref(moreInformationItem) }} />
                {/each}
              </MobileNavbarSection>
            {/if}

            <div class="pb-[70px]" />
          </div>
        </div>
      </div>
    {/if}
  </Container>
</div>

<style>
  .nav-enabled {
    @apply absolute top-0 overflow-auto;
    height: 100vh;
  }
</style>
