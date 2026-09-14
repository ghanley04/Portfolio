const INFO = {
	main: {
		title: "Gillian Hanley's Portfolio",
		name: "GILLIAN HANLEY",
		work: "hanleyg@purdue.edu",
		personal: "gghanley04@gmail.com",
		linkedin: "https://www.linkedin.com/in/gillian-hanley-a77024242/",
		github: "https://github.com/ghanley04",
		number: "314-230-6658",
		logo: "../logo.png",
	},

	// Filter chips shown above the project grid. "All" is added automatically.
	projectFilters: ["Client", "Personal", "Web", "Mobile", "Design"],

	projects: [
		{
			item: "7",
			title: "SIsta",
			description:
				"An AI study companion that turns a course's real materials into grounded tutoring and practice.",
			size: "feature",
			className: "sista",
			tags: ["Personal", "Web"],
			badge: "Live",
			year: "2025",
			role: "Designer & Developer",
			linkText: "View project",
			image: process.env.PUBLIC_URL + "/gallery/sista/thumb.png",
			gallery: [
				{ src: process.env.PUBLIC_URL + "/gallery/sista/web-student-chat.png", device: "desktop" },
				{ src: process.env.PUBLIC_URL + "/gallery/sista/web-student-tutor.png", device: "desktop" },
				{ src: process.env.PUBLIC_URL + "/gallery/sista/web-student-prep.png", device: "desktop" },
				{ src: process.env.PUBLIC_URL + "/gallery/sista/web-student-materials.png", device: "desktop" },
				{ src: process.env.PUBLIC_URL + "/gallery/sista/web-leader-materials.png", device: "desktop" },
				{ src: process.env.PUBLIC_URL + "/gallery/sista/web-leader-people.png", device: "desktop" },
			],
			overlayText:
				"SIsta (SI + sister) is a study companion for Supplemental Instruction. An SI leader loads a course's real materials — syllabus, session plans, and lecture notes — and the app turns them into a tutoring chat, auto-generated SI-style practice sessions, and topic-by-topic mastery tracking, all grounded in the uploaded content. I designed and built it end to end as an SI leader myself, closing the gap between when students need help and when the schedule allows.",
			tools: ["JavaScript", "Vite", "Firebase", "Claude API"],
			links: [
				{ label: "View App", url: "https://gillianhanley.us/sista/" },
				{ label: "View Code", url: "https://github.com/ghanley04/si-app" },
			],
		},
		{
			item: "1",
			title: "NightLine COMO",
			description:
				"Website and mobile app for a late-night student shuttle service.",
			// Card sizing in the bento grid: "feature" (2x2) or "wide" (2x1)
			size: "feature",
			className: "nightline",
			// Filter tags (must match projectFilters above)
			tags: ["Client", "Web", "Mobile"],
			// Short badge shown in the corner of the card + in the overlay header
			badge: "Web + App",
			year: "2025",
			role: "Designer & Developer",
			linkText: "View project",
			image: process.env.PUBLIC_URL + "/gallery/nightline/thumb.png",
			// App icon shown as a badge next to the title in the overlay header
			// (not as a gallery slide).
			icon: process.env.PUBLIC_URL + "/gallery/nightline/app-icon.png",
			// Image gallery shown inside the overlay so people can browse the
			// work without leaving the site. Each entry sets its device frame:
			// "desktop" (browser frame, for the website) or "phone" (for the app).
			gallery: [
				{ src: process.env.PUBLIC_URL + "/gallery/nightline/web-home.png", device: "desktop" },
				{ src: process.env.PUBLIC_URL + "/gallery/nightline/app-mypass.png", device: "phone" },
				{ src: process.env.PUBLIC_URL + "/gallery/nightline/app-map.png", device: "phone" },
				{ src: process.env.PUBLIC_URL + "/gallery/nightline/app-plans-subscription.png", device: "phone" },
				{ src: process.env.PUBLIC_URL + "/gallery/nightline/app-plans-onetime.png", device: "phone" },
				{ src: process.env.PUBLIC_URL + "/gallery/nightline/app-profile.png", device: "phone" },
			],
			overlayText:
				"NightLine COMO is a late-night shuttle service for students at the University of Missouri. I designed and built their marketing website to be cleaner and more user-friendly, and I'm currently developing the companion mobile app — where students buy passes, view live shuttle routes on a map, and manage their account. Browse screenshots of the website and the app below.",
			tools: ["React", "React Native (Expo)", "AWS"],
			// Website link removed — the live site is no longer available.
			links: [],
		},
		{
			item: "2",
			title: "ES@P Website",
			description:
				"Website for Purdue's Embedded Systems student organization.",
			size: "wide",
			className: "esap",
			tags: ["Personal", "Web"],
			badge: "Live",
			year: "2024–Present",
			role: "Maintainer & Developer",
			linkText: "View project",
			image: process.env.PUBLIC_URL + "/gallery/esap/thumb.png",
			gallery: [
				{ src: process.env.PUBLIC_URL + "/gallery/esap/web-home.png", device: "desktop" },
				{ src: process.env.PUBLIC_URL + "/gallery/esap/web-about.png", device: "desktop" },
				{ src: process.env.PUBLIC_URL + "/gallery/esap/web-projects.png", device: "desktop" },
			],
			overlayText:
				"A website for Embedded Systems at Purdue (ES@P), a student organization. I actively maintain the site and build new features to drive club engagement and showcase what members are working on.",
			tools: ["HTML", "CSS", "JavaScript"],
			links: [{ label: "View Website", url: "https://www.esap.dev/" }],
		},
		{
			item: "3",
			title: "Synchroni",
			description:
				"Website redesign for a biometric-data analytics company.",
			size: "wide",
			className: "synchroni",
			tags: ["Client", "Web", "Design"],
			badge: "Live",
			year: "2025",
			role: "Designer",
			linkText: "View project",
			image: process.env.PUBLIC_URL + "/gallery/synchroni/thumb.png",
			gallery: [{ src: process.env.PUBLIC_URL + "/gallery/synchroni/thumb.png", device: "desktop" }],
			overlayText:
				"A website redesign for a biometric-data analytics company. I reworked the site to be more user-friendly and visually polished, with a clear presentation of their services and data-security features.",
			tools: ["Figma", "Framer"],
			links: [{ label: "View Website", url: "https://synchroni.co/" }],
		},
		{
			item: "4",
			title: "Stellerian",
			description:
				"Website redesign for a space-technology startup, built in React.",
			size: "wide",
			className: "translunar",
			tags: ["Client", "Web", "Design"],
			badge: "Live",
			year: "2024",
			role: "Designer & Developer",
			linkText: "View project",
			image: process.env.PUBLIC_URL + "/gallery/translunar/thumb.png",
			gallery: [{ src: process.env.PUBLIC_URL + "/gallery/translunar/thumb.png", device: "desktop" }],
			overlayText:
				"A website redesign for a space-technology startup. I designed the new experience in Figma and rebuilt the site with React, focusing on a modern, mission-driven feel.",
			tools: ["React", "Next.js", "Tailwind CSS", "Figma"],
			links: [
				{
					label: "View Mockup",
					url: "https://www.figma.com/proto/XDHQegrglzH5sFqO8dKXkN/Translunar-Website-V1?page-id=0%3A1&node-id=1-3&node-type=canvas&viewport=135%2C366%2C0.1&t=B9wluxMb7xJn4dgB-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3",
				},
				{ label: "View Website", url: "https://www.translunar-esi.com/" },
			],
		},
		{
			item: "5",
			title: "Moo Deng's Adventure",
			description: "A browser game built with vanilla JavaScript.",
			size: "wide",
			className: "moo-deng",
			tags: ["Personal", "Web"],
			badge: "Live",
			year: "2024",
			role: "Developer",
			linkText: "View project",
			image: process.env.PUBLIC_URL + "/gallery/moodeng/thumb.png",
			gallery: [{ src: process.env.PUBLIC_URL + "/gallery/moodeng/thumb.png", device: "desktop" }],
			overlayText:
				"A browser game built with vanilla JavaScript — guide Moo Deng to eat fruit while dodging the enemy, Darth Vader. I started from a Frank's Laboratory tutorial for the core game loop, then designed and extended the rest myself.",
			tools: ["HTML", "CSS", "JavaScript"],
			links: [
				{ label: "View Game", url: "https://moodengsadventure.online/" },
				{
					label: "View Code",
					url: "https://github.com/ghanley04/Moo_Dengs_Adventure",
				},
			],
		},
		// Temporarily hidden — the 3D Parallax project. Uncomment to restore.
		// {
		// 	item: "6",
		// 	title: "3D Parallax Application",
		// 	description:
		// 		"An interactive, responsive 3D parallax web experience.",
		// 	size: "wide",
		// 	className: "parallax",
		// 	tags: ["Personal", "Web"],
		// 	badge: "Live",
		// 	year: "2023",
		// 	role: "Developer",
		// 	linkText: "View project",
		// 	image: process.env.PUBLIC_URL + "/gallery/parallax/thumb.png",
		// 	gallery: [{ src: process.env.PUBLIC_URL + "/gallery/parallax/thumb.png", device: "desktop" }],
		// 	overlayText:
		// 		"An interactive 3D parallax site built to deepen my JavaScript skills, based on a True Coder tutorial. I extended it on my own to be fully responsive across screen sizes.",
		// 	tools: ["HTML", "CSS", "JavaScript"],
		// 	links: [
		// 		{
		// 			label: "View Website",
		// 			url: "https://ghanley04.github.io/3D-Parallax-Effect/",
		// 		},
		// 		{
		// 			label: "View Code",
		// 			url: "https://github.com/ghanley04/3D-Parallax-Effect",
		// 		},
		// 	],
		// },
	],
};

export default INFO;
