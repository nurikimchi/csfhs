<script>
  import { moreInfoHrefById, moreInformationItems,  } from '$lib/utils/navdata/moreinfo';
  import Dropdown from './Dropdown.svelte';
  import MoreInfoItem from './MoreInfoItem.svelte';
</script>

<Dropdown title="General Information" padding={16} arrowLeftOffset={137 / 2}>
  <div class="grid grid-gap-4 grid-rows-2 grid-cols-3">
    {#each moreInformationItems as { title, description, id }}
      <MoreInfoItem {title} {description} href={moreInfoHrefById(id)} />
    {/each}
  </div>
</Dropdown>
