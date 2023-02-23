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
      class="text-xs text-white bg-blue-600 rounded-md w-max px-4 py-2 font-bold shadow-md shadow-indigo-400/40 tracking-wide"
    >
      Franklin Offered Class Only
    </p>

    <div class="flex flex-col mt-6 md:mt-8">
      <div class="flex-1">
        <BackdropText
          text={animatedTitleOutput}
          className="font-bold text-5xl md:text-8xl leading-[5rem] md:leading-[8rem] flex-1"
        />
      </div>

      <div class="flex-1 mt-6 md:mt-0">
        <p class="md:text-2xl md:leading-10 font-medium">{data.course.description}</p>
      </div>
    </div>

    <a
      href="/"
      class="w-max items-center flex flex-row my-8 md:my-16 rounded-l-2xl bg-gradient-to-r from-blue-700 to-blue-600 p-6 text-white text-[13px] sm:text-sm md:text-base tracking-wide shadow-lg shadow-blue-500/50 transition hover:-translate-y-1"
      style="border-radius: 16px 50px 50px 16px;"
    >
      <p class="font-semibold font-sans">Sign up for the Computer Science Pathway</p>

      <block class="w-4 h-4 block ml-2">
        <FaGraduationCap />
      </block>
    </a>

    <div class="flex flex-col-reverse md:flex-row md:space-x-8">
      <div class="flex-1 mt-8 md:mt-0 text-center md:text-left">
        <BackdropText
          text="Meet your instructor."
          className="font-bold text-3xl lg:text-4xl leading-normal sm:leading-[3rem] lg:leading-normal"
        />

        <div class="mt-12 md:mt-4 lg:mt-12" />

        <TeacherCard
          name="Clay Dagler"
          title="ML, APCSA, ECS, and CSR Instructor"
          description="Dolor eiusmod deserunt consectetur labore et dolore in id. Est dolore et duis voluptate ipsum incididunt irure exercitation amet velit elit ipsum voluptate est. Nulla aliqua sint commodo in Lorem incididunt elit culpa officia culpa amet. Laborum eiusmod consequat consectetur proident velit deserunt laborum mollit ad nisi cillum sint. Elit velit officia officia dolor aliquip adipisicing do ut duis aliquip. Aliqua consectetur veniam fugiat irure ut eu."
          href="/"
          image={DaglerPFP}
        />
      </div>

      <div class="flex-1 mt-8 md:mt-0">
        {#if data.pageImages.length > 0}
          <ImageCarousel images={data.pageImages.map((src) => ({ alt: '', src }))} />
        {/if}
      </div>
    </div>
  </div>
</Container>
