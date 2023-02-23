<script lang="ts">
  import type { ItemProps } from './Item.svelte';
  import Item from './Item.svelte';

  export let item: ItemProps;
</script>

<div class="py-4">
  <Item {...item} />
</div>
