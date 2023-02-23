<script lang="ts">
  export let text: string;
  export let className: string = '';
</script>

<div class="relative {className}">
  <p
    class="font-sans -translate-x-1 w-full -translate-y-1 bg-clip-text text-transparent opacity-20 bg-gradient-to-br from-blue-500 to-indigo-500 absolute select-none"
    aria-hidden="true"
  >
    {text}
  </p>
  <p class="font-sans relative z-10 text-black">{text}</p>
</div>
