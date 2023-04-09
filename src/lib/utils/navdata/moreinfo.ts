export interface MoreInformation {
  title: string;
  description: string;
  overview: string;
  id: string;
}

export const moreInformationItems: MoreInformation[] = [
  {
    title: 'Updated Classroom',
    description: 'Our new computer science classroom.',
    overview:
      "We are excited to announce that the Computer Science pathway has an updated classroom. Tables and laptops have replaced the rows of desktops to give students more opportunities to collaborate and work together. Each group has a TV screen to make it easier to see the teacher's notes and allow students to project their own screens from their laptops. The walls now have large whiteboards to provide students with more opportunities to problem solve and plan out their projects.",
    id: 'updated-classroom'
  },
  {
    title: 'Pathway Outcomes',
    description: 'Whats expected at the end of each course.',
    overview:
      'All of the classes and activities in our Computer Science program are based around these pathway outcomes. At the end of our pathway, all students will be able to:',
    id: 'pathway-outcomes'
  },
  {
    title: 'Industry Connections',
    description: 'Industry connections that help shape the pathway at Franklin High School.',
    overview:
      'We believe that in order for students to receive the best education, they need to go beyond the traditional classroom. All of the offered courses in the CS pathway include guest speakers, field trips, and programming competitions. These activities help students discover a possible career path and develop connections with prominent figures in the industry.',
    id: 'industry-connections'
  },
  {
    title: 'Student Leadership',
    description: 'Whats expected at the end of each course.',
    overview: 'Another way students can go beyond the classroom is by participating in our student leadership team. As a leader, students will work with their team to promote computer science education and recruit future students for the pathway.',
    id: 'student-leadership'
  }
];

const getMoreInfoId = (id: string) => `/general/${id}`;

export function moreInfoHref(infoPage: MoreInformation) {
  return getMoreInfoId(infoPage.id);
}

export function moreInfoHrefById(infoPageId: string) {
  return getMoreInfoId(infoPageId);
}
