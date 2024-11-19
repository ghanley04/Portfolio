import projectImage from './public projects/portrait.png';

const INFO = {
	main: {
		title: "Gillian Hanley's Portfolio",
		name: "Gillian Hanley",
		work: "hanleyg@purdue.edu",
		personal: "gghanley04@gmail.com",
		linkedin: "https://www.linkedin.com/in/gillian-hanley-a77024242/",
		number: "314-230-6658",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/",
		linkedin: "https://linkedin.com/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Gillian Hanley",
		description: "Designer, Developer, and Student",
		location: "St. Louis, MO",
	},

	about: {
		title: "I’m 'name'. I'm from... I build...",
		description:
			"#",
	},

	projects: [
		{
			title: "Figma Mockup",
			description: "A mockup of a website in Figma designed to sell coffee beans",
			logo: "../../public/portrait.png",
			linkText: "View Project",
			link: "#",
			image: process.env.PUBLIC_URL + '/portrait.png',
		},

		{
			title: "Tiny Threads",
			description:
				"A group project of a website built to buy and resell children's clothing",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "#",
			image: process.env.PUBLIC_URL + '/logo.png',
		},

		{
			title: "Moo Deng's Adventure",
			description:
				"A simple customized JavaScript game designed for my younger sister using a template",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "#",
			image: process.env.PUBLIC_URL + '/logo.png',
		},

		{
			title: "Translunar",
			description:
				"An update to the company Translunar's website using React",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "#",
			image: process.env.PUBLIC_URL + '/logo.png',
		},

		{
			title: "3D Parralax Application",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "#",
			image: process.env.PUBLIC_URL + '/portrait.png',
		},
	],
};

export default INFO;
