<script lang="ts">
    import Container from '$lib/components/Container.svelte';
    import ImageCarousel from '$lib/components/images/ImageCarousel.svelte';
    import BackdropText from '$lib/components/text/BackdropText.svelte';
    import FaCheckCircle from 'svelte-icons/fa/FaCheckCircle.svelte';
    import FaGraduationCap from 'svelte-icons/fa/FaGraduationCap.svelte';
    import { tweened } from 'svelte/motion';
    import type { PageData } from './$types';
  
    export let data: PageData;
    $: pathWay = data.pathWay;
  
    const animatedTitleIndex = tweened(0, { duration: 600 });
    $: animatedTitleOutput =
     pathWay.title.slice(0, $animatedTitleIndex) +
      ($animatedTitleIndex === pathWay.title.length ? '' : '|');
  
    async function resetAnimation() {
      await animatedTitleIndex.set(0, { duration: 0 });
      animatedTitleIndex.set(pathWay.title.length);
    }
  
    $: pathWay.title, resetAnimation();
  </script>
  
  <Container>
    <div class="flex-[4] min-h-screen">
      <div class="flex flex-col pt-6 md:pt-8">
        <div class="flex-1">
          <p class="mb-4">{new Date().getFullYear() - 1} - {new Date().getFullYear()}</p>
          <BackdropText
            text={animatedTitleOutput}
            className="font-extrabold text-5xl md:text-8xl leading-[5rem] md:leading-[8rem]"
          />
        </div>
  
        <div class="flex-1 mt-6">
          <div class="md:text-lg mb-6">{pathWay.overview}</div>
  
          <ul class="flex flex-col gap-6">
            {#each pathWay.bullets as bullet}
              <li class="flex flex-row">
                <div>
                  <div class="text-emerald-500 w-[24px]">
                    <FaCheckCircle />
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
  
      <a
        href="https://frhs.egusd.net/Programs/STEAM-Pathways/index.html"
        class="w-max items-center flex flex-row my-8 md:my-10 rounded-l-2xl bg-gradient-to-r from-blue-700 to-blue-600 p-6 text-white text-[13px] sm:text-sm md:text-base tracking-wide shadow-lg shadow-blue-500/50 transition hover:-translate-y-1"
        style="border-radius: 16px 50px 50px 16px;"
      >
        <p class="font-semibold font-sans">Sign up for the Computer Science Pathway</p>
  
        <block class="w-4 h-4 block ml-4">
          <FaGraduationCap />
        </block>
      </a>
  
      {#if data.pageImages.length > 0}
        <div class="flex flex-col-reverse md:flex-row md:space-x-8">
          <div class="flex-1 mt-8 md:mt-0">
            <ImageCarousel images={data.pageImages.map((src) => ({ alt: '', src }))} />
          </div>
        </div>
      {/if}
    </div>
  </Container>