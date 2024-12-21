export interface MoreInformation {
  title: string;
  description: string;
  overview: string;
  bullets: string[];
  id: string;
}

export const moreInformationItems: MoreInformation[] = [
  {
    title: 'Industry Connections',
    description:
      'Industry connections that help shape the pathway, and give vast opportunities to students looking to go beyond the classroom.',
    overview:
      'We believe that in order for students to receive the best education, they need to go beyond the traditional classroom. All of the offered courses in the CS pathway include guest speakers, field trips, and programming competitions. These activities help students discover a possible career path and develop connections with prominent figures in the industry. Our business and community partners are:',
    bullets: [
      'University of California, Davis',
      'Hewlett Packard Enterprise',
      'Lockheed Martin',
      'Intel'
    ],
    id: 'industry-connections'
  },
  {
    title: 'Student Leadership',
    description:
      'Another opportunity for students to participate in the pathway outside of the classroom is by being a part of the leadership team',
    overview:
      'Another way students can go beyond the classroom is by participating in our student leadership team. As a leader, students will work with their team to promote computer science education and recruit future students for the pathway.',
    bullets: [],
    id: 'student-leadership'
  },
  {
    title: 'Student-Run Clubs',
    description:
      'Another opportunity for students to participate in the pathway outside of the classroom is by being a part of the leadership team',
    overview:
      '',
    bullets: [],
    id: 'student-run-clubs'
  },
  {
    title: 'Student Competitions',
    description:
      'Another opportunity for students to participate in the pathway outside of the classroom is by being a part of the leadership team',
    overview:
      '',
    bullets: [],
    id: 'Student-Competitions'
  },
];

const getMoreInfoId = (id: string) => `/general/${id}`;

export function moreInfoHref(infoPage: MoreInformation) {
  return getMoreInfoId(infoPage.id);
}

export function moreInfoHrefById(infoPageId: string) {
  return getMoreInfoId(infoPageId);
}
