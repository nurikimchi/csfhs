<script lang="ts">
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import { courseHref, courses } from '$lib/utils/navdata/courses';
  import { moreInfoHref, moreInformationItems } from '$lib/utils/navdata/moreinfo';
  import { opportunitiesHref, opportunities } from '$lib/utils/navdata/opportunities'

  /* eslint-disable */
  // @ts-ignore
  import IoLogoInstagram from 'svelte-icons/io/IoLogoInstagram.svelte';
  // @ts-ignore
  import IoMdClose from 'svelte-icons/io/IoMdClose.svelte';
  // @ts-ignore
  import IoMdMenu from 'svelte-icons/io/IoMdMenu.svelte';
  /* eslint-enable */
  
  import { writable } from 'svelte/store';
  import { fly, type TransitionConfig } from 'svelte/transition';
  import Container from '../Container.svelte';
  import SlideSelector from '../SlideSelector.svelte';
  import MobileItem from './MobileItem.svelte';
  import MobileNavbarSection from './MobileNavbarSection.svelte';
  import CsLogo from './CsLogo.svelte';
  import OpportunitiesItem from './OpportunitiesItem.svelte';
  // import OpportunitiesItems from './OpportunitiesItem.svelte';
  import { opportunitiesHrefById } from '$lib/utils/navdata/opportunities';

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

  const selectedAreaOptions = ['classes', 'info', 'opportunities'] as const;
  type SelectedArea = (typeof selectedAreaOptions)[number];

  let selectedArea = writable<SelectedArea>('classes');
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

  $: $page.url.href, (visible = false);
  $: isHomePage = $page.url.pathname === '/';

</script>

<div id="movile-nav-csfhs" class="md:hidden w-full bg-white z-50" class:nav-enabled={visible}>
  <Container>
    <div class="flex flex-row justify-between items-center relative z-40 py-4 h-max">
      <div class="flex flex-row items-center">
        {#if !isHomePage}
          <CsLogo />
        {/if}
        <!-- <a
          href="https://instagram.com/fhs.computerscience?igshid=YmMyMTA2M2Y="
          class="mr-10"
          aria-label="CSFHS Instagram Account"
        >
          <div class="relative">
            <div
              class="w-14 h-14 bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 to-blue-500 text-indigo-500"
            >
              <IoLogoInstagram />
            </div>
          </div>
        </a> -->
      </div>

      <button
        class="cursor-pointer rounded-md w-8 h-8 relative"
        on:click={() => (visible = !visible)}
        aria-label="Toggle Mobile Navigation"
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
          <SlideSelector options={selectedAreaOptions} selected={selectedArea} />

          <div class="mt-2 mb-6">
            {#if $selectedArea === 'classes'}
              <MobileNavbarSection title="Classes">
                {#each courses as course}
                  <MobileItem item={{ ...course, href: courseHref(course) }} />
                {/each}
              </MobileNavbarSection>
            {/if}

            {#if $selectedArea === 'info'}
              <MobileNavbarSection title="Info">
                {#each moreInformationItems as moreInformationItem}
                  <MobileItem
                    item={{ ...moreInformationItem, href: moreInfoHref(moreInformationItem) }}
                  />
                {/each}
              </MobileNavbarSection>
            {/if}
            
            {#if $selectedArea === 'opportunities'}
              <MobileNavbarSection title="Opportunities">
                {#each opportunities as { title, preview, type, id }}
                  <OpportunitiesItem {title} {preview} {type} href={opportunitiesHrefById(id)}/>
                {/each}
              </MobileNavbarSection>
            {/if}

            <div class="pb-[70px]"></div>
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
