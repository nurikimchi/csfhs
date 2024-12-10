<script lang="ts">
  import Container from '$lib/components/Container.svelte';
  import ImageCarousel from '$lib/components/images/ImageCarousel.svelte';
  import TeacherCard, { TEACHER_OPTIONS } from '$lib/components/TeacherCard.svelte';
  import BackdropText from '$lib/components/text/BackdropText.svelte';
  import DaglerPFP from '$lib/images/home/dagler.jpeg';
  import { courseHrefById, courses, teachers } from '$lib/utils/navdata/courses';
  import type { PageData } from './$types';
  // import CsLogo from '$lib/components/navbar/CsLogo.svelte'
  import CsLogo from '$lib/images/csfhs.jpg';
  import Testimonials from '$lib/utils/testimonials'

  export let data: PageData;
</script>


<div class="bg-white">
  <div class="relative isolate pt-4 lg:px-8">
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
    <div class="mx-auto max-w-xl py-32 sm:py-48 lg:py-56"> <!-- max-w-2xl-->
      <!-- <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div> -->
      <div class="text-center">
        <!-- <h1 class="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Data to enrich your online business</h1> -->
        <img src={CsLogo} class="mx-auto max-w-full h-auto rounded-md" alt="Computer Science logo"/>
        <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">The Computer Science pathway has countless opportunities for students to discover potential career paths and work with our industry connections to gain real-world experience in the workplace.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
          <a href="#" class="text-sm/6 font-semibold text-gray-900">Learn more <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
    <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
  </div>
</div>


<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-base/7 font-semibold text-indigo-600">A course for anyone</h2>
    <p class="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">All pathway classes</p>
    <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
      <div class="relative lg:col-span-3">
        <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
          <img class="h-80 object-cover object-left" src="https://tailwindui.com/plus/img/component-images/bento-01-performance.png" alt="">
          <div class="p-10 pt-8">
            <h3 class="text-sm/4 font-semibold text-indigo-600">Freshman / Sophomore / Junior / Senior</h3>
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">Exploring Computer Science & Robotics</p>
            <p class="mt-2 text-m font-medium tracking-tight text-gray-950">Clayton Dagler</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Discover the vast world of computer science • Learn the command line interface • Develop problem-solving skills and techniques • Program using the C language • Create code for modular robotics • Compete at a statewide programming/robotics competition.</p>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"></div>
      </div>
      <div class="relative lg:col-span-3">
        <div class="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
          <img class="h-80 object-cover object-left lg:object-right" src="src/lib/images/csfhs/apcsp-logo.png" alt="">
          <div class="p-10 pt-8">
            <h3 class="text-sm/4 font-semibold text-indigo-600">Sophomore / Junior / Senior</h3>
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">AP Computer Science Principles</p>
            <p class="mt-2 text-m font-medium tracking-tight text-gray-950">Lynette Rodriguez</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Explore how computing and technology is impacting us today through a project-based approach • Address real-world problems involving Big Data and Cybersecurity • Earn a 5.0 GPA bump and college credit by taking the AP test.</p>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]"></div>
      </div>
      <div class="relative lg:col-span-3">
        <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-bl-[2rem]"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] ">
          <img class="h-80 object-cover object-left" src="https://i.ytimg.com/vi/0BwpQrfPVIE/maxresdefault.jpg" alt="">
          <div class="p-10 pt-8">
            <h3 class="text-sm/4 font-semibold text-indigo-600">Junior / Senior</h3>
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">AP Computer Science A</p>
            <p class="mt-2 text-m font-medium tracking-tight text-gray-950">Clayton Dagler</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Learn content equivalent to a first-semester college-level course in CS • Learn object-oriented programming using the Java language • Solve problems by developing algorithms and using data structures • Compete at HP CodeWars • Earn a 5.0 GPA bump and college credit by taking the AP test.</p>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-bl-[2rem]"></div>
      </div>
      <div class="relative lg:col-span-3">
        <div class="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
          <img class="h-80 object-cover object-left lg:object-right" src="https://tailwindui.com/plus/img/component-images/bento-01-releases.png" alt="">
          <div class="p-10 pt-8">
            <h3 class="text-sm/4 font-semibold text-indigo-600">Senior</h3>
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">Honors Machine Learning</p>
            <p class="mt-2 text-m font-medium tracking-tight text-gray-950">Clayton Dagler</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa, laoreet dapibus ex elit vitae odio.</p>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-br-[2rem]"></div>
      </div>
      <!-- <div class="relative lg:col-span-2">
        <div class="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
          <img class="h-80 object-cover object-left" src="https://tailwindui.com/plus/img/component-images/bento-01-speed.png" alt="">
          <div class="p-10 pt-4">
            <h3 class="text-sm/4 font-semibold text-indigo-600">Speed</h3>
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">Built for power users</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Sed congue eros non finibus molestie. Vestibulum euismod augue.</p>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]"></div>
      </div> -->
      <!-- <div class="relative lg:col-span-2">
        <div class="absolute inset-px rounded-lg bg-white"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
          <img class="h-80 object-cover" src="https://tailwindui.com/plus/img/component-images/bento-01-integrations.png" alt="">
          <div class="p-10 pt-4">
            <h3 class="text-sm/4 font-semibold text-indigo-600">Integrations</h3>
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">Connect your favorite tools</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Maecenas at augue sed elit dictum vulputate, in nisi aliquam maximus arcu.</p>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
      </div> -->
      <!-- <div class="relative lg:col-span-2">
        <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"></div>
        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
          <img class="h-80 object-cover" src="https://tailwindui.com/plus/img/component-images/bento-01-network.png" alt="">
          <div class="p-10 pt-4">
            <h3 class="text-sm/4 font-semibold text-indigo-600">Network</h3>
            <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">Globally distributed CDN</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-600">Aenean vulputate justo commodo auctor vehicula in malesuada semper.</p>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"></div>
      </div> -->
    </div>
  </div>
