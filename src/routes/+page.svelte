<script lang="ts">
  import Container from '$lib/components/Container.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ImageCarousel from '$lib/components/images/ImageCarousel.svelte';
  import Navbar from '$lib/components/navbar/Navbar.svelte';
  import TeacherCard from '$lib/components/TeacherCard.svelte';
  import BackdropText from '$lib/components/text/BackdropText.svelte';
  import DaglerPFP from '$lib/images/dagler.jpeg';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="bg-white">
  <Navbar />

  <div class="overflow-hidden">
    <Container>
      <section class="mt-4 md:mt-16">
        <div class="flex flex-row space-x-16 items-center">
          <div class="max-w-[60ch] flex-1">
            <BackdropText
              text="Teaching the future innovators of technology."
              className="font-bold text-6xl"
            />
            <p class="mt-8">
              Amet duis nisi ullamco cupidatat laboris anim incididunt exercitation officia deserunt
              dolore incididunt. Cillum cupidatat ad esse consequat esse occaecat velit incididunt
              ea fugiat fugiat labore dolore nulla.
            </p>

            <div class="mt-12 flex flex-row space-x-6">
              <button
                class="rounded-full text-sm border-2 border-indigo-600 bg-indigo-600 text-white font-semibold px-6 py-2 transition hover:bg-indigo-500 hover:border-indigo-500"
              >
                Join the pathway
              </button>
              <button
                class="rounded-full text-sm bg-white border-2 border-gray-900 text-black font-semibold px-6 py-2 transition hover:bg-gray-900 hover:text-white"
              >
                Student resources
              </button>
            </div>
          </div>
          <div class="flex-1 h-full lg:block hidden">
            <div class="absolute w-screen max-w-[900px]">
              <div
                class="rotate-2 translate-x-4 -translate-y-1/2 shadow-2xl shadow-slate-900/50 rounded-md overflow-hidden"
              >
                <ImageCarousel
                  presentation
                  images={data.images.map((i) => ({ src: i, alt: '' }))}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>

    <Container>
      <div
        class="my-16 p-8 md:p-12 shadow-lg overflow-hidden shadow-gray-500/50 rounded-md text-white bg-gray-900"
      >
        <div class="flex flex-col items-center text-center">
          <img src={DaglerPFP} alt="Mr. Dagler" class="rounded-full grayscale h-24 w-24" />

          <blockquote class="text-slate-200 my-8">
            “Welcome to the Computer Science Pathway at Franklin High School. In this website, you
            will find a description for all of the classes in the pathway and how I connect my
            students to industry partners: <b>guest speakers</b>, <b>field trips</b>,
            <b>coding camps</b>, and
            <b>competitions</b>. All of the classes and activities in our Computer Science program
            are based around our CS Pathway Outcomes.”
          </blockquote>

          <div>
            <p class="border-gray-800 text-sky-400 font-semibold text-sm">
              Mr. Dagler, Head of Computer Science
            </p>

            <p class="border-gray-800 text-slate-600 font-semibold text-sm">
              16 years of industry experience
            </p>
          </div>
        </div>
      </div>

      <section>
        <div>
          <BackdropText
            text="Meet the instructors changing the world... one classroom at a time."
            className="font-bold text-5xl"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <TeacherCard
            name="Clay Dagler"
            title="ML, APCSA, ECS, and CSR Instructor"
            description="Dolor eiusmod deserunt consectetur labore et dolore in id. Est dolore et duis voluptate ipsum incididunt irure exercitation amet velit elit ipsum voluptate est. Nulla aliqua sint commodo in Lorem incididunt elit culpa officia culpa amet. Laborum eiusmod consequat consectetur proident velit deserunt laborum mollit ad nisi cillum sint. Elit velit officia officia dolor aliquip adipisicing do ut duis aliquip. Aliqua consectetur veniam fugiat irure ut eu."
            href="/"
            image={DaglerPFP}
          />
          <TeacherCard
            name="<Rodriguez>"
            title="APCSA Instructor"
            description="Dolor eiusmod deserunt consectetur labore et dolore in id. Est dolore et duis voluptate ipsum incididunt irure exercitation amet velit elit ipsum voluptate est. Nulla aliqua sint commodo in Lorem incididunt elit culpa officia culpa amet. Laborum eiusmod consequat consectetur proident velit deserunt laborum mollit ad nisi cillum sint. Elit velit officia officia dolor aliquip adipisicing do ut duis aliquip. Aliqua consectetur veniam fugiat irure ut eu."
            href="/"
            image={DaglerPFP}
          />
        </div>
      </section>
    </Container>
  </div>

  <Footer />
</div>

<style>
  :global(body) {
    @apply bg-gray-900;
  }
</style>
