import React from "react";
import {
	SiAdobephotoshop,
	SiJavascript,
	SiTailwindcss,
	SiFramer,
	SiIntellijidea,
	SiExpo,
	SiMongodb,
	SiJira,
	SiNextdotjs,
	SiTypescript,
	SiVercel,
	SiFirebase,
	SiSupabase,
	SiCplusplus,
	SiAutodeskmaya,
	SiUnrealengine,
} from "react-icons/si";
import {
	FaFigma,
	FaReact,
	FaCss3,
	FaHtml5,
	FaNodeJs,
	FaGithub,
	FaBootstrap,
	FaJava,
	FaAws,
	FaDocker,
	FaTerminal,
	FaWordpress,
} from "react-icons/fa6";
import { DiVisualstudio } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { TbBrandReactNative } from "react-icons/tb";

import "./experience.css";

// Claude's sunburst mark. react-icons has no Claude glyph yet, so we draw a
// small radiating "spark" that inherits currentColor like the other icons.
const ClaudeIcon = (props) => (
	<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" {...props}>
		{Array.from({ length: 12 }).map((_, i) => (
			<rect
				key={i}
				x="11.1"
				y="2.2"
				width="1.8"
				height="8.2"
				rx="0.9"
				transform={`rotate(${i * 30} 12 12)`}
			/>
		))}
	</svg>
);

// Skills shown in the "What I've Worked With" grid. Add a skill by dropping
// one line here (name + its react-icons component) — no JSX to copy/paste.
const SKILLS = [
	{ name: "Claude Code", icon: ClaudeIcon },
	{ name: "React", icon: FaReact },
	{ name: "React Native", icon: TbBrandReactNative },
	{ name: "Next.js", icon: SiNextdotjs },
	{ name: "Node.js", icon: FaNodeJs },
	{ name: "MongoDB", icon: SiMongodb },
	{ name: "Firebase", icon: SiFirebase },
	{ name: "Supabase", icon: SiSupabase },
	{ name: "JavaScript", icon: SiJavascript },
	{ name: "TypeScript", icon: SiTypescript },
	{ name: "HTML5", icon: FaHtml5 },
	{ name: "CSS", icon: FaCss3 },
	{ name: "Tailwind", icon: SiTailwindcss },
	{ name: "Bootstrap", icon: FaBootstrap },
	{ name: "Java", icon: FaJava },
	{ name: "C++", icon: SiCplusplus },
	{ name: "C Programming", icon: FaTerminal },
	{ name: "WordPress", icon: FaWordpress },
	{ name: "AWS", icon: FaAws },
	{ name: "Vercel", icon: SiVercel },
	{ name: "Docker Desktop", icon: FaDocker },
	{ name: "Github", icon: FaGithub },
	{ name: "Jira", icon: SiJira },
	{ name: "Figma", icon: FaFigma },
	{ name: "Framer", icon: SiFramer },
	{ name: "Photoshop", icon: SiAdobephotoshop },
	{ name: "Maya", icon: SiAutodeskmaya },
	{ name: "Unreal Engine", icon: SiUnrealengine },
	{ name: "VSCode", icon: VscVscode },
	{ name: "IntelliJ", icon: SiIntellijidea },
	{ name: "Visual Studio", icon: DiVisualstudio },
	{ name: "Expo Go", icon: SiExpo },
];

const Experience = () => {
	return (
		<>
			<div className="h2 header">What I've Worked With</div>
			<div className="icons">
				{SKILLS.map(({ name, icon: Icon }) => (
					<div className="item" key={name}>
						<div className="experience-icon">
							<Icon />
						</div>
						<div className="experience-text">{name}</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Experience;
