<script>
  import { courseHrefById, courses } from '$lib/utils/navdata/courses';
  import Item from './Item.svelte';
  import Dropdown from './Dropdown.svelte';
</script>

<Dropdown title="Classes" arrowLeftOffset={56 / 2}>
  <div class="grid grid-cols-2 gap-6">
    {#each courses as { title, description, id }}
      <Item {title} {description} href={courseHrefById(id)} />
    {/each}
  </div>
</Dropdown>
