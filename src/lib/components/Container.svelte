<script lang="ts">
  export let width = 1000;
  export let padding = 24;
  export let bgColor: string | null = null;
  export let bgColorClass: string | null = null;
</script>

<div
  class="h-full relative {bgColorClass}"
  style:padding="0 {padding}px"
  style:background-color={bgColor}
>
  <div class="mx-auto h-full" style:max-width="{width}px">
    <slot />
  </div>
</div>
