<script>
  import Container from '$lib/components/Container.svelte';
  import BackdropText from '$lib/components/text/BackdropText.svelte';
  import { tweened } from 'svelte/motion';
</script>

<Container>
  <div>
    <BackdropText
      text="Updated Classroom"
      className="font-extrabold text-5xl md:text-8xl leading-[5rem] md:leading-[8rem]"
    />
  </div>
</Container>
