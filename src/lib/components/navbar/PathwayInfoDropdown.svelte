<script>
    import { moreInfo1HrefById, moreInformation1Items,  } from '$lib/utils/navdata/pathway';
    import Dropdown from './Dropdown.svelte';
    import MoreInfo1Item from './MoreInfoItem.svelte';
  </script>
  
  <Dropdown title="Pathway Information" padding={4} arrowLeftOffset={150 / 4}>
    <div class="flex flex-col">
      {#each moreInformation1Items as { title, description, id }}
        <MoreInfo1Item {title} {description} href={moreInfo1HrefById(id)} />
      {/each}
    </div>
  </Dropdown>