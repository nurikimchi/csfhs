<script lang="ts">
  export let title: string;
</script>

<div>
  <h1 class="font-semibold mb-2">{title}</h1>

  <div class="flex flex-col space-y-4">
    <slot />
  </div>
</div>
