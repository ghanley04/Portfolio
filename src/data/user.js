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
			link: "https://www.figma.com/proto/InoCvj0G46xjA0naGEiRpv/Coffee-Econ-V1?page-id=27%3A85&node-id=27-115&node-type=canvas&viewport=785%2C390%2C0.23&t=VZQ4f28ICeD6tHxy-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=27%3A115",
			image: process.env.PUBLIC_URL + '/coffee.png',
		},

		{
			title: "Tiny Threads",
			description:
				"A demo project of a website built to buy and resell children's clothing",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "#",
			image: process.env.PUBLIC_URL + '/tinythreads.png',
		},

		{
			title: "Moo Deng's Adventure",
			description:
				"A simple customized JavaScript game designed using a template",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://moodengadventuregame.site/",
			image: process.env.PUBLIC_URL + '/moodeng.png',
		},

		{
			title: "Translunar",
			description:
				"An update to the company Translunar's website using React",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://www.figma.com/proto/XDHQegrglzH5sFqO8dKXkN/Translunar-Website-V1?page-id=0%3A1&node-id=1-3&node-type=canvas&viewport=135%2C366%2C0.1&t=B9wluxMb7xJn4dgB-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3",
			image: process.env.PUBLIC_URL + '/translunar.png',
		},

		{
			title: "3D Parralax Application",
			description:
				"An interactive parallax website designed to be interactive adn responsive",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "#",
			image: process.env.PUBLIC_URL + '/parallax.png',
		},
	],
};

export default INFO;
