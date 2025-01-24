export interface Course {
  title: string;
  coverImage: string;
  grades: string;
  preview: string;
  pathway: string;
  type: CourseType;
  testimonies: Testimonial[];
  teacher: Teacher;
  email: string;
  id: string;
  colSpanClass: string;
  roundedClass: string;
  imgClass: string;
}

export interface SelectedCourses {
  title: string;
  coverImage: string;
  grades: string;
  preview: string;
  pathway: string;
  testimonies: Testimonial[];
  teacher: Teacher;
  email: string;
  id: string;
  colSpanClass: string;
  roundedClass: string;
  imgClass: string;
}

export const teachers = ['Mr. Dagler', 'Mrs. Rodriguez'] as const; // 'Mrs. Rodriguez'
export type Teacher = typeof teachers[number];

export const courseTypes = ['Elective', 'Pathway'] as const;
export type CourseType = typeof courseTypes[number];

export interface Testimonial {
  text: string;
  author: string;
  subtitle?: string;
}

import ecsr from '$lib/images/home/ecsr-logo.png';
import ecs from '$lib/images/home/ecs-logo.jpeg';
import apcsp from '$lib/images/home/apcsp-logo.png';
import apcsa from '$lib/images/home/apcsa-logo.jpeg';
import mlh from '$lib/images/home/mlh.jpeg';

