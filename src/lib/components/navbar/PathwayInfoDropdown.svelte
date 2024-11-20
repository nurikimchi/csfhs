<script>
    import { pathWayHrefById, pathWayItems,  } from '$lib/utils/navdata/pathway';
    import Dropdown from './Dropdown.svelte';
    import PathWayItem from './MoreInfoItem.svelte';
  </script>
  
  <Dropdown title="Pathway Information" padding={4} arrowLeftOffset={150 / 4}>
    <div class="flex flex-col">
      {#each pathWayItems as { title, description, id }}
        <PathWayItem {title} {description} href={pathWayHrefById(id)} />
      {/each}
    </div>
  </Dropdown>