<script lang="ts">
  import Container from '$lib/components/Container.svelte';
  import ImageCarousel from '$lib/components/images-components/ImageCarousel.svelte';
  import BackdropText from '$lib/components/text/BackdropText.svelte';

  import Checkmark from '$lib/components/icons/Checkmark.svelte'
  import { tweened } from 'svelte/motion';
  import type { PageData } from './$types';

  export let data: PageData;
  $: moreInfo = data.moreInfo;

  const animatedTitleIndex = tweened(0, { duration: 600 });
  $: animatedTitleOutput =
    moreInfo.title.slice(0, $animatedTitleIndex) +
    ($animatedTitleIndex === moreInfo.title.length ? '' : '|');

  async function resetAnimation() {
    await animatedTitleIndex.set(0, { duration: 0 });
    animatedTitleIndex.set(moreInfo.title.length);
  }

  $: moreInfo.title, resetAnimation();
</script>

<Container>
  <div class="flex-[4] min-h-screen">
    <div class="flex flex-col pt-6 md:pt-8">
      <div class="flex-1">
        <p class="mb-4">{new Date().getFullYear() - 1} - {new Date().getFullYear()}</p>
        <h1 class="text-left font-bold pr-[14rem] text-4xl md:text-6xl leading-[3rem] md:leading-[5rem]">{animatedTitleOutput}</h1> 
      </div>

      <div class="flex-1 mt-6">
        <div class="md:text-lg mb-6">{moreInfo.overview}</div>

        <ul class="flex flex-col gap-6 mt-10">
          {#each moreInfo.bullets as bullet}
            <li class="flex flex-row">
              <div>

                <div class="text-emerald-500 w-[24px]">
                  <!-- check mark svg -->
                  <Checkmark/>                 
                </div>

              </div>

              <div class="ml-4">
                <p>{bullet}</p>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    {#if data.pageImages.length > 0}
      <div class="flex flex-col-reverse md:flex-row md:space-x-8">
        <div class="flex-1 mt-16 md:mt-0">
          <ImageCarousel images={data.pageImages.map((src) => ({ alt: '', src }))} />
        </div>
      </div>
    {/if}
  </div>
</Container>
