<script lang="ts">
	export let width: number = 800;

	$: widthPixels = `${width}px`;
</script>

<div class="px-4 h-full">
	<div class="mx-auto h-full" style:max-width={widthPixels}>
		<slot />
	</div>
</div>
