<script lang="ts">
  import Container from '$lib/components/Container.svelte';
  import ImageCarousel from '$lib/components/images/ImageCarousel.svelte';
  import TeacherCard, { TEACHER_OPTIONS } from '$lib/components/TeacherCard.svelte';
  import BackdropText from '$lib/components/text/BackdropText.svelte';
  import DaglerPFP from '$lib/images/home/dagler.jpeg';
  import { courseHrefById, courses, mainCourses, electiveCourses, teachers } from '$lib/utils/navdata/courses';
  import type { PageData } from './$types';
  // import CsLogo from '$lib/components/navbar/CsLogo.svelte'
  import CsLogo from '$lib/images/csfhs.jpg';
  import Testimonials  from '$lib/utils/testimonials'

  import StanfordSvg from '$lib/images/stanford.svg';
  import BerkeleySvg from '$lib/images/berkeley.svg';
  import CarnegieMellonSvg from '$lib/images/carnegie-mellon.svg';
  import GoogleSvg from '$lib/images/google.svg';
  import UclaSvg from '$lib/images/ucla.svg'

  import Faq from '$lib/utils/faq'
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
<section class="isolate overflow-hidden bg-white px-6 lg:px-8">
  <div class="relative mx-auto max-w-2xl  sm:py-32 lg:max-w-4xl">
    <div class="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.indigo.100),white)] opacity-20 lg:left-36"></div>
    <div class="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center"></div>

      <!-- {#each Testimonials as testimonial} -->
          <figure class="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
            <div class="relative col-span-2 lg:col-start-1 lg:row-start-2">
              <svg viewBox="0 0 162 128" fill="none" aria-hidden="true" class="absolute -top-12 left-0 -z-10 h-32 stroke-gray-900/10">
                <path id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z" />
                <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86" />
              </svg>
              <blockquote class="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                <p>“{Testimonials[3].quote}”</p>
              </blockquote>
            </div>
            <figcaption class="text-base lg:col-start-1 lg:row-start-3">
              <div class="font-semibold text-gray-900">{Testimonials[3].name}</div>
              <div class="mt-1 text-gray-500">{Testimonials[3].subtitle}</div>
            </figcaption>
          </figure>
      <!-- {/each} -->
  </div>
</section>


<!-- ALUMNI -->
<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 class="text-center text-lg/8 md:text-4xl font-semibold text-gray-900">Graduates went to</h2>
    <div class="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={StanfordSvg} alt="Transistor" width="158" height="48">
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={BerkeleySvg} alt="Reform" width="158" height="48">
      <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src={GoogleSvg} alt="SavvyCal" width="158" height="48">
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={CarnegieMellonSvg} alt="Tuple" width="158" height="48">
      <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src={UclaSvg} alt="Statamic" width="158" height="48">
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
