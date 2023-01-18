<script lang="ts">
	import { spring } from 'svelte/motion';

	export let title: string;

	let isInButton = false;
	let isInDropdown = false;
	let isExiting = false;

	const fadeAnimation = spring(0);

	$: show = isInButton || isInDropdown;
	$: fadeAnimation.set(show ? 1 : 0);
	$: $fadeAnimation === 0 && isExiting && (isExiting = false);

	function handleMouseIn() {
		isInButton = true;
	}

	function handleMouseLeave() {
		setTimeout(() => (isInButton = false), 1);
	}

	function handleMouseInDropdown() {
		if (!isExiting) {
			isInDropdown = true;
		}
	}

	function handleMouseLeaveDropdown() {
		setTimeout(() => {
			if (!isInButton) {
				isExiting = true;
			}
		}, 1);
		isInDropdown = false;
	}
</script>

<p
	class="font-semibold cursor-default transition hover:text-gray-600 py-2 w-max pr-8"
	on:mouseenter={handleMouseIn}
	on:mouseleave={handleMouseLeave}
>
	{title}
</p>

{#if $fadeAnimation !== 0}
	<div
		class="absolute pt-2"
		on:mouseenter={handleMouseInDropdown}
		on:mouseleave={handleMouseLeaveDropdown}
		style:transform-origin="top"
		style:opacity={$fadeAnimation}
		style:transform="rotateX({(1 - $fadeAnimation) * 10}deg) perspective(2000px)"
	>
		<div class="p-8 bg-gray-50 shadow-sm rounded-md max-w-2xl border border-gray-100">
			<slot />
		</div>
	</div>
{/if}
