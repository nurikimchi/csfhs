<script lang="ts">
  import type { Teacher } from '$lib/utils/navdata/courses';
  import DaglerPFP from '$lib/images/daglernew.jpg';

  interface Options {
    name: string;
    title: string;
    image: string;
    description: string;
    href: string;
  }

  const TEACHER_OPTIONS: Record<Teacher, Options> = {
    'Mr. Dagler': {
      name: 'Clay Dagler',
      title: 'ML, APCSA, ECS, and CSR Instructor',
      description:
        'Dolor eiusmod deserunt consectetur labore et dolore in id. Est dolore et duis voluptate ipsum incididunt irure exercitation amet velit elit ipsum voluptate est. Nulla aliqua sint commodo in Lorem incididunt elit culpa officia culpa amet. Laborum eiusmod consequat consectetur proident velit deserunt laborum mollit ad nisi cillum sint. Elit velit officia officia dolor aliquip adipisicing do ut duis aliquip. Aliqua consectetur veniam fugiat irure ut eu.',
      href: '/',
      image: DaglerPFP
    },
    'Mrs. Rodriguez': {
      name: 'Lynette Rodriguez',
      title: 'ML, APCSA, ECS, and CSR Instructor',
      description:
        'Dolor eiusmod deserunt consectetur labore et dolore in id. Est dolore et duis voluptate ipsum incididunt irure exercitation amet velit elit ipsum voluptate est. Nulla aliqua sint commodo in Lorem incididunt elit culpa officia culpa amet. Laborum eiusmod consequat consectetur proident velit deserunt laborum mollit ad nisi cillum sint. Elit velit officia officia dolor aliquip adipisicing do ut duis aliquip. Aliqua consectetur veniam fugiat irure ut eu.',
      href: '/',
      image: DaglerPFP
    }
  };

  export let teacher: Teacher | Options;

  function getOptions(teacherInput: typeof teacher): Options {
    if (typeof teacherInput === 'string') {
      return TEACHER_OPTIONS[teacherInput];
    }

    return teacherInput;
  }

  $: ({ name, href, image, title, description } = getOptions(teacher));
</script>

<a
  class="rounded-md block shadow-lg shadow-slate-400/20 p-8 bg-gradient-to-bl from-slate-50 to-slate-100"
  {href}
>
  <img src={image} alt={name} class="rounded-full w-24 mx-auto" />
  <div class="text-center mt-4">
    <h1 class="font-body text-xl font-semibold">{name}</h1>
    <h2 class="text-blue-500 font-medium">{title}</h2>
    <p class="mt-2">{description}</p>
  </div>
</a>
