<script lang="ts">
  export let fieldtripImageId: string;

  let images: { a?: string; b?: string; c?: string; d?: string; e?: string } = {};

  $: loadImages(), fieldtripImageId;

  async function loadImages() {
    if (!fieldtripImageId) return;

    try {
      const a = await import(`$lib/images/fieldtrips/${fieldtripImageId}/a.jpg`);
      const b = await import(`$lib/images/fieldtrips/${fieldtripImageId}/b.jpg`);
      const c = await import(`$lib/images/fieldtrips/${fieldtripImageId}/c.jpg`);
      const d = await import(`$lib/images/fieldtrips/${fieldtripImageId}/d.jpg`);

      images = {
        a: a.default,
        b: b.default,
        c: c.default,
        d: d.default,
      };
    } catch (error) {
      console.error("Failed to load images:", error);
    }
  }
</script>


<div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
  <div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
    <img src={images.a} alt="" class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover">
  </div>
  <div class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
    <div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
      <img src={images.b} alt="" class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover">
    </div>
    <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
      <img src={images.c} alt="" class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover">
    </div>
    <div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
      <img src={images.d} alt="" class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover">
    </div>
  </div>
</div>