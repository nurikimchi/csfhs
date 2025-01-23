export interface MoreInformation {
  title: string;
  preview: string;
  overview: string;
  bullets: string[];
  id: string;
}

export const moreInformationItems: MoreInformation[] = [

  {
    title: 'Pathway Outcomes',
    preview:
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
  {
    title: 'Industry Connections',
    preview:
      'Industry connections that help shape the pathway, and give vast opportunities to students looking to go beyond the classroom.',
    overview:
      'We believe that in order for students to receive the best education, they need to go beyond the traditional classroom. All of the offered courses in the CS pathway include guest speakers, field trips, and programming competitions. These activities help students discover a possible career path and develop connections with prominent figures in the industry. Our business and community partners are:',
    bullets: [
      'Stanford University',
      'University of California, Davis',
      'Hewlett Packard Enterprise',
      'Lockheed Martin',
      'Intel'
    ],
    id: 'industry-connections'
  },
  {
    title: 'Updated Classroom',
    preview:
      'The new and improved Computer Science classroom here at Franklin High School, and how it benefits CS education',
    overview:
      "We are excited to announce that the Computer Science pathway has an updated classroom. Tables and laptops have replaced the rows of desktops to give students more opportunities to collaborate and work together. Each group has a TV screen to make it easier to see the teacher's notes and allow students to project their own screens from their laptops. The walls now have large whiteboards to provide students with more opportunities to problem solve and plan out their projects.",
    bullets: [],
    id: 'updated-classroom'
  },
];

const getMoreInfoId = (id: string) => `/general/${id}`;

export function moreInfoHref(infoPage: MoreInformation) {
  return getMoreInfoId(infoPage.id);
}

export function moreInfoHrefById(infoPageId: string) {
  return getMoreInfoId(infoPageId);
}
