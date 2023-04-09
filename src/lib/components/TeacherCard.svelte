<script lang="ts">
  import type { Teacher } from '$lib/utils/navdata/courses';
  import DaglerPFP from '$lib/images/daglernew.jpg';
  import RodriguezPFP from '$lib/images/placeholder.png';

  interface Options {
    name: string;
    title: string;
    description: string;
    image: string;
    email: string;
  }

  const TEACHER_OPTIONS: Record<Teacher, Options> = {
    'Mr. Dagler': {
      name: 'Clay Dagler',
      title: 'APCSA, ECS, ML, and CSR Instructor',
      description:
        "As the head of the Computer Science pathway here at Franklin High, I hope to encourage my students to pursue a career in computer science. I started out teaching Math after graduating from the University of California, Davis, but slowly moved towards robotics and computer science, where I found engaged students learning more about mathematics. I've since worked as a CTE teacher with Franklin, finding any opportunities for my students to involve themselves with technology.",
      image: DaglerPFP,
      email: 'cdagler@egusd.net'
    },
    'Mrs. Rodriguez': {
      name: 'Lynette Rodriguez',
      title: 'APCSP and Web Dev Instructor',
      description: '',
      image: RodriguezPFP,
      email: 'lrrodrig@egusd.net@egusd.net'
    }
  };

  export let teacher: Teacher | Options;

  function getOptions(teacherInput: typeof teacher): Options {
    if (typeof teacherInput === 'string') {
      return TEACHER_OPTIONS[teacherInput];
    }

    return teacherInput;
  }

  $: ({ name, image, title, description, email } = getOptions(teacher));
</script>

<a href="mailto:{email}" class="rounded-md block p-8 transition shadow border">
  <img src={image} alt={name} class="rounded-full w-24 mx-auto" />
  <div class="text-center mt-4">
    <h1 class="font-body text-xl font-semibold">{name}</h1>
    <h2 class="text-blue-500 font-medium">{title}</h2>
    <p class="mt-2">{description}</p>
  </div>
</a>
