<script lang="ts">
  import Container from '$lib/components/Container.svelte';
  import ImageCarousel from '$lib/components/images-components/ImageCarousel.svelte';
  import TeacherCard, { TEACHER_OPTIONS } from '$lib/components/TeacherCard.svelte';
  import BackdropText from '$lib/components/text/BackdropText.svelte';
  import DaglerPFP from '$lib/images/home/dagler.jpeg';
  import { courseHrefById, courses, mainCourses, electiveCourses, teachers } from '$lib/utils/navdata/courses';
  import type { PageData } from './$types';
  // import CsLogo from '$lib/components/navbar/CsLogo.svelte'
  import CsLogo from '$lib/images/csfhs.jpg';
  import Testimonials  from '$lib/utils/testimonials'

  import GoogleSvg from '$lib/images/google.svg';
  import StanfordSvg from '$lib/images/stanford.svg';
  import BerkeleySvg from '$lib/images/berkeley.svg';
  import CarnegieMellonSvg from '$lib/images/carnegie-mellon.svg';
  import UclaSvg from '$lib/images/ucla.svg';

  import StanfordMedical from '$lib/images/csfhs/StanfordMedical.png'

  import Faq from '$lib/utils/faq';
  // export let data: PageData;
</script>



<!-- banner -->
<div class="flex items-center justify-center gap-x-6 bg-gray-900 px-6 py-2.5 sm:pr-3.5 lg:pl-8">
  <p class="text-sm/6 text-white text-center">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeFnPzPjKdTvhm6TlgftfXbswy2KZDZB3O053m4pyaYAh7xzA/viewform" target="_blank">
      <strong class="font-semibold underline text-l lg:text-md">Registrations are open for the 2025-2026 school year!</strong>&nbsp;<span aria-hidden="true" class="text-md lg:text-lg">&rarr;</span>
    </a>
  </p>
</div>
<div class="bg-white">

  <div class="relative text-center">
    <div class="absolute inset-0 w-0 bg-[#49277c] text-white py-4 animate-expand"></div>
    <div class="relative">
      <div class="mx-auto max-w-7xl px-6">
        <img src={CsLogo} class="mx-auto max-w-full h-auto rounded-md" alt="Computer Science logo"/>
      </div>
    </div>
  </div>
  
</div>


<!-- Pathway -->
<div class="bg-white py-16 lg:mt-24 lg:py-0 sm:py-0">
  <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-6">
    <p class="font-sans mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">Pathway Courses</p>
    <div class="mt-8 grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-6 lg:grid-rows-1">
      {#each mainCourses as course, index}
        <div class={`relative ${course.colSpanClass}`}>
          <div class={`absolute inset-px rounded-lg bg-white ${course.roundedClass}`}></div>
          <div
            class={`relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] ${course.roundedClass}`}
          >
            <img class={course.imgClass} src={course.coverImage} alt={course.title} />
            <div class="p-10 pt-4">
              <h3 class="text-sm/4 font-semibold text-indigo-600">{course.grades}</h3>
              <a href="/courses/{course.id}">
                <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">{course.title}</p>
              </a>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600">{course.preview}</p>
            </div>
          </div>
          <div
            class={`pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 ${course.roundedClass}`}
          ></div>
        </div>
      {/each}

    </div>
  </div>
</div>


<div class="bg-white py-16 lg:mt-24 lg:py-0 sm:py-0">
  <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-6">
    <p class="font-sans mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">Elective Courses</p>
    <div class="mt-8 grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-6 lg:grid-rows-1">
      {#each electiveCourses as course, index}
        <div class={`relative ${course.colSpanClass}`}>
          <div class={`absolute inset-px rounded-lg bg-white ${course.roundedClass}`}></div>
          <div
            class={`relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] ${course.roundedClass}`}
          >
            <img class={course.imgClass} src={course.coverImage} alt={course.title} />
            <div class="p-10 pt-4">
              <h3 class="text-sm/4 font-semibold text-indigo-600">{course.grades}</h3>
              <a href="/courses/{course.id}">
                <p class="font-sans mt-2 text-lg font-medium tracking-tight text-gray-950">{course.title}</p>
              </a>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600">{course.preview}</p>
            </div>
          </div>
          <div
            class={`pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 ${course.roundedClass}`}
          ></div>
        </div>
      {/each}

    </div>
  </div>
</div>


<!-- TESTIMONIALs -->

<section class="bg-white py-24 mt-32 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div class="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
        <img class="h-12 self-start" src={GoogleSvg} alt="">
        <figure class="mt-10 flex flex-auto flex-col justify-between">
          <blockquote class="text-lg/8 text-gray-900">
            <p>{Testimonials[3].quote}</p>
          </blockquote>
          <figcaption class="mt-10 flex items-center gap-x-6">
            <div class="text-base">
              <div class="font-semibold text-gray-900">{Testimonials[3].name}</div>
              <div class="mt-1 text-gray-500">{Testimonials[3].subtitle}</div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div class="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
        <img class="h-12 self-start" src={StanfordMedical} alt="">
        <figure class="mt-10 flex flex-auto flex-col justify-between">
          <blockquote class="text-lg/8 text-gray-900">
            <p>{Testimonials[4].quote}</p>
          </blockquote>
          <figcaption class="mt-10 flex items-center gap-x-6">
            <div class="text-base">
              <div class="font-semibold text-gray-900">{Testimonials[4].name}</div>
              <div class="mt-1 text-gray-500">{Testimonials[4].subtitle}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>



<!-- ALUMNI -->
<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 class="text-center text-lg/8 md:text-4xl font-semibold text-gray-900">Graduates went to</h2>
    <div class="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={StanfordSvg} alt="Stanford" width="158" height="48">
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={BerkeleySvg} alt="Berkeley" width="158" height="48">
      <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src={GoogleSvg} alt="Google" width="158" height="48">
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={CarnegieMellonSvg} alt="Carnegie Mellon" width="158" height="48">
      <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src={UclaSvg} alt="UCLA" width="158" height="48">
    </div>
  </div>
</div>


<Container>
  <section>
    <div>
      <h1 class="text-center font-bold text-4xl md:text-6xl leading-[4rem] md:leading-[6rem]">Meet your instructor</h1>
    </div>

    <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"> -->
      <div class="mt-16">
        {#each teachers as teacher}
          <div class="mt-8">
          
            <TeacherCard {teacher} />
          </div>
        {/each}

      </div>
    <!-- </div> -->
  </section>
</Container>

<style lang="postcss">
  section {
    @apply py-8 md:py-24;
  }
</style>

<!-- FREQUENTLY ASKED QUESITONS -->
<!-- Do I need to be an experienced programmer? Do I work on my own?  -->
<div class="bg-white">
  <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
    <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
      <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Frequently asked questions</h2>
      {#each Faq as faq}
      <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
        <div class="pt-6">

          <dt>
            <!-- Expand/collapse question button -->
            <button type="button" class="flex w-full items-start justify-between text-left text-gray-900" aria-controls="faq-0" aria-expanded="false">
              <span class="text-base/7 font-semibold">{faq.question}</span>
              
            </button>
          </dt>
          
          <dd class="mt-2 pr-12" id="faq-0">
            <p class="text-base/7 text-gray-600">{faq.answer}</p>
          </dd>
        </div>
        <!-- More questions... -->
      </dl>
      {/each}

    </div>
  </div>
</div>
<!-- these are the buttons for the faq
<span class="ml-6 flex h-7 items-center">

  <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
  </svg>

  <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
  </svg>
</span> -->
