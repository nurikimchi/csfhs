<script lang="ts">
  import Container from '$lib/components/Container.svelte';
  import ImageCarousel from '$lib/components/images/ImageCarousel.svelte';
  import TeacherCard from '$lib/components/TeacherCard.svelte';
  import BackdropText from '$lib/components/text/BackdropText.svelte';
  import FaGraduationCap from 'svelte-icons/fa/FaGraduationCap.svelte';
  import FaCheckCircle from 'svelte-icons/fa/FaCheckCircle.svelte';
  import { each } from 'svelte/internal';
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

  $: descriptionTokens = course.description.split('•');
</script>

<Container>
  <div class="flex-[4] min-h-screen">
    <div class="flex flex-col pt-6 md:pt-8">
      <div class="flex-1">
        <p class="mb-4">{new Date().getFullYear() - 1} - {new Date().getFullYear()}</p>
        <BackdropText
          text={animatedTitleOutput}
          className="font-extrabold text-5xl md:text-8xl leading-[5rem] md:leading-[8rem] flex-1"
        />
      </div>

      <div class="flex-1 mt-6">
        <ul class="space-y-6">
          {#each descriptionTokens as description}
            <li class="flex flex-row">
              <div class="text-emerald-500 min-w-[24px] h-6 mr-4">
                <FaCheckCircle />
              </div>

              <p class="font-semibold md:text-lg">
                {description}
              </p>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <a
      href="https://frhs.egusd.net/Programs/STEAM-Pathways/index.html"
      class="w-max items-center flex flex-row my-8 md:my-16 rounded-l-2xl bg-gradient-to-r from-blue-700 to-blue-600 p-6 text-white text-[13px] sm:text-sm md:text-base tracking-wide shadow-lg shadow-blue-500/50 transition hover:-translate-y-1"
      style="border-radius: 16px 50px 50px 16px;"
    >
      <p class="font-semibold font-sans">Sign up for the Computer Science Pathway</p>

      <block class="h-4 block ml-4">
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

    {#if course.testimonies.length > 0}
      <div class="mt-8">
        <BackdropText
          text="Hear what past students have to say."
          className="font-bold text-3xl lg:text-4xl leading-normal sm:leading-[3rem] lg:leading-normal"
        />

        <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
          {#each course.testimonies as testimony}
            <div>
              <p>{testimony.text}</p>
              <p class="font-bold">- {testimony.author}</p>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</Container>
