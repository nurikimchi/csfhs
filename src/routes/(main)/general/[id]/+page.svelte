<script lang="ts">
  import Container from '$lib/components/Container.svelte';
  import BackdropText from '$lib/components/text/BackdropText.svelte';
  import type { PageData } from './$types';
  import { tweened } from 'svelte/motion';

  export let data: PageData;
  $: moreInfo = data.moreInfo;

  const animatedTitleIndex = tweened(0, { duration: 600 });
  $: animatedTitleOutput =
    moreInfo.title.slice(0, $animatedTitleIndex) +
    ($animatedTitleIndex === moreInfo.title.length ? '' : '|');

  async function resetAnimation() {
    await animatedTitleIndex.set(0, { duration: 0 });
    animatedTitleIndex.set(moreInfo.title.length);
  }

  $: moreInfo.title, resetAnimation();
</script>

<Container>
  <div class="flex-[4] min-h-screen">
    <div class="flex flex-col pt-6 md:pt-8">
      <div class="flex-1">
        <p class="mb-4">{new Date().getFullYear() - 1} - {new Date().getFullYear()}</p>
        <BackdropText
          text={animatedTitleOutput}
          className="font-extrabold text-5xl md:text-8xl leading-[5rem] md:leading-[8rem]"
        />
      </div>
    </div>
  </div>
</Container>
