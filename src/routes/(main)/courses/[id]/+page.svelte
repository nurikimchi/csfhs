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

  const course = data.course;

  const animatedTitleIndex = tweened(0, { duration: 600 });
  $: animatedTitleOutput =
    course.title.slice(0, $animatedTitleIndex) +
    ($animatedTitleIndex === course.title.length ? '' : '|');

  animatedTitleIndex.set(course.title.length);
</script>

<Container>
  <div class="flex-[4] min-h-screen">
    <div class="flex flex-col pt-6 md:pt-8">
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

        <TeacherCard teacher={course.teacher} />
      </div>

      <div class="flex-1 mt-8 md:mt-0">
        {#if data.pageImages.length > 0}
          <ImageCarousel images={data.pageImages.map((src) => ({ alt: '', src }))} />
        {/if}
      </div>
    </div>
  </div>
</Container>
