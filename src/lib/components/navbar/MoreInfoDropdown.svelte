<script>
  import { zooprojectHrefById, zooprojectItems,  } from '$lib/utils/navdata/zoo';
  import { moreInfoHrefById, moreInformationItems,  } from '$lib/utils/navdata/moreinfo';
  import Dropdown from './Dropdown.svelte';
  import MoreInfoItem from './MoreInfoItem.svelte';
  import MoreInfo1Item from './MoreInfoItem.svelte';
</script>

<Dropdown title="Beyond The Classroom" padding={16} arrowLeftOffset={137 / 2}>
  <div class="flex flex-col">
    {#each moreInformationItems as { title, description, id }}
      <MoreInfoItem {title} {description} href={moreInfoHrefById(id)} />
    {/each}
    {#each zooprojectItems as { title, description, id }}
      <MoreInfo1Item {title} {description} href={zooprojectHrefById(id)} />
    {/each}
  </div>
</Dropdown>
