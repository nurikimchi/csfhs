<script lang="ts">
  import Container from '$lib/components/Container.svelte';
  import ImageCarousel from '$lib/components/images-components/ImageCarousel.svelte';
  import TeacherCard from '$lib/components/TeacherCard.svelte';

  import Checkmark from '$lib/components/icons/Checkmark.svelte';
  import { tweened } from 'svelte/motion';
  import type { PageData } from './$types';

  export let data: PageData;

  $: course = data.course;

  const animatedTitleIndex = tweened(0, { duration: 700 });
  $: animatedTitleOutput =
    course.title.slice(0, $animatedTitleIndex) +
    ($animatedTitleIndex === course.title.length ? '' : '|');

  async function resetAnimation() {
    await animatedTitleIndex.set(0, { duration: 0 });
    animatedTitleIndex.set(course.title.length);
  }

  $: course.title, resetAnimation();
  $: bulletPoints = course.preview.split('•');

  import type { Testimonial } from '$lib/utils/navdata/courses';

  let selectedTestimonials:Testimonial[] = [];

  function getRandomTestimonials(testimonies: Testimonial[], count: number) {
    let shuffled = [...testimonies];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  }

  $: selectedTestimonials = getRandomTestimonials(course.testimonies, 4);

</script>




<div class="relative isolate overflow-hidden bg-white py-24 sm:py-32">
  <div class="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56" aria-hidden="true">
    <div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)"></div>
  </div>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <p class="text-base/7 font-semibold text-indigo-600">{new Date().getFullYear() - 1} - {new Date().getFullYear()}</p>
      <h1 class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:leading-[4rem]">{course.title}</h1>
      <p class="mt-6 text-xl/8 text-gray-700">{course.pathway}</p>
    </div>
    <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
      <div class="relative lg:order-last lg:col-span-5">
        <svg class="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="e87443c8-56e4-4c20-9111-55b82fa704e3" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0.5 0V200M200 0.5L0 0.499983" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" />
        </svg>


        {#each selectedTestimonials as testimony}
        <figure class="mb-12 border-l border-indigo-600 pl-8">
          <blockquote class="text-xl/8 font-normal tracking-tight text-gray-900">
            <p>{testimony.text}</p>
          </blockquote>
          <figcaption class="mt-8 flex gap-x-4">
            <div class="text-sm/6">
              <div class="font-semibold text-gray-900">{testimony.author}</div>
              {#if testimony.subtitle != null}
              <div class="text-gray-600">{testimony.subtitle}</div>
              {/if}
            </div>
          </figcaption>
        </figure>
        {/each}
      </div>
      <div class="max-w-xl text-base/7 text-gray-700 lg:col-span-7">
        <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
          {#each bulletPoints as bulletPoint}
          <li class="flex gap-x-3">
            <div class="mt-1 size-5 flex-none text-violet-600 w-5 h-5">
              <Checkmark/>
            </div>
            <span>{bulletPoint}</span>
          </li>
          {/each}
          
        </ul>

        <div class="mx-auto w-auto mt-16 md:mt-0 lg:mt-24">
          {#if data.pageImages.length > 0}
          <div class="mt-6 md:mt-4 lg:mt-" >
            <ImageCarousel images={data.pageImages.map((src) => ({ alt: '', src }))} />
          </div>
          {/if}
        </div>
        <!-- <p class="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
        <p class="mt-6">Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.</p> -->
      </div>
    </div>


    <div class="flex-1 mt-8 md:mt-0 text-center">

      <div class="mt-6 md:mt-4 lg:mt-16" >
        <TeacherCard teacher={course.teacher} />
      </div>
    </div>
  </div>
</div>

