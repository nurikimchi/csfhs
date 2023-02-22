<script lang="ts">
  import { page } from '$app/stores';
  import Navbar from '$lib/components/navbar/Navbar.svelte';
</script>

<div class="absolute w-full">
  <Navbar />
</div>

<div class="flex h-screen justify-center items-center max-w-lg mx-auto">
  <div class="p-4">
    <h1 class="text-2xl font-bold">An error has occured</h1>
    <p>
      Oh no! An error has happened! If you believe this to be an error related to the server, please
      contact the site maintainers.
    </p>

    <h1 class="mt-4 font-semibold">Error Details</h1>
    <div class="flex flex-col space-y-1">
      <p class="font-semibold">
        Status: <span class="font-normal text-rose-600">{$page.status}</span>
      </p>
      <p class="font-semibold">
        Message: <span class="font-normal text-rose-600">{$page.error?.message}</span>
      </p>
    </div>
  </div>
</div>
