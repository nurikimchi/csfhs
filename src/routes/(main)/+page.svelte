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

<div class="bg-black text-white">
  <section>
    <div class="overflow-visible lg:overflow-hidden">
      <Container>
        <div class="flex flex-row space-x-16 items-center pt-4 pb-12 md:pb-32 md:pt-16">
          <div class="max-w-[60ch] flex-1">
            <BackdropText
              text="Teaching the future innovators of technology."
              className="font-bold text-6xl leading-[6rem]"
              textClassName="text-white"
              bgTextClassName="text-gray-800"
            />
            <p class="mt-8">
              Amet duis nisi ullamco cupidatat laboris anim incididunt exercitation officia deserunt
              dolore incididunt. Cillum cupidatat ad esse consequat esse occaecat velit incididunt
              ea fugiat fugiat labore dolore nulla.
            </p>

            <div class="mt-12 flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
              <button
                class="rounded text-sm border-indigo-600 border shadow-indigo-600/30 tracking-wide bg-blue-600 text-white font-semibold px-8 py-4 transition hover:bg-blue-500 hover:border-blue-500"
              >
                Join the pathway
              </button>
              <button
                class="rounded text-sm bg-black border border-white/10 shadow-slate-900/20 tracking-wide text-white font-semibold px-8 py-4 transition hover:bg-white/10 hover:text-white"
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
                <ImageCarousel
                  presentation
                  images={data.images.map((i) => ({ src: i, alt: '' }))}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </section>

  <Container bgColorClass="bg-gray-400/10 border-y border-white/10">
    <div class="my-4 md:my-16 py-4 md:py-32">
      <div class="grid lg:grid-cols-2 gap-12">
        <div class="w-full">
          <div class="sticky top-28">
            <div class="overflow-hidden w-full text-white">
              <h1 class="text-5xl font-bold leading-[5rem]">A course for everyone.</h1>

              <p class="mt-2 text-gray-200 leading-8">
                Minim id sunt duis sunt officia fugiat commodo anim dolore incididunt occaecat qui.
                Excepteur cillum eu nisi do. Voluptate ipsum elit deserunt commodo anim incididunt
                in ex ad excepteur duis id commodo deserunt. Reprehenderit culpa reprehenderit ex
                fugiat excepteur esse qui enim officia ipsum irure consequat. Velit eu eiusmod irure
                aliquip. Occaecat quis esse fugiat ut anim ullamco ut ut aute proident irure elit
                esse.
              </p>
            </div>
          </div>
        </div>

        <div class="relative w-full">
          <div class="flex flex-col space-y-8">
            {#each courses as { title, description, pathway, teacher, id }, index}
              <div class="border rounded p-8 text-white border-white/10 bg-black block relative">
                <div
                  class="absolute rounded-full bg-black border border-white/10 top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 text-center text-sm font-mono"
                >
                  {index + 1}
                </div>
                <h1 class="font-medium text-xl">{title}</h1>
                <p class="text-sm mt-1">{teacher}</p>
                <p class="my-6 text-trueGray-400">{pathway} <br /> <br /> {description}</p>

                <a
                  href={courseHrefById(id)}
                  class="block text-center w-full border rounded border-white/10 py-2 text-sm font-medium text-gray-100 transition hover:bg-gray-100 hover:border-gray-100 hover:text-black"
                >
                  Learn more
                </a>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </Container>

  <Container>
    <div class="my-16 overflow-hidden shadow-gray-500/50 rounded-md text-white py-8">
      <div class="flex flex-row items-center space-x-12">
        <div class="flex-[1]">
          <img src={DaglerPFP} alt="Mr. Dagler" class="rounded-full grayscale h-full w-full" />
        </div>

        <div class="flex-[4]">
          <blockquote class="text-slate-200 mb-8">
            “Welcome to the Computer Science Pathway at Franklin High School. In this website, you
            will find a description for all of the classes in the pathway and how I connect my
            students to industry partners: <b>guest speakers</b>, <b>field trips</b>,
            <b>coding camps</b>, and
            <b>competitions</b>. All of the classes and activities in our Computer Science program
            are based around our CS Pathway Outcomes.”
          </blockquote>

          <div>
            <p class="border-gray-800 text-blue-500 font-semibold text-sm">
              Clay Dagler, Head of Computer Science
            </p>

            <p class="border-gray-800 text-trueGray-600 font-semibold text-sm">
              16 years of industry experience
            </p>
          </div>
        </div>
      </div>
    </div>

    <section>
      <div>
        <BackdropText
          text="Our instructors."
          className="font-bold text-6xl leading-[6rem]"
          textClassName="text-white"
          bgTextClassName="text-gray-800"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {#each teachers as teacher}
          <TeacherCard {teacher} />
        {/each}
      </div>
    </section>
  </Container>
</div>
