<script lang="ts">
  export let text: string;
  export let className: string = '';
  export let textClassName: string = 'text-black';
  export let bgTextClassName: string =
    'bg-clip-text text-transparent opacity-20 bg-gradient-to-br from-blue-500 to-indigo-500';
</script>

<div class="relative {className}">
  <p
    class="{bgTextClassName} font-sans -translate-x-1 w-full -translate-y-1 absolute select-none"
    aria-hidden="true"
  >
    {text}
  </p>
  <p class="font-sans relative z-10 {textClassName}">{text}</p>
</div>
