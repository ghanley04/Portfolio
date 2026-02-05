const INFO = {
	main: {
		title: "Gillian Hanley's Portfolio",
		name: "GILLIAN HANLEY",
		work: "hanleyg@purdue.edu",
		personal: "gghanley04@gmail.com",
		linkedin: "https://www.linkedin.com/in/gillian-hanley-a77024242/",
		number: "314-230-6658",
		logo: "../logo.png",
	},

	projects: [
		{
			item: "1",
			title: "NightLine COMO",
			description:
				"A client project to redesign the website of a company specializing in analyzing biometric data.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "Click here to view more...",
			image: process.env.PUBLIC_URL + '/nightline.png',
			overlayText: "This website is designed for a late-night student transportation service at the University of Missouri. I designed the website to be more user-friendly and visually appealing, and am currently developing a mobile app to be released soon. View the website adn code below.",
			overlayTools: "AWS, React, Expo Go, App Development",
			overlayLinkText: "View Website",
			link: "https://www.nightlinecomo.com/",
			overlayLinkText2: "View Our Code",
			link2: "#",
			className: "nightline"
		},
		{
			item: "2",
			title: "ES@P Website",
			description: "Website designed for Purdue's Embedded Systems student organization",
			logo: "../../public/esap.png",
			linkText: "Click here to view more...",
			image: process.env.PUBLIC_URL + '/esap.png',
			overlayText: "This is a website for 'Embedded Systems at Purdue' student organization. I currently maintain this website and add new features to encourage club activity.",
			overlayTools: "HTML, CSS, JavaScript",
			overlayLinkText: "View Website",
			link: "https://www.esap.dev/",
			overlayLinkText2: "XXX",
			link2: "XX",
			className: "esap"

		},
		{
			item: "3",
			title: "Synchroni",
			description:
				"A client project to redesign the website of a company specializing in analyzing biometric data.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "Click here to view more...",
			image: process.env.PUBLIC_URL + '/synchroni.png',
			overlayText: "This website was designed for a biometric data analysis company. I redesigned the website to be more user-friendly and visually appealing, focusing on clear presentation of their services and data security features.",
			overlayTools: "Figma, Framer",
			overlayLinkText: "View Website",
			link: "https://synchroni.co/",
			overlayLinkText2: "View Our Code",
			link2: "#",
			className: "synchroni"

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
			className: "translunar"

		},

		// {
		// 	item: "2",
		// 	title: "Tiny Threads",
		// 	description:
		// 		"A demo project of a website built to buy and resell children's clothing",
		// 	logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
		// 	linkText: "Click here to view more...",
		// 	image: process.env.PUBLIC_URL + '/tinythreads.png',
		// 	overlayText: "This website is designed to buy and sell used children's clothing. This was a group project, and I designed and coded the 'Buy' page and checkout process, along with the CSS for other pages and uploading the website to a server",
		// 	overlayTools: "Figma, HTML, Bootstrap CSS, and Javascript",
		// 	overlayLinkText: "View Website",
		// 	link: "https://tinythreads.me/",
		// 	overlayLinkText2: "View Our Code",
		// 	link2: "#",
		// },


		{
			item: "5",
			title: "Moo Deng's Adventure",
			description:
				"A simple customized JavaScript game designed using a template",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "Click here to view more...",
			image: process.env.PUBLIC_URL + '/moodeng.png',
			overlayText: "This project was created with vanilla Javascript. The player's goal is to eat fruits and avoid the enemy, Darth Vadar. I started with a tutorial by 'Franks labratory' for the basic framework, then designed the rest on my own.",
			overlayTools: "HMTL, CSS, Javascript",
			overlayLinkText: "View Game",
			link: "https://moodengsadventure.online/",
			overlayLinkText2: "View My Code",
			link2: "https://github.com/ghanley04/Moo_Dengs_Adventure",
			className: "moo-deng"


		},
		{
			item: "6",
			title: "3D Parralax Application",
			description:
				"An interactive parallax website designed to be interactive and responsive",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "Click here to view more...",
			image: process.env.PUBLIC_URL + '/parallax.png',
			overlayText: "This website is designed to show a parallax effect. I coded this to extend my knowledge of Javascript, based off of a tutorial by 'True Coder'. On my own, I made the website more responsive to different screen sizes.",
			overlayTools: "HTML, Basic CSS, Javascript",
			overlayLinkText: "View Website",
			link: "https://ghanley04.github.io/3D-Parallax-Effect/",
			overlayLinkText2: "View Code",
			link2: "https://github.com/ghanley04/3D-Parallax-Effect",
			className: "parralax"

		},

	],
};

export default INFO;
