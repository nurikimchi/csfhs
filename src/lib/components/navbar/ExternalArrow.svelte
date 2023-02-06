<script lang="ts">
  import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';
  import { cubicIn } from 'svelte/easing';
  import { tweened } from 'svelte/motion';

  export let show: boolean;
  const arrowOpacity = tweened(0, { easing: cubicIn, duration: 100 });

  $: arrowOpacity.set(+show);
  $: arrowPosition = $arrowOpacity * 5;
</script>

<div
  class="ml-2 text-indigo-600 text-xs"
  style="max-height: 1em; max-width: 1em;"
  style:transform="translateX({arrowPosition}px)"
  style:opacity={$arrowOpacity}
>
  <FaArrowRight />
</div>
