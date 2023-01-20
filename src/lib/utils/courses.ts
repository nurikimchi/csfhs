export interface Course {
	title: string;
	description: string;
	teacher: string;
	href: string;
}

export const courses: Course[] = [
	{
		title: 'Computer Science and Robotics for Beginners',
		description:
			'This course welcomes students with little to no coding experience to the wonderful world of computer science. In a safe learning environment, students will learn the basics of text-based coding and work collaboratively to write code that solves real-world problems.',
		teacher: 'Mr. Dagler',
		href: ''
	},
	{
		title: 'Exploring Computer Science',
		description:
			'This is the first course in our three-year pathway. Learn the command line interface • Develop problem-solving skills and techniques • Program using the C language • Solve problems using control flow, arrays and iteration.',
		teacher: 'Mr. Dagler',
		href: ''
	},
	{
		title: 'AP Computer Science Principles',
		description:
			'Explore how computing and technology is impacting us today through a project-based approach • Address real-world problems involving Big Data and Cybersecurity • Learn the history of the internet and how it works • Earn a 5.0 GPA bump and college credit by taking the AP test.',
		teacher: 'Mrs. Rodriguez',
		href: ''
	},
	{
		title: 'AP Computer Science A',
		description:
			'Learn content equivalent to a first-semester college-level course in CS • Learn object-oriented programming using the Java language • Solve problems by developing algorithms and using data structures • Compete at HP CodeWars • Earn a 5.0 GPA bump and college credit by taking the AP test.',
		teacher: 'Mr. Dagler',
		href: ''
	},
	{
		title: 'Web Development',
		description:
			'Develop web sites with HTML5 and CSS • Validating HTML code using W3C • Using images including Image Maps and SVG • Responsive design with BootStrap and FlaxBox • Use JavaScript to communicate with users and modify DOM • Transpilers including SASS and TypeScript.',
		teacher: 'Mrs. Rodriguez',
		href: ''
	},
	{
		title: 'Machine Learning Honors',
		description:
			'Gain understanding of every ML model covered • Use regression to model continuous data • Predict discrete results using classification models • Discover unknown patters with clustering models • Additional topics include association rule learning, reinforcement learning, and natural langue processing.',
		teacher: 'Mr. Dagler',
		href: ''
	}
];
