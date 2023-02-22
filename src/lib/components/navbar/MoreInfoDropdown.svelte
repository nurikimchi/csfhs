<script>
  import { moreInformationItems } from '$lib/utils/navdata/moreinfo';
  import Dropdown from './Dropdown.svelte';
  import MoreInfoItem from './MoreInfoItem.svelte';
</script>

<Dropdown title="General Information" padding={16} arrowLeftOffset={137 / 2}>
  <div class="flex flex-col">
    {#each moreInformationItems as { title, description, href }}
      <MoreInfoItem {title} {description} {href} />
    {/each}
  </div>
</Dropdown>
