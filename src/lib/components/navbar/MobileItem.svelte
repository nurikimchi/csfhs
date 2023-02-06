<script lang="ts">
  import type { ItemProps } from './Item.svelte';
  import Item from './Item.svelte';

  export let item: ItemProps;
</script>

<div class="p-4 border rounded-md">
  <Item {...item} />
</div>
