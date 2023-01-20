<script>
  import Container from '$lib/components/Container.svelte';
  import CourseCard from './CourseCard.svelte';
  import { courses } from '$lib/utils/courses';
</script>

<Container>
  <h1 class="text-center my-12 text-4xl font-bold">Computer Science at Franklin High School</h1>

  <h2 class="text-2xl font-bold">Teacher Information</h2>
  <div class="mt-2 mb-6">
    <ul class="flex flex-col font-semibold space-y-2 md:flex-row md:space-x-40 md:space-y-0">
      <li>Mr. Dagler</li>
      <li>
        <a href="mailto:cdagler@egusd.net" class="text-indigo-600 transition hover:text-indigo-500">
          cdagler@egusd.net
        </a>
      </li>
      <li>@fhs.computerscience</li>
    </ul>
  </div>

  <p class="mb-2">
    Welcome to the Computer Science Pathway at Franklin High School. In this website, you will find
    a description for all of the classes in the pathway and how I connect my students to industry
    partners: <b>guest speakers</b>, <b>field trips</b>, <b>coding camps</b>, and
    <b>competitions</b>. All of the classes and activities in our Computer Science program are based
    around our CS Pathway Outcomes.
  </p>

  <p class="mb-2">
    The three year sequence for the programming pathway is Exploring Computer Science, AP Computer
    Science Principles and AP Computer Science A. We also offer two elective classes: Web
    Development and Machine Learning Honors. After passing ECS, AP CSP, and AP CSA, you will earn a
    graduation cord.
  </p>

  <div class="mt-4 mb-16 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-6">
    {#each courses as course}
      <CourseCard {course} />
    {/each}
  </div>
</Container>
