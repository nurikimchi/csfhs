export interface Faq {
    id: number
    question: string,
    answer: string,
}

const Faq: Faq[] = [
    {
        id: 1,
        question: "How do I register for the pathway?",
        answer: 'The banner at the top currently has a link to the 2025-2026 Google Form registration. Make sure to sign up for Exploring Computer Science by your sophomore year.',
    },
    {
        id: 2,
        question: "Do I need to be an experienced programmer?",
        answer: "The short answer is NO. Both elective courses (Computer Science & Robotics for Beginners and Machine Learning Honors) and Exploring Computer Science assume no prior CS experience. One of my favorite parts about teaching is watching students learn computer problems for the first time. The excitement of that \"light bulb\" moment is a grand celebration. If you do have experience with computer science, there are plenty of opportunities to improve and expand on your prior knowledge.",
    },
    {
        id: 3,
        question: "Do I work individually?",
        answer: "The pathway emphasizes collaboration through its pathway outcomes and classroom. In all classes, students will collaborate with peers to complete labs, projects, and in-class activities.",
    },
    {
        id: 4,
        question: "What course do I take first to enter the pathway?",
        answer: "Interested freshman and sophomores must take Exploring Computer Science to enter the pathway. Elective classes Exploring Computer Science & Robotics for Beginners and Machine Learning Honors can be taken by students not enrolled in the pathway."
    }
]

export default Faq;