<script lang="ts">
    import Container from '$lib/components/Container.svelte';
    import ImageCarousel from '$lib/components/images/ImageCarousel.svelte';
    import { tweened } from 'svelte/motion';
    import type { PageData } from './$types';
  
    export let data: PageData;
    $: opportunity = data.opportunity;
  
    const animatedTitleIndex = tweened(0, { duration: 600 });
    $: animatedTitleOutput =
      opportunity.title.slice(0, $animatedTitleIndex) +
      ($animatedTitleIndex === opportunity.title.length ? '' : '|');
  
    async function resetAnimation() {
      await animatedTitleIndex.set(0, { duration: 0 });
      animatedTitleIndex.set(opportunity.title.length);
    }
  
    $: opportunity.title, resetAnimation();
  </script>
  
  <Container>

      <div class="overflow-hidden bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div class="max-w-2xl">
            <p class="text-base/7 font-semibold text-indigo-600">{new Date().getFullYear() - 1} - {new Date().getFullYear()}</p>
            <h1 class="mt-2 lg:leading-[4rem] text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{animatedTitleOutput}</h1>
            <p class="mt-6 text-balance text-xl/8 text-gray-700">{opportunity.preview}</p>
          </div>
          <section class="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            <div class="lg:pr-8">
              <h2 class="text-pretty text-2xl font-semibold tracking-tight text-gray-900">About</h2>
              <p class="mt-6 text-base/7 text-gray-600">{opportunity.description}</p>
              <p class="mt-8 text-base/7 text-gray-600">{opportunity.descriptionSecond}</p>
            </div>
            <div class="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
              <div class="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                {#if data.pageImages.length > 0}
                    {#each data.pageImages as image, index}
                        {#if index % 2 == 0}
                            <div class="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                                <img alt="" src={image} class="block size-full object-cover">
                            </div>
                        {/if}
                        {#if index % 2 != 0}
                            <div class="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                                <img alt="" src={image} class="block size-full object-cover">
                            </div>
                        {/if}
                    {/each}
                {/if}
              </div>
            </div>
            <div class="max-lg:mt-16 lg:col-span-1">
              <p class="text-base/7 font-semibold text-gray-500">The numbers</p>
              <hr class="mt-6 border-t border-gray-200">
              <dl class="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {#each opportunity.achievements as achievement}
                    <div class="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                    <dt class="text-sm/6 text-gray-600">{achievement.label}</dt>
                    <dd class="order-first text-6xl font-semibold tracking-tight">{achievement.stat}</dd>
                    </div>
                {/each}
              </dl>
            </div>
          </section>
        </div>
      </div>

      <div class="bg-white">
        <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 class="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">Want to get involved?</h2>
            {#if opportunity.signup.talkToTeacher == true}
              <p class="mx-auto mt-6 max-w-xl text-pretty text-xl/8 text-gray-300">Email Mr. Dagler at <a class="underline" href=mailto:cdagler@egusd.net>cdagler@egusd.net</a> or go to HG-1 before or after school.</p>
            {/if}
            {#if opportunity.signup.talkToTeacher == false}
              <p class="mx-auto mt-6 max-w-xl text-pretty text-xl/8 text-gray-300">Register with the link below.</p>
            {/if}
            {#if opportunity.signup.link != null}
              <div class="mt-10 flex items-center justify-center gap-x-6">
                  <a href={opportunity.signup.link} target="_blank" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Sign up</a>
              </div>
            {/if}
            <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
              <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7" />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stop-color="#7775D6" />
                  <stop offset="1" stop-color="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      
      
  
      <!-- {#if data.pageImages.length > 0}
        <div class="flex flex-col-reverse md:flex-row md:space-x-8">
          <div class="flex-1 mt-16 md:mt-0">
            <ImageCarousel images={data.pageImages.map((src) => ({ alt: '', src }))} />
          </div>
        </div>
      {/if} -->

  </Container>
  