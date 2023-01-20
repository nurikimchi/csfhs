<script lang="ts">
  import { writable } from 'svelte/store';
  import { fade } from 'svelte/transition';
  import FaChevronLeft from 'svelte-icons/fa/FaChevronLeft.svelte';
  import FaChevronRight from 'svelte-icons/fa/FaChevronRight.svelte';

  export let images: ImageOptions[];

  let isTransitioning = false;

  const IMAGE_ROTATION_LENGTH_MS = 5000;
  const IMAGE_VIEW_EXTRA_TIME_MS = 7000;

  interface ImageOptions {
    src: string;
    alt: string;
  }

  let currentImageIndex = writable(0);
  $: currentImage = images[$currentImageIndex];
  let timeout: NodeJS.Timeout | null = null;

  const resetTimeout = (time = IMAGE_ROTATION_LENGTH_MS) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(advanceImage, time);
  };

  function nextImage() {
    if (!isTransitioning) {
      currentImageIndex.update((val) => ($currentImageIndex === images.length - 1 ? 0 : val + 1));
      resetTimeout(IMAGE_ROTATION_LENGTH_MS + IMAGE_VIEW_EXTRA_TIME_MS);
    }
  }

  function previousImage() {
    if (!isTransitioning) {
      currentImageIndex.update((val) => ($currentImageIndex === 0 ? images.length - 1 : val - 1));
      resetTimeout(IMAGE_ROTATION_LENGTH_MS + IMAGE_VIEW_EXTRA_TIME_MS);
    }
  }

  function advanceImage(initial = false) {
    if (!initial) {
      nextImage();
    }
    resetTimeout();
  }

  advanceImage(true);
</script>

<div>
  <div class="relative">
    {#key $currentImageIndex}
      <div class="absolute">
        <!-- Actual display image -->
        <img
          alt={currentImage.alt}
          src={currentImage.src}
          transition:fade
          class="rounded-md top-0 shadow-lg"
        />
      </div>
    {/key}
  </div>

  <div>
    <div class="relative">
      <!-- Placeholder image for content to be after the absolute image -->
      <img alt={currentImage.alt} src={currentImage.src} class="invisible" />

      <button
        class="absolute z-10 top-1/2 -translate-y-1/2 left-0 px-6 h-8 opacity-50 text-gray-200 cursor-pointer"
        on:click={previousImage}
      >
        <FaChevronLeft />
      </button>

      <button
        class="absolute z-10 top-1/2 -translate-y-1/2 right-0 px-6 h-8 opacity-50 text-gray-200 cursor-pointer"
        on:click={nextImage}
      >
        <FaChevronRight />
      </button>
    </div>

    <div class="flex flex-row space-x-4 justify-center my-4">
      {#each { length: images.length } as _, n}
        <div
          class="rounded-full p-1 {$currentImageIndex === n ? 'bg-indigo-600' : 'bg-gray-300'}"
        />
      {/each}
    </div>
  </div>
</div>
