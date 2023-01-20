<script>
	import Container from '$lib/components/Container.svelte';
	import ClassesDropdown from './ClassesDropdown.svelte';
	import MoreInfoDropdown from './MoreInfoDropdown.svelte';
</script>

<nav class="py-4 border-b">
	<Container>
		<div class="flex flex-row">
			<ClassesDropdown />
			<MoreInfoDropdown />
		</div>
	</Container>
</nav>
