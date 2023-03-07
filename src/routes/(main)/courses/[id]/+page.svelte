<script lang="ts">
  import Container from '$lib/components/Container.svelte';
  import ImageCarousel from '$lib/components/images/ImageCarousel.svelte';
  import TeacherCard from '$lib/components/TeacherCard.svelte';
  import BackdropText from '$lib/components/text/BackdropText.svelte';
  import FaGraduationCap from 'svelte-icons/fa/FaGraduationCap.svelte';
  import { tweened } from 'svelte/motion';
  import type { PageData } from './$types';

  export let data: PageData;

  $: course = data.course;

  const animatedTitleIndex = tweened(0, { duration: 600 });
  $: animatedTitleOutput =
    course.title.slice(0, $animatedTitleIndex) +
    ($animatedTitleIndex === course.title.length ? '' : '|');

  async function resetAnimation() {
    await animatedTitleIndex.set(0, { duration: 0 });
    animatedTitleIndex.set(course.title.length);
  }

  $: course.title, resetAnimation();
</script>

<Container>
  <div class="flex-[4] min-h-screen">
    <div class="flex flex-col pt-6 md:pt-14">
      <div class="flex-1">
        <BackdropText
          text={animatedTitleOutput}
          className="font-bold text-4xl md:text-8xl leading-[4rem] md:leading-[8rem]"
          textClassName="text-white"
          bgTextClassName="text-gray-800"
        />
      </div>

      <div class="flex-1 mt-6 text-white">
        <p class="md:text-2xl md:leading-10 font-medium">{data.course.description}</p>
      </div>
    </div>

    <a
      href="/$route-todo"
      class="w-max items-center flex flex-row my-8 md:my-16 p-6 text-[13px] sm:text-sm md:text-base tracking-wide shadow-lg transition hover:-translate-y-1 bg-blue-600 text-white rounded-md"
    >
      <p class="font-medium font-sans">Sign up for the Computer Science pathway</p>

      <block class="w-4 h-4 block ml-2">
        <FaGraduationCap />
      </block>
    </a>

    <div class="flex flex-col-reverse md:flex-row md:space-x-8">
      <div class="flex-1 mt-8 md:mt-0 text-center md:text-left">
        <BackdropText
          text="Meet your instructor."
          className="font-bold text-4xl leading-[6rem]"
          textClassName="text-white"
          bgTextClassName="text-gray-800"
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
