<script lang="ts">
	import { spring } from 'svelte/motion';

	export let title: string;
	export let padding: number = 32;
	export let arrowLeftOffset: number = -1;

	let isInButton = false;
	let isInDropdown = false;

	const fadeAnimation = spring(0);

	$: show = isInButton || isInDropdown;
	$: fadeAnimation.set(+show);
	$: animationIsActive = $fadeAnimation < 1 && $fadeAnimation > 0;

	function handleMouseIn() {
		isInButton = true;
	}

	function handleMouseLeave() {
		setTimeout(() => (isInButton = false), 1);
	}

	function handleMouseInDropdown() {
		if (!animationIsActive || isInButton) {
			isInDropdown = true;
		}
	}

	function handleMouseLeaveDropdown() {
		setTimeout(() => (isInDropdown = false), 1);
	}
</script>

<div>
	<p
		class="font-semibold cursor-default transition hover:text-gray-600 py-2 w-max pr-8"
		on:mouseenter={handleMouseIn}
		on:mouseleave={handleMouseLeave}
	>
		{title}
	</p>

	{#if $fadeAnimation !== 0}
		<div>
			{#if arrowLeftOffset > 0}
				<div
					class="arrow"
					style:opacity={$fadeAnimation}
					style:margin-left="{arrowLeftOffset - 8}px"
				/>
			{/if}
			<div
				class="absolute pt-2 pr-4 z-20"
				on:mouseenter={handleMouseInDropdown}
				on:mouseleave={handleMouseLeaveDropdown}
				style:transform-origin="top"
				style:opacity={$fadeAnimation}
				style:transform="rotateX({(1 - $fadeAnimation) * 10}deg)"
				style:pointer-events={show ? 'initial' : 'none'}
			>
				<div
					class="bg-white rounded-md shadow-2xl max-w-2xl border-4 border-gray-100"
					style:padding="{padding}px"
				>
					<slot />
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.arrow {
		@apply bg-gray-100 shadow-2xl z-10 rounded-sm;

		position: absolute;
		width: 16px;
		height: 16px;
		margin-left: 21px;
		transform: rotateZ(45deg);
	}
</style>
