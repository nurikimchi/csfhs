export interface Testimonials {
    name: string;
    subtitle: string;
    quote: string;
    class: string;
    id: number;
  }
  
  const Testimonials: Testimonials[] = [
    {
      name: 'Justin Gagne',
      subtitle: '',
      quote:
        'I enjoyed collaborating with others in the lessons and labs. Despite the 3 years of prior programming experience we had, the class is set up in a way that would allow anyone without experience to succeed just as well. The labs we do are formatted in a way that mirrors the lessons we have just learned, making it significantly easier to grasp the complex concepts taught in this class. I also enjoyed learning about the different ways we could use machines to predict data and which ones work better in certain situations. Additionally, we learn how it is applied to real life, something that other classes like math fail to highlight.',
      class:
        "Machine Learning Honors",
      id: 1,
    },
    {
      name: 'Sayan Patel',
      subtitle: '',
      quote:
        'I really like the way the class is organized, and how the students are able to figure out how to make their code work using the help of other students. The lessons are straight-forward and made perfectly for students to learn, and the labs are really helpful for understanding how to implement different things into code. And most of all, the teacher is the best.',
      class:
        'Machine Learning Honors',
      id: 2,
    },
    {
      name: 'Joshua Fong',
      subtitle: '',
      quote:
        'Taking Exploring Computer Science and the CS pathway has helped me learn that programming is a team effort and not just something to tackle myself. Talking problems out in a classroom designed for collaboration gets me excited for the engaging experiences I’ll have in college.',
      class:
        'Exploring Computer Science',
      id: 3,
    },
    {
      name: 'Ankur',
      subtitle: 'Software Engineer at Google',
      quote:
        'Franklin gave me the foundation to take my skills to the next level and land a great job. It’s cool to see how the program continues to build opportunities for others.',
      class:
        '',
      id: 4,
    },
    {
      name: 'Marlon',
      subtitle: 'Associate IT Security Engineer @Stanford Healthcare',
      quote:
        'My interest for software and cybersecurity flourished under Mr. Dagler’s tutelage at Franklin. I’m happy to be in this field and hope that Franklin inspires more computer scientists to keep going!',
      class:
        '',
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
  
export default Testimonials;