export const courses: Course[] = [
  {
    title: 'Exploring Computer Science',
    coverImage: ecs,
    grades: 'Sophomore',
    type: 'Pathway',
    preview:
      'The first course in the three-year pathway • Introduction to computer science and problem-solving • Learn and use the four parts of every program • Program using the C++ language • Solve problems using control flow, arrays, iteration and several standard libraries.',
    pathway:
      'Exploring Computer Science serves as the first course of a three-year Computer Science pathway.',
    testimonies: [
      {
        text: 'I thought it was fascinating that a little programming could do something so cool like outputting your name. It just made me wonder, what else can coding do?',
        author: 'Janelle',
        subtitle: 'University of California, Irvine',
      },
      {
        text: "The feeling of satisfaction I had in that moment is indescribable, and I get that feeling each time I successfully complete a code. My first experience got me thinking: what else can I do with programming?",
        author: 'Sanjitha',
        subtitle: 'Carnegie Mellon University'
      },
    ],
    teacher: 'Mr. Dagler',
    email: 'cdagler@egusd.net',
    id: 'ecs',
    colSpanClass: "lg:col-span-3",
    roundedClass: "lg:rounded-tr-[2rem]",
    imgClass: "h-80 object-cover",
  },
  {
    title: 'AP Computer Science Principles',
    coverImage: apcsp,
    grades: 'Junior',
    type: 'Pathway',
    preview:
      'Explore how computing and technology is impacting us today through a project-based approach • Address real-world problems involving Big Data and Cybersecurity • Earn a 5.0 GPA bump and college credit by taking the AP test.',
    pathway: 'AP Computer Science Principles is the second course of the three-year pathway.',
    testimonies: [
      {
        text: 'AP Computer Science Principles provided me with a class that I was comfortable enough with to step out of my comfort zone and collaborate with new people.',
        author: 'Royce'
      },
      {
        text: 'AP Computer Science Principles allowed me to collaborate with my peers and it helped open my mind to new technology. I was able to learn ideas and concepts that could be applied to the real world.',
        author: 'Nicole'
      },
      {
        text: 'I liked that the curriculum taught felt very distinguished from other classes. It was a very unique class, and I felt that what I learned applied much more to the real life than normal high school courses. Everyday I saluted Mrs. Rodriguez at the door, with a wide smile on my face, ready to learn something new.',
        author: 'Joshua'
      }
    ],
    teacher: 'Mrs. Rodriguez',
    email: 'lrrodrig@egusd.net',
    id: 'apcsp',
    colSpanClass: "lg:col-span-2",
    roundedClass: "lg:rounded-bl-[2rem]",
    imgClass: "h-80 object-cover",
  },
  {
    title: 'AP Computer Science A',
    coverImage: apcsa,
    grades: 'Senior',
    type: 'Pathway',
    preview:
      'Learn content equivalent to a first-semester college-level course in CS • Learn object-oriented programming using the Java language • Solve problems by developing algorithms and using data structures • Compete at HP CodeWars • Earn a 5.0 GPA bump and college credit by taking the AP test',
    pathway: 'AP Computer Science A is the final course of the three-year pathway.',
    testimonies: [
      {
        text: 'I liked the labs we did with Java that compelled us to think outside the box.',
        author: 'Sameer'
      },
      {
        text: 'I liked the labs and being able to collaborate on code with my row partners. I also like being able to work individually on challenging projects.',
        author: 'Zack'
      },
      {
        text: 'I enjoyed how the class was like an adventure. We explored different concepts and were able to try many things on our own, but whenever we needed help, Mr. Dagler was always there. It was fun.',
        author: 'Denise'
      },
      {
        text: 'AP CSA teaches how to program in general. You learn some basic fundamentals of CS algorithms in this class, this class barely has any homework, and it should be review for most people coming from ECS. This class is also by far one of the best classes Franklin has to offer, and the AP label shouldn\'t deter you from trying out this really fun course.',
        author: 'Brentt',
        subtitle: 'Class of 2025'
      },
      {
        text: 'AP CSA was an interesting, in depth class that created an abstract way of thinking that I can apply to my daily life. Although the class became rigorous at times, Mr. Dagler and the pathway classes ensured that everyone was prepared for success!',
        author: 'Caroline',
        subtitle: 'Class of 2025'
      },
      {
        text: 'One of the most intriguing classes for those interested in advanced programming.',
        author: 'Yongxiang',
        subtitle: 'Class of 2025'
      }
    ],
    teacher: 'Mr. Dagler',
    email: 'cdagler@egusd.net',
    id: 'apcsa',
    colSpanClass: "lg:col-span-2",
    roundedClass: "",
    imgClass: "h-80 object-cover",
  },
  {
    title: 'Computer Science & Robotics For Beginners',
    coverImage: ecsr,
    grades: 'All grades',
    type: 'Elective',
    preview:
      'Available to students with little to no programming experience • Learn the basics of text-based coding • Work collaboratively to solve real-world problems',
    pathway:
      'Computer Science and Robotics for Beginners is an elective class for 9th graders, and it is meant as an preview of the curriculum in more advanced pathway courses.',
    testimonies: [

    ],
    teacher: 'Mr. Dagler',
    email: 'cdagler@egusd.net',
    id: 'cs-robotics',
    colSpanClass: "lg:col-span-3",
    roundedClass: "max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]",
    imgClass: "h-80 object-cover",
  },
  {
    title: 'Machine Learning Honors',
    coverImage: mlh,
    grades: 'Senior',
    type: 'Elective',
    preview:
      'Gain an understanding of various ML models • Use regression to model continuous data • Predict discrete results using classification models • Discover unknown patters with clustering models • Additional topics include association rule learning, reinforcement learning, and natural language processing',
    pathway:
      'Machine Learning Honors is an elective class in the pathway, and is the only course of its kind offered in the area.',
    testimonies: [
      {
        text: 'I really enjoyed collaborating with my peers on solving errors in the labs. I liked the fact that labs allowed me to practice the skills I learned in class, and allowed me to tackle new problems as well.',
        author: 'Sia',
        subtitle: 'University of California, Berkeley'
      },
      {
        text: 'I didn\'t even know how to code before this but Mr. Dagler opened my eyes.',
        author: 'Andrew',
        subtitle: 'Class of 2025',
      },
      {
        text: 'I really enjoy this class. I like how there is a lot of time to learn and finish assignments. This is one of the few classes I feel like I learned something in. I had a great time.',
        author: 'Jumanah',
        subtitle: 'Class of 2025',
      },
      {
        text: 'MLH repeats all the fun aspects with AP CSA, but now with an emphasis on machine learning. Even if you think CS or math isn\'t your cup of tea, this class is still appealing because most concepts should feel intuitive, and Python is easy to learn and understand. Plus, this course doesn\'t have that much homework, or need crazy in-depth knowledge about math, you just need to pay attention and think logically. Anyone can take this class and perform well in it.',
        author: 'Brentt',
        subtitle: 'Class of 2025',
      },
      {
        text: 'I really enjoyed doing projects in MLH because they analyzed real world data like housing prices, purchasing power based on salary and age, and energy efficiency. Our projects teach us important ML topics like regression and classification.',
        author: 'Gaby',
        subtitle: 'Class of 2025',
      },
      {
        text: 'Machine Learning is a class I\'ve been wanting to take ever since I was a freshman. My favorite aspect about the class is developing statistical models and algorithms to predict trends using data from previous years. Mr. Dagler is a really great mentor and teacher who guided me through the CS Pathway. Dagler has a huge emphasis on helping his students understand the difficult nature of computer science. Overall, I would definitely recommend taking this class!',
        author: 'Khloe',
        subtitle: 'Class of 2025',
      },
      

    ],
    teacher: 'Mr. Dagler',
    email: 'cdagler@egusd.net',
    id: 'ml-honors',
    colSpanClass: "lg:col-span-2",
    roundedClass: "max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]",
    imgClass: "h-80 object-cover",
  }
];



