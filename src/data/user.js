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
			item: "1",
			title: "Figma Mockup",
			description: "A mockup of a website in Figma designed to sell coffee beans",
			logo: "../../public/portrait.png",
			linkText: "Click here to view more...",
			image: process.env.PUBLIC_URL + '/coffee.png',
			overlayText: "This is a mockup of an app that sells roasted coffee beans, created purely in Figma. This was a project used to hone my skills in Figma.",
			overlayTools: "Figma",
			overlayLinkText: "View Mockup",
			link: "https://www.figma.com/proto/InoCvj0G46xjA0naGEiRpv/Coffee-Econ-V1?page-id=27%3A85&node-id=27-115&node-type=canvas&viewport=785%2C390%2C0.23&t=VZQ4f28ICeD6tHxy-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=27%3A115",
			overlayLinkText2: "View Website",
			link2: "#",
		},

		{
			item: "2",
			title: "Tiny Threads",
			description:
				"A demo project of a website built to buy and resell children's clothing",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "Click here to view more...",
			image: process.env.PUBLIC_URL + '/tinythreads.png',
			overlayText: "This website is designed to buy and sell used children's clothing. This was a group project, and I designed and coded the 'Buy' page and checkout process, along with the CSS for other pages and uploading the website to a server",
			overlayTools: "Figma, HTML, Bootstrap CSS, and Javascript",
			overlayLinkText: "View Website",
			link: "https://tinythreads.me/",
			overlayLinkText2: "View Our Code",
			link2: "#",
		},

		{
			item: "3",
			title: "Moo Deng's Adventure",
			description:
				"A simple customized JavaScript game designed using a template",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "Click here to view more...",
			image: process.env.PUBLIC_URL + '/moodeng.png',
			overlayText: "This project was created with vanilla Javascript. The player's goal is to eat fruits and avoid the enemy, Darth Vadar. I started with a tutorial by 'Franks labratory' for the basic framework, then designed the rest on my own.",
			overlayTools: "HMTL, CSS, Javascript",
			overlayLinkText: "View Game",
			link: "https://moodengadventuregame.site/",
			overlayLinkText2: "View My Code",
			link2: "https://github.com/ghanley04/Moo_Dengs_Adventure",
			
		},

		{
			item: "4",
			title: "Translunar",
			description:
				"An update to the company Translunar's website using React",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "Click here to view more...",
			image: process.env.PUBLIC_URL + '/translunar.png',
			overlayText: "I resdesigned this website for a startup company working in Space Technology. This was designed using the React framework.",
			overlayTools: "React, Tailwind CSS, Next.js",
			overlayLinkText: "View Mockup",
			link: "https://www.figma.com/proto/XDHQegrglzH5sFqO8dKXkN/Translunar-Website-V1?page-id=0%3A1&node-id=1-3&node-type=canvas&viewport=135%2C366%2C0.1&t=B9wluxMb7xJn4dgB-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3",
			overlayLinkText2: "View Website",
			link2: "https://www.translunar-esi.com/",
		},

		{
			item: "5",
			title: "3D Parralax Application",
			description:
				"An interactive parallax website designed to be interactive and responsive",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "Click here to view more...",
			image: process.env.PUBLIC_URL + '/parallax.png',
			overlayText: "This website is designed to show a parallax effect. I coded this to extend my knowledge of Javascript, based off of a tutorial by 'True Coder'. On my own, I made the website more responsive to different screen sizes.",
			overlayTools: "HTML, Basic CSS, Javascript",
			overlayLinkText: "View Code",
			link: "https://github.com/ghanley04/3D-Parallax-Effect",
			overlayLinkText2: "View Website",
			link2: "https://www.parallaxtest.online/",
		},
	],
};

export default INFO;
