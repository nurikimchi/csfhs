<script lang="ts">
  import Container from '../Container.svelte';
  import ClassesDropdown from './ClassesDropdown.svelte';
  import MoreInfoDropdown from './MoreInfoDropdown.svelte';
  import OpportunitiesDropdown from './OpportunitiesDropdown.svelte';
  import FieldtripsDropdown from './FieldtripsDropdown.svelte';
  // import IoLogoInstagram from 'svelte-icons/io/IoLogoInstagram.svelte';
  import { page } from '$app/stores';
  import CsLogo from './CsLogo.svelte';

  $: isHomePage = $page.url.pathname === '/';
</script>

<div class="hidden md:block py-6 z-20 transition-all ml-[4rem]">
  <!-- <Container width={isHomePage ? 1200 : 1000}> -->
    <div class="flex flex-row items-center justify-items-center ">
      {#if !isHomePage}
        <CsLogo/>
      {/if}
      <!-- <a
        href="https://instagram.com/fhs.computerscience?igshid=YmMyMTA2M2Y="
        class="mr-10"
        aria-label="CSFHS Instagram Account"
      >
        <div class="relative">
          <div
            class="w-14 h-14 bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 to-blue-500 text-indigo-500"
          >
            <IoLogoInstagram />
          </div>
        </div>
      </a> -->
      <ClassesDropdown />
      <OpportunitiesDropdown/>
      <MoreInfoDropdown />
      <FieldtripsDropdown />

    </div>
  <!-- </Container> -->
</div>
