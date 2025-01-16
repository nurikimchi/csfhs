<script>
    import { moreInfoHrefById, moreInformationItems,  } from '$lib/utils/navdata/moreinfo';
    import { opportunitiesHrefById, opportunities } from '$lib/utils/navdata/opportunities';
    import Dropdown from './Dropdown.svelte';
    import MoreInfoItem from './MoreInfoItem.svelte';
    import OpportunitiesItem from './OpportunitiesItem.svelte';
</script>

<!-- change this! -->
  
<Dropdown title="Extracurricular Opportunities" padding={14} arrowLeftOffset={137 / 2}>
    <div class="grid grid-gap-2 grid-rows-3 grid-cols-3 w-full">
        {#each opportunities as { title, preview, type, id }}
            <OpportunitiesItem {title} {preview} {type} href={opportunitiesHrefById(id)} />
        {/each}
    </div>
</Dropdown>
  