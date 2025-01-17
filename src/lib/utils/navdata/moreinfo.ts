export interface MoreInformation {
  title: string;
  description: string;
  overview: string;
  bullets: string[];
  id: string;
  testimonies?:Testimonial[];
  hideSignUp?: boolean;
  about?: {
    text: string;
  };
}
export interface Testimonial {
  text: string;
  author: string;
}
export const moreInformationItems: MoreInformation[] = [
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
    title: 'Hewlett Packard Enterprise School Certificate Program',
    description:
      'Earn a certificate for demonstrating your programming knowledge',
    id: 'hpe-certification',
    overview: "Earn a certificate for your college application and resume!",
    bullets: [],
    testimonies: [
      {
        author:"Raymond",
        text:"The event provided a nuanced and unique perspective on my future in computer science and realistic expectations for the career and the field. Mr. Kyle Younger was my favorite part of the event. I loved his accent and his vibe."
      },
      {
        author:"Weivin",
        text:"I think this event helped me prepare by giving a job like experience, working with customers in the field of programming. It was very fun to be able to work in a environment of coding."
      },
      {
        author:"Nina",
        text:"I really liked the event! It was very hands-on and simulated working at a company. I had to email clients to schedule meet-ups where they would give me new information and I would show my progress. The instructors were all super friendly."
      }
    ],
    hideSignUp: false,
    about: {
      text: "This certification program simulates what it's like to work at a company. Besides knowing how to code, students will have to know the basics of github, contact their clients (roleplayed by the proctors) through outlook, and solve problems by themselves. Since this is not a class lecture, students don't take notes or recieve any help from their supervisor. However, students are granted full access to the internet and allowed to look things up. To pass, the student must create a minimal viable product within a 6 hour time limit with a supported programming languages.",
    }
  },
];

const getMoreInfoId = (id: string) => `/general/${id}`;

export function moreInfoHref(infoPage: MoreInformation) {
  return getMoreInfoId(infoPage.id);
}

export function moreInfoHrefById(infoPageId: string) {
  return getMoreInfoId(infoPageId);
}
