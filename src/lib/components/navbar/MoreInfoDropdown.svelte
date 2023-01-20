<script>
	import Dropdown from './Dropdown.svelte';
	import MoreInfoItem from './MoreInfoItem.svelte';
</script>

<Dropdown title="More Information" padding={16} arrowLeftOffset={137 / 2}>
	<div class="flex flex-col">
		<MoreInfoItem
			title="Updated classroom"
			description="Our new computer science classroom."
			href="/"
		/>
		<MoreInfoItem
			title="CS Pathway Outcomes"
			description="Whats expected at the end of each course."
			href="/"
		/>
		<MoreInfoItem
			title="Industry Connections"
			description="Industry connections that help shape the pathway at Franklin High School."
			href="/"
		/>
		<MoreInfoItem
			title="Student Leadership"
			description="Whats expected at the end of each course."
			href="/"
		/>
	</div>
</Dropdown>