export const mainCourses: SelectedCourses[] = [
  {
    title: 'Exploring Computer Science',
    coverImage: ecs,
    grades: 'Sophomore',
    preview:
    'The first course in the three-year pathway • Introduction to computer science and problem-solving • Learn and use the four parts of every program • Program using the C++ language • Solve problems using control flow, arrays, iteration and several standard libraries.',
    pathway:
      'Exploring Computer Science serves as the first course of a three-year Computer Science pathway.',
    testimonies: [
      {
        text: 'I thought I was fascinating that a little programming could do something so cool like outputting your name. It just made me wonder, what else can coding do?',
        author: 'Janelle'
      },
      {
        text: "The very first coding problem I was assigned was to create a code that outputs the user's name. At first, I was struggling to see what was wrong with it, and all of a sudden it hit me! I fixed my error and the code started working. The feeling of satisfaction I had in that moment is indescribable, and I get that feeling each time I successfully complete a code. My first experience got me thinking… What else can I do with programming?",
        author: 'Sanjitha'
      },
    ],
    teacher: 'Mr. Dagler',
    email: 'cdagler@egusd.net',
    id: 'ecs',
    colSpanClass: "lg:col-span-2",
    roundedClass: "lg:rounded-tl-[2rem] lg:rounded-bl-[2rem]",
    imgClass: "h-80 object-cover",
  },
  {
    title: 'AP Computer Science Principles',
    coverImage: apcsp,
    grades: 'Junior',
    preview:
      'Explore how computing and technology is impacting us today through a project-based approach • Address real-world problems involving Big Data and Cybersecurity • Earn a 5.0 GPA bump and college credit by taking the AP test.',
    pathway: 'AP Computer Science Principles is the second course of the three-year pathway.',
    testimonies: [
      {
        text: 'AP Computer Science Principles provided me with a class that I was comfortable enough with to step out of my comfort zone and collaborate with new people.',
        author: 'Royce'
      },
      {
        text: 'AP Computer Science Principles allowed me to collaborate with my peers and it helped open my mind to new technology. I was able to learn ideas and concepts that could be applied to the real world.',
        author: 'Nicole'
      },
      {
        text: 'I liked that the curriculum taught felt very distinguished from other classes. It was a very unique class, and I felt that what I learned applied much more to the real life than normal high school courses. Everyday I saluted Mrs. Rodriguez at the door, with a wide smile on my face, ready to learn something new.',
        author: 'Joshua'
      }
    ],
    teacher: 'Mrs. Rodriguez',
    email: 'lrrodrig@egusd.net',
    id: 'apcsp',
    colSpanClass: "lg:col-span-2",
    roundedClass: "", // lg:rounded-bl-[2rem]
    imgClass: "h-80 object-cover",
  },
  {
    title: 'AP Computer Science A',
    coverImage: apcsa,
    grades: 'Senior',
    preview:
      'Learn content equivalent to a first-semester college-level course in CS • Learn object-oriented programming using the Java language • Solve problems by developing algorithms and using data structures • Compete at HP CodeWars • Earn a 5.0 GPA bump and college credit by taking the AP test',
    pathway: 'AP Computer Science A is the final course of the three-year pathway.',
    testimonies: [
      {
        text: 'I liked the labs we did with Java that compelled us to think outside the box.',
        author: 'Sameer'
      },
      {
        text: 'I liked the labs and being able to collaborate on code with my row partners. I also like being able to work individually on challenging projects.',
        author: 'Zack'
      },
      {
        text: 'I enjoyed how the class was like an adventure. We explored different concepts and were able to try many things on our own, but whenever we needed help, Mr. Dagler was always there. It was fun.',
        author: 'Denise'
      },
      {
        text: 'I like this class because it involves a lot of Math and critical thinking.',
        author: 'Peiqi'
      },
      {
        text: 'I liked learning how to code in a fun way that I can use in the future.',
        author: 'Nick'
      },
      {
        text: 'It is very interactive with a combination of notes and doing it independently.',
        author: 'Sophia'
      }
    ],
    teacher: 'Mr. Dagler',
    email: 'cdagler@egusd.net',
    id: 'apcsa',
    colSpanClass: "lg:col-span-2",
    roundedClass: "lg:rounded-tr-[2rem] lg:rounded-br-[2rem]",
    imgClass: "h-80 object-cover",
  },
];

