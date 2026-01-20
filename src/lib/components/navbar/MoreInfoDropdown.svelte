<script>
  import { zooprojectHrefById, zooprojectItems,  } from '$lib/utils/navdata/zoo';
  import { moreInfoHrefById, moreInformationItems,  } from '$lib/utils/navdata/moreinfo';
  import Dropdown from './Dropdown.svelte';
  import MoreInfoItem from './MoreInfoItem.svelte';
  import ZooProjectItem from './MoreInfoItem.svelte';
</script>

<Dropdown title="General Information" padding={16} arrowLeftOffset={137 / 2}>
  <div class="flex flex-col gap-y-4">
    {#each moreInformationItems as { title, preview, id }}
      <MoreInfoItem {title} {preview} href={moreInfoHrefById(id)} />
    {/each}
    {#each zooprojectItems as { title, description, id }}
      <ZooProjectItem {title} preview={description} href={zooprojectHrefById(id)} />
    {/each}
  </div>
</Dropdown>
