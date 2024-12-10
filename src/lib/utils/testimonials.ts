export interface Testimonials {
    name: string;
    quote: string;
    class: string;
    id: number;
  }
  
  const testimonials: Testimonials[] = [
    {
      name: 'Justin Gagne',
      quote:
        'I enjoyed collaborating with others in the lessons and labs. Despite the 3 years of prior programming experience we had, the class is set up in a way that would allow anyone without experience to succeed just as well. The labs we do are formatted in a way that mirrors the lessons we have just learned, making it significantly easier to grasp the complex concepts taught in this class. I also enjoyed learning about the different ways we could use machines to predict data and which ones work better in certain situations. Additionally, we learn how it is applied to real life, something that other classes like math fail to highlight.',
      class:
        "Machine Learning Honors",
      id: 1,
    },
    {
      name: 'Sayan Patel',
      quote:
        'I really like the way the class is organized, and how the students are able to figure out how to make their code work using the help of other students. The lessons are straight-forward and made perfectly for students to learn, and the labs are really helpful for understanding how to implement different things into code. And most of all, the teacher is the best.',
      class:
        'Machine Learning Honors',
      id: 2,
    },
    {
      name: 'Industry Connections',
      quote:
        'Industry connections that help shape the pathway, and give vast opportunities to students looking to go beyond the classroom.',
      class:
        'We believe that in order for students to receive the best education, they need to go beyond the traditional classroom. All of the offered courses in the CS pathway include guest speakers, field trips, and programming competitions. These activities help students discover a possible career path and develop connections with prominent figures in the industry. Our business and community partners are:',
      id: 3,
    },
    {
      name: 'Student Leadership',
      quote:
        'Another opportunity for students to participate in the pathway outside of the classroom is by being a part of the leadership team',
      class:
        'Another way students can go beyond the classroom is by participating in our student leadership team. As a leader, students will work with their team to promote computer science education and recruit future students for the pathway.',
      id: 4,
    }
  ];
  
  const getMoreInfoId = (id: string) => `/general/${id}`;
  
//   export function moreInfoHref(infoPage: Testimonials[]) {
//     return getMoreInfoId(infoPage.id);
//   }
  
//   export function moreInfoHrefById(infoPageId: string) {
//     return getMoreInfoId(infoPageId);
//   }
  
export default testimonials;