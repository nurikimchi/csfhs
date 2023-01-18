<script lang="ts">
	export let title: string;
	export let description: string;
	import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';
	import { cubicIn } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	const arrowOpacity = tweened(0, { easing: cubicIn, duration: 100 });
	$: arrowPosition = $arrowOpacity * 5;
</script>

<div
	class="w-full cursor-pointer group"
	on:mouseenter={() => arrowOpacity.set(1)}
	on:mouseleave={() => arrowOpacity.set(0)}
>
	<div class="flex flex-row justify-between text-sm items-center">
		<h1 class="font-semibold text-black hover:text-black">{title}</h1>

		<div
			class="ml-2 text-indigo-600 text-xs"
			style="max-height: 1em; max-width: 1em;"
			style:transform="translateX({arrowPosition}px)"
			style:opacity={$arrowOpacity}
		>
			<FaArrowRight />
		</div>
	</div>
	<p class="text-xs text-gray-500 transition duration-100 group-hover:text-gray-900">
		{description}
	</p>
</div>
