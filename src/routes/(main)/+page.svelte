<script lang="ts">
  import Container from '$lib/components/Container.svelte';
  import ImageCarousel from '$lib/components/images/ImageCarousel.svelte';
  import TeacherCard from '$lib/components/TeacherCard.svelte';
  import BackdropText from '$lib/components/text/BackdropText.svelte';
  import DaglerPFP from '$lib/images/dagler.jpeg';
  import { courseHrefById, courses, teachers } from '$lib/utils/navdata/courses';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="overflow-visible lg:overflow-hidden">
  <Container>
    <section class="!pt-4 md:!pt-12">
      <div class="flex flex-row space-x-16 items-center">
        <div class="max-w-[60ch] flex-1">
          <BackdropText
            text="Teaching the future innovators of technology."
            className="font-extrabold text-6xl leading-[6rem]"
          />
          <p class="mt-8 text-xl leading-loose">
            The Computer Science pathway has countless opportunities for students to discover
            potential career paths and work with our industry connections to gain real-world
            experience in the workplace.
          </p>

          <div class="mt-12 flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
            <button
              class="button-radius-right rounded-full text-sm border-2 border-indigo-600 shadow-lg shadow-indigo-600/30 tracking-wide bg-indigo-600 text-white font-semibold px-6 py-2 transition hover:bg-indigo-500 hover:border-indigo-500"
            >
              Join the pathway
            </button>
            <button
              class="button-radius-right sm:rounded-full text-sm bg-slate-900 border-2 shadow-lg shadow-slate-900/20 tracking-wide border-slate-900 text-white font-semibold px-6 py-2 transition hover:bg-slate-800 hover:text-white"
            >
              Student resources
            </button>
          </div>
        </div>

        <div class="flex-1 h-full lg:block hidden">
          <div class="absolute w-screen max-w-[900px]">
            <div
              class="rotate-2 translate-x-4 -translate-y-1/2 shadow-2xl shadow-slate-900/50 rounded-md"
            >
              <ImageCarousel presentation images={data.images.map((i) => ({ src: i, alt: '' }))} />
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-4xl mx-auto overflow-hidden rounded-md text-white mt-24">
        <div class="flex flex-col items-center text-center">
          <img src={DaglerPFP} alt="Mr. Dagler" class="rounded-full h-24 w-24" />

          <blockquote class="text-gray-800 my-8 text-lg">
            “Welcome to the Computer Science Pathway at Franklin High School. In this website, you
            will find a description for all of the classes in the pathway and how I connect my
            students to industry partners: <b>guest speakers</b>, <b>field trips</b>,
            <b>coding camps</b>, and
            <b>competitions</b>. All of the classes and activities in our Computer Science program
            are based around our CS Pathway Outcomes.”
          </blockquote>

          <div>
            <p class="border-gray-800 text-indigo-600 font-semibold text-sm">
              Clay Dagler, Head of Computer Science
            </p>

            <div class="mt-12 flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
              <a href="https://frhs.egusd.net/Programs/STEAM-Pathways/index.html"
                class="button-radius-right rounded-full text-sm border-2 border-indigo-600 shadow-lg shadow-indigo-600/30 tracking-wide bg-indigo-600 text-white font-semibold px-6 py-2 transition hover:bg-indigo-500 hover:border-indigo-500"
              >
                Join the pathway
              </a>
              <a href="https://frhs.egusd.net/documents/New-STEAM-Wheel-and-Chart-1.pdf"
                class="button-radius-right sm:rounded-full text-sm bg-slate-900 border-2 shadow-lg shadow-slate-900/20 tracking-wide border-slate-900 text-white font-semibold px-6 py-2 transition hover:bg-slate-800 hover:text-white"
              >
                Student resources
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>
</div>

<Container bgColorClass="bg-gray-900">
  <section>
    <div class="grid lg:grid-cols-2 gap-12">
      <div class="w-full">
        <div class="sticky top-24">
          <div class="overflow-hidden w-full text-white">
            <h1 class="text-5xl font-bold leading-[5rem]">A course for everyone.</h1>

            <p class="mt-2 text-gray-200 leading-8">
              Here at Franklin, we have a large selection of courses available for students to
              expand on their interests in computer science. The STEAM Academy Pathway includes
              Exploring Computer Science, AP Computer Science Principles, and AP Computer Science A.
            </p>

            <p class="mt-4 text-gray-200 leading-8">
              Aside from the pathway, additional courses like Computer Science and Robotics for
              Beginners, Web Development, and Machine Learning Honors offer more specific
              applications of programming with modern tools, languages and technologies.
            </p>
          </div>
        </div>
      </div>

      <div class="relative w-full">
        <div class="flex flex-col space-y-8">
          {#each courses as { title, description, pathway, teacher, id }}
            <div class="border rounded p-8 text-white border-gray-800 bg-gray-800 block">
              <h1 class="font-medium text-lg">{title}</h1>
              <p class="text-sm mt-1">{teacher}</p>
              <p class="my-6 text-gray-400">{pathway} <br /> <br /> {description}</p>

              <a
                href={courseHrefById(id)}
                class="block text-center w-full border rounded border-gray-700 py-2 text-sm font-medium text-gray-100 transition hover:bg-gray-900 hover:border-gray-900"
              >
                Learn more
              </a>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
</Container>

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
