<script lang="ts">
  import Container from '$lib/components/Container.svelte';
  import ImageCarousel from '$lib/components/images-components/ImageCarousel.svelte';

  import Checkmark from '$lib/components/icons/Checkmark.svelte';
  import { tweened } from 'svelte/motion';
  import type { PageData } from './$types';

  import ImageLForm from '$lib/components/images-components/ImageLForm.svelte';

  export let data: PageData;

  $: fieldtrip = data.fieldtrip;

  const animatedTitleIndex = tweened(0, { duration: 600 });
  $: animatedTitleOutput =
    fieldtrip.title.slice(0, $animatedTitleIndex) +
    ($animatedTitleIndex === fieldtrip.title.length ? '' : '|');

  async function resetAnimation() {
    await animatedTitleIndex.set(0, { duration: 0 });
    animatedTitleIndex.set(fieldtrip.title.length);
  }

  $: fieldtrip.title, fieldtrip.imageId, resetAnimation();

</script>


<div class="mt-32 overflow-hidden sm:mt-40">
    <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
      >
        <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
          <p class="mb-4">{new Date().getFullYear() - 1} - {new Date().getFullYear()}</p>
          <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:leading-[4rem]">{animatedTitleOutput}</h2>
          <p class="mt-6 text-xl/8 text-gray-600">
            {fieldtrip.preview}
          </p>
          <p class="mt-6 text-base/7 text-gray-600">
            {fieldtrip.description}
          </p>
        </div>

        <ImageLForm fieldtripImageId={fieldtrip.imageId}/>

      </div>
    </div>

  </div>
