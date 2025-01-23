<script>
    import { fieldtripHrefById, fieldtrips  } from '$lib/utils/navdata/fieldtrips';
    import Dropdown from './Dropdown.svelte';
    import MoreInfoItem from './MoreInfoItem.svelte';
  </script>
  
  <Dropdown title="Field Trips" padding={16} arrowLeftOffset={137 / 2}>
    <div class="flex flex-col gap-y-4">
      {#each fieldtrips as { title, preview, id }}
        <MoreInfoItem {title} {preview} href={fieldtripHrefById(id)} />
      {/each}
    </div>
  </Dropdown>
  