export const electiveCourses: SelectedCourses[] = [
  {
    title: 'Computer Science & Robotics For Beginners',
    coverImage: ecsr,
    grades: 'All grades',
    preview:
      'Available to students with little to no programming experience • Learn the basics of text-based coding • Work collaboratively to solve real-world problems',
    pathway:
      'Computer Science and Robotics for Beginners is an elective class for 9th graders, and it is meant as an preview of the curriculum in more advanced pathway courses.',
    testimonies: [

    ],
    teacher: 'Mr. Dagler',
    email: 'cdagler@egusd.net',
    id: 'cs-robotics',
    colSpanClass: "lg:col-span-3",
    roundedClass: "max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] lg:rounded-bl-[2rem]",
    imgClass: "h-80 object-cover",
  },
  {
    title: 'Machine Learning Honors',
    coverImage: mlh,
    grades: 'Senior',
    preview:
      'Gain an understanding of various ML models • Use regression to model continuous data • Predict discrete results using classification models • Discover unknown patters with clustering models • Additional topics include association rule learning, reinforcement learning, and natural language processing',
    pathway:
      'Machine Learning Honors is an elective class in the pathway, and is the only course of its kind offered in the area.',
    testimonies: [
      {
        text: 'I enjoy collaborating with others, trying to figure out the labs and fixing the errors we have. The content of the class intrigues me because I feel machine learning is going to be a major part of our future and learning it early will benefit us.',
        author: 'George'
      },
      {
        text: 'I liked the fact that labs followed every instruction in class. I really enjoyed collaborating with my peers on solving errors in the labs. I liked the fact that labs allowed me to practice the skills I learned in class, and allowed me to tackle new problems as well.',
        author: 'Sia'
      },
      {
        text: "I loved how we're able to work in groups to collaborate in this class and the help I got from other classmates and Mr. Dagler!",
        author: 'Bronte'
      },
      {
        text: 'I liked the energy of the classroom and the coding.',
        author: 'Maroof'
      },
      {
        text: 'I liked the collaboration in this class and working on the labs and other work with my classmates.',
        author: 'Jordan'
      }
    ],
    teacher: 'Mr. Dagler',
    email: 'cdagler@egusd.net',
    id: 'ml-honors',
    colSpanClass: "lg:col-span-3",
    roundedClass: "max-lg:rounded-b-[2rem] lg:rounded-br-[2rem] lg:rounded-tr-[2rem]",
    imgClass: "h-80 object-cover",
  }
]

const getCourseId = (id: string) => `/courses/${id}`;

export function courseHref(course: Course) {
  return getCourseId(course.id);
}

export function courseHrefById(courseId: string) {
  return getCourseId(courseId);
}
