<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="flex h-screen justify-center items-center">
  <h1 class="text-2xl font-semibold">{$page.status} | {$page.error?.message}</h1>
</div>
