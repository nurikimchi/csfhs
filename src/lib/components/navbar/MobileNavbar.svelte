<script lang="ts">
  import { courses } from '$lib/utils/navdata/courses';
  import { moreInformationItems } from '$lib/utils/navdata/moreinfo';
  import IoMdClose from 'svelte-icons/io/IoMdClose.svelte';
  import IoMdMenu from 'svelte-icons/io/IoMdMenu.svelte';
  import { fade } from 'svelte/transition';
  import Container from '../Container.svelte';
  import SlideSelector from '../SlideSelector.svelte';
  import MobileItem from './MobileItem.svelte';
  import MobileNavbarSection from './MobileNavbarSection.svelte';

  const selectedAreaOptions = ['classes', 'info'] as const;
  type SelectedArea = (typeof selectedAreaOptions)[number];

  let selectedArea: SelectedArea = 'classes';
  let visible = false;

  function handleSlideSelect(option: SelectedArea) {
    selectedArea = option;
  }
</script>

<div class="md:hidden py-4">
  <Container>
    <div class="relative flex flex-row justify-end">
      <button class="cursor-pointer rounded-md w-10" on:click={() => (visible = true)}>
        <IoMdMenu />
      </button>

      {#if visible}
        <div class="absolute top-0 left-0 w-full z-50" transition:fade={{ duration: 75 }}>
          <div class="flex flex-col rounded-md shadow-2xl bg-white border p-4">
            <div class="flex flex-row justify-between items-center mb-2">
              <h1 class="font-bold text-lg">Menu</h1>
              <button
                class="h-[1.5em] w-[1.5em] p-1 text-white bg-indigo-600 rounded-md"
                on:click={() => (visible = false)}
              >
                <IoMdClose />
              </button>
            </div>

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
  </Container>
</div>
