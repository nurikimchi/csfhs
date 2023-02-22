<script lang="ts">
  import Container from '$lib/components/Container.svelte';
  import ImageCarousel from '$lib/components/images/ImageCarousel.svelte';
  import TeacherCard from '$lib/components/TeacherCard.svelte';
  import BackdropText from '$lib/components/text/BackdropText.svelte';
  import DaglerPFP from '$lib/images/dagler.jpeg';
  import FaGraduationCap from 'svelte-icons/fa/FaGraduationCap.svelte';
  import { tweened } from 'svelte/motion';
  import type { PageData } from './$types';

  export let data: PageData;

  const title = data.course.title;

  const aniamtedTitleIndex = tweened(0, { duration: 600 });
  $: animatedTitleOutput =
    title.slice(0, $aniamtedTitleIndex) + ($aniamtedTitleIndex === title.length ? '' : '|');

  aniamtedTitleIndex.set(title.length);
</script>

<Container>
  <div class="flex-[4] min-h-screen py-8">
    <p
      class="font-mono uppercase text-xs text-white bg-blue-700 rounded-md w-max px-4 py-2 font-bold shadow-md shadow-indigo-400/40"
    >
      Franklin Offered Class Only
    </p>

    <div class="flex flex-col mt-8">
      <div class="flex-1">
        <BackdropText
          text={animatedTitleOutput}
          className="font-bold text-8xl leading-[8rem] flex-1"
        />
      </div>

      <div class="flex-1">
        <p class="text-2xl leading-10 font-medium">{data.course.description}</p>
      </div>
    </div>

    <a
      href="/"
      class="w-max items-center flex flex-row my-16 rounded-l-2xl bg-gradient-to-r from-blue-700 to-blue-600 p-6 text-white uppercase text-sm tracking-widest shadow-lg shadow-blue-500/50 transition hover:-translate-y-1"
      style="border-radius: 16px 50px 50px 16px;"
    >
      <p class="font-medium font-sans">Sign up for the Computer Science Pathway</p>

      <block class="w-4 h-4 block ml-2">
        <FaGraduationCap />
      </block>
    </a>

    <div class="mt-12 flex flex-row space-x-8">
      <div class="flex-1">
        <BackdropText text="Meet your instructor." className="font-bold text-4xl leading-none" />

        <div class="my-10" />

        <TeacherCard
          name="Clay Dagler"
          title="ML, APCSA, ECS, and CSR Instructor"
          description="Dolor eiusmod deserunt consectetur labore et dolore in id. Est dolore et duis voluptate ipsum incididunt irure exercitation amet velit elit ipsum voluptate est. Nulla aliqua sint commodo in Lorem incididunt elit culpa officia culpa amet. Laborum eiusmod consequat consectetur proident velit deserunt laborum mollit ad nisi cillum sint. Elit velit officia officia dolor aliquip adipisicing do ut duis aliquip. Aliqua consectetur veniam fugiat irure ut eu."
          href="/"
          image={DaglerPFP}
        />
      </div>

      <div class="flex-1">
        {#if data.pageImages.length > 0}
          <ImageCarousel images={data.pageImages.map((src) => ({ alt: '', src }))} />
        {/if}
      </div>
    </div>
  </div>
</Container>

<!-- 
<Container>
  <h1 class="text-center my-12 text-4xl font-bold">{data.course.title}</h1>

  <h2 class="text-2xl font-bold">Teacher Information</h2>
  <div class="mt-2 mb-6">
    <ul class="flex flex-col font-semibold space-y-2 md:flex-row md:space-x-40 md:space-y-0">
      <li>{data.course.teacher}</li>
      <li>
        <a
          href="mailto:{data.course.email}"
          class="text-indigo-600 transition hover:text-indigo-500"
        >
          {data.course.email}
        </a>
      </li>
      <li>@fhs.computerscience</li>
    </ul>
  </div>

  <p class="mb-6">
    {data.course.description}
  </p>

  {#if data.pageImages.length > 0}
    <ImageCarousel images={data.pageImages.map((src) => ({ alt: '', src }))} />
  {/if}

  <h2 class="text-2xl font-bold mb-6">The Computer Science Pathway</h2>
  <p class="mb-6">{data.course.pathway}</p>

  {#if data.course.testimonies.length > 0}
    <h2 class="text-2xl font-bold mb-6">Student Testimonials</h2>
    <div class="mt-4 mb-16 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
      {#each data.course.testimonies as testimony}
        <div>
          <p>{testimony.text}</p>
          <p class="font-bold">- {testimony.author}</p>
        </div>
      {/each}
    </div>
  {/if}
</Container> -->