</div>

<!-- TESTIMONIALS -->
<div class="relative isolate bg-white pb-32 pt-24 sm:pt-32">
  <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
    <div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
    <div class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-base/7 font-semibold text-indigo-600">Testimonials</h2>
      <p class="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">We have worked with thousands of amazing people</p>
    </div>

    <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-2 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
      <figure class="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
        <blockquote class="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
          <p>“Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.”</p>
        </blockquote>
        <figcaption class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
          <img class="h-24 w-24 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80" alt="">
          <div class="flex-auto">
            <div class="font-semibold">Brenna Goyette</div>
            <div class="text-gray-600">@brennagoyette</div>
          </div>
          <img class="h-10 w-auto flex-none" src="https://tailwindui.com/plus/img/logos/savvycal-logo-gray-900.svg" alt="">
        </figcaption>
      </figure>

      <figure class="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-start-1">
        <blockquote class="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
          <p>“Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.”</p>
        </blockquote>
        <figcaption class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
          <img class="h-24 w-24 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80" alt="">
          <div class="flex-auto">
            <div class="font-semibold">Brenna Goyette</div>
            <div class="text-gray-600">@brennagoyette</div>
          </div>
          <img class="h-10 w-auto flex-none" src="https://tailwindui.com/plus/img/logos/savvycal-logo-gray-900.svg" alt="">
        </figcaption>
      </figure>


      <div class="space-y-8 xl:contents xl:space-y-0">
        <div class="space-y-8 xl:row-span-1">
          <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <blockquote class="text-gray-900">
              <p>{`"${Testimonials[0].quote}"`}</p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <div>
                <div class="font-semibold">{Testimonials[0].name}</div>
                <div class="text-gray-600">{Testimonials[0].class}</div>
              </div>
            </figcaption>
          </figure>

          <!-- More testimonials... -->
        </div>
        
        <div class="space-y-8 xl:row-span-1">
          <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <blockquote class="text-gray-900">
              <p>“Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.”</p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img class="h-24 w-24 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              <div>
                <div class="font-semibold">Lindsay Walton</div>
                <div class="text-gray-600">@lindsaywalton</div>
              </div>
            </figcaption>
          </figure>

          <!-- More testimonials... -->
        </div>

        <div class="space-y-8 xl:row-span-1">
          <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <blockquote class="text-gray-900">
              <p>“Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.”</p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img class="h-24 w-24 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              <div>
                <div class="font-semibold">Lindsay Walton</div>
                <div class="text-gray-600">@lindsaywalton</div>
              </div>
            </figcaption>
          </figure>

          <!-- More testimonials... -->
        </div>

        <div class="space-y-8 xl:row-span-1">
          <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <blockquote class="text-gray-900">
              <p>“Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.”</p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img class="h-24 w-24 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              <div>
                <div class="font-semibold">Lindsay Walton</div>
                <div class="text-gray-600">@lindsaywalton</div>
              </div>
            </figcaption>
          </figure>

          <!-- More testimonials... -->
        </div>
      </div>

      <div class="space-y-8 xl:contents xl:space-y-0">
        <div class="space-y-8 xl:row-span-1">
          <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <blockquote class="text-gray-900">
              <p>{`"${Testimonials[1].quote}"`}</p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <div>
                <div class="font-semibold">{Testimonials[1].name}</div>
                <div class="text-gray-600">{Testimonials[1].class}</div>
              </div>
            </figcaption>
          </figure>

          <!-- More testimonials... -->
        </div>
        <div class="space-y-8 xl:row-span-1">
          <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <blockquote class="text-gray-900">
              <p>“Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.”</p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img class="h-24 w-24 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              <div>
                <div class="font-semibold">Leonard Krasner</div>
                <div class="text-gray-600">@leonardkrasner</div>
              </div>
            </figcaption>
          </figure>

          <!-- More testimonials... -->
        </div>
        <div class="space-y-8 xl:row-span-1">
          <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <blockquote class="text-gray-900">
              <p>“Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.”</p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img class="h-24 w-24 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              <div>
                <div class="font-semibold">Leonard Krasner</div>
                <div class="text-gray-600">@leonardkrasner</div>
              </div>
            </figcaption>
          </figure>

          <!-- More testimonials... -->
        </div>

        <div class="space-y-8 xl:row-span-1">
          <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <blockquote class="text-gray-900">
              <p>“Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.”</p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img class="h-24 w-24 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              <div>
                <div class="font-semibold">Leonard Krasner</div>
                <div class="text-gray-600">@leonardkrasner</div>
              </div>
            </figcaption>
          </figure>

          <!-- More testimonials... -->
        </div>



      </div>


    </div>
  </div>
</div>




<Container>
  <section>
    <div>
      <BackdropText
        text="Our instructors."
        className="text-center font-bold text-4xl md:text-7xl leading-[4rem] md:leading-[6rem]"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
      {#each teachers as teacher}
        <TeacherCard {teacher} />
      {/each}
    </div>
  </section>
</Container>

<style lang="postcss">
  section {
    @apply py-8 md:py-24;
  }
</style>
