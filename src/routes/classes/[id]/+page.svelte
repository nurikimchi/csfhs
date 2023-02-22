<script lang="ts">
  import Container from '$lib/components/Container.svelte';
  import ImageCarousel from '$lib/components/images/ImageCarousel.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

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
    <ImageCarousel images={data.pageImages.map((src) => ({ alt: 'Alternative', src }))} />
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
</Container>
