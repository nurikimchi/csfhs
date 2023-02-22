<script lang="ts">
  export let name: string;
  export let title: string;
  export let image: string;
  export let description: string;
  export let href: string;
</script>

<a
  class="rounded-md shadow-lg shadow-slate-400/20 p-8 bg-gradient-to-bl from-slate-50 to-slate-100"
  {href}
>
  <img src={image} alt={name} class="rounded-full w-24 mx-auto" />
  <div class="text-center mt-4">
    <h1 class="font-body text-xl font-semibold">{name}</h1>
    <h2 class="text-blue-500 font-medium">{title}</h2>
    <p class="mt-2">{description}</p>
  </div>
</a>
