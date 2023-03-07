<script>
  import Container from './Container.svelte';
</script>

<div class="relative overflow-hidden pt-16 bg-black">
  <div class="absolute w-full h-full" style="overflow: none;">
    <div
      class="relative w-full h-full top-0 left-0 overflow-hidden -skew-y-6 bg-black border-t border-white/10"
      style="transform-origin: 100% 0%;"
    />
  </div>

  <div class="relative z-10">
    <div class="text-white content-area">
      <Container>
        <h1 class="font-bold text-3xl">Franklin Computer Science</h1>
        <p class="text-sm">
          by <a class="contributer-link" href="/">Esteban Garcia</a> &
          <a class="contributer-link" href="/">Omar Sadat</a>
        </p>
      </Container>
    </div>
  </div>
</div>

<style lang="postcss">
  .content-area {
    --basePadding: 3rem;

    /* Constants & Calculations, referenced from Stripe.com */
    --windowWidth: 100vw;
    --angleSin: 0.106; /* Sin for 6deg skew angle */
    --containerWidth: 1000px; /* Container.svelte width */

    --angleHeight: var(--windowWidth) * var(--angleSin);
    --gutterWidth: calc(var(--windowWidth) / 2 - var(--containerWidth) / 2);

    padding-top: calc(
      var(--angleHeight) - var(--angleSin) * var(--gutterWidth) + var(--basePadding)
    );
    padding-bottom: var(--basePadding);
  }

  @media screen(md) {
    .content-area {
      --basePadding: 6rem;
    }
  }

  .contributer-link {
    @apply text-blue-500 font-semibold transition hover:text-sky-200;
  }
</style>
