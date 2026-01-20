export interface PathWay {
  title: string;
  description: string;
  overview: string;
  bullets: string[];
  id: string;
}

export const pathWayItems: PathWay[] = [
  {
    title: 'Updated Classroom',
    description:
      'The new and improved Computer Science classroom here at Franklin High School, and how it benefits CS education',
    overview:
      "We are excited to announce that the Computer Science pathway has an updated classroom. Tables and laptops have replaced the rows of desktops to give students more opportunities to collaborate and work together. Each group has a TV screen to make it easier to see the teacher's notes and allow students to project their own screens from their laptops. The walls now have large whiteboards to provide students with more opportunities to problem solve and plan out their projects.",
    bullets: [],
    id: 'updated-classroom'
  },
  {
    title: 'Pathway Outcomes',
    description:
      "What's expected of students when they complete all three years of the Computer Science pathway",
    overview:
      'All of the classes and activities in our Computer Science program are based around these pathway outcomes. At the end of our pathway, all students will be able to:',
    bullets: [
      'Create algorithms and write computer programs to solve real-world problems',
      'Work collaboratively in an ICT (information and communication technology) environment',
      'Identify and correct syntax, runtime, and logic errors',
      'Understand the vast career options available to individuals with a computer science background',
      'Communicate effectively with and without technology',
      'Understand the ethical and social implications of computer use'
    ],
    id: 'pathway-outcomes'
  },
];

const getPathWayId = (id: string) => `/pathwayinfo/${id}`;

export function pathWayHref(pathPage: PathWay) {
  return getPathWayId(pathPage.id);
}

export function pathWayHrefById(pathPageId: string) {
  return getPathWayId(pathPageId);
}
  