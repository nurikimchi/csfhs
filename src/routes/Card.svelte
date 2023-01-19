<script lang="ts">
	import type { Course } from '$lib/utils/courses';
	export let course: Course;

	$: ({ title, description, href } = course);
</script>

<a
	{href}
	class="p-5 bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-md overflow-hidden shadow-lg shadow-blue-400/50 cursor-pointer transition-all block my-2"
>
	<h1 class="font-bold mb-2 md:text-lg">{title}</h1>

	<p>{description}</p>
</a>
