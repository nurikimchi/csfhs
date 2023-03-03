<script lang="ts">
  import { courseHref, type Course } from '$lib/utils/navdata/courses';
  export let course: Course;

  $: ({ title, description } = course);
  $: href = courseHref(course);
</script>

<a
  {href}
  class="p-6 shadow-sm shadow-indigo-600/40 bg-indigo-600 rounded-md text-white transition hover:scale-[1.009]"
>
  <h1 class="font-bold md:text-lg mb-2">{title}</h1>

  <p>{description}</p>
</a>
