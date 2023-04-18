<script lang="ts">
  import Container from '../Container.svelte';
  import ClassesDropdown from './ClassesDropdown.svelte';
  import MoreInfoDropdown from './MoreInfoDropdown.svelte';
  import FRHSLogo from '$lib/images/home/frhs-logo.jpeg';
  import IoLogoInstagram from 'svelte-icons/io/IoLogoInstagram.svelte';
</script>

<div class="hidden md:block py-4 z-20 transition-all bg-white">
  <Container>
    <div class="flex flex-row items-center">
      <a href="/" class="mr-10">
        <img src={FRHSLogo} alt="" class="w-12 rounded transition-all hover:brightness-125" />
      </a>
      <a href="https://instagram.com/fhs.computerscience?igshid=YmMyMTA2M2Y=" class="mr-10">
        <div class="relative">
          <div
            class="w-14 h-14 bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 to-blue-500 text-indigo-500"
          >
            <IoLogoInstagram />
          </div>
        </div>
      </a>
      <ClassesDropdown />
      <MoreInfoDropdown />
    </div>
  </Container>
</div>
