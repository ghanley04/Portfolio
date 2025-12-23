import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiAdobephotoshop, SiJavascript, SiTailwindcss, SiFramer, SiIntellijidea } from "react-icons/si";
import { FaFigma, FaReact, FaCss3, FaHtml5, FaNodeJs, FaGithub, FaBootstrap, FaJava, FaAws, FaDocker, FaTerminal, FaC, FaCirclePlus, FaWordpress } from "react-icons/fa6";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { VscVscode } from "react-icons/vsc";

// import INFO from "../../../data/user";

import "./experience.css";

const Experience = () => {
	return (
		<>
			<div class="h2 header">What I've Worked With</div>
			<div className="icons">

				<div className="item">
					{/* <a href="#" target="_blank" rel="noreferrer"> */}
					<div className="experience-icon">
						<FaAws />
					</div>
					<div className="experience-text">AWS</div>
					{/* </a> */}
				</div>
				<div className="item">
					<div className="experience-icon">
						<FaReact />
					</div>
					<div className="experience-text">React</div>
				</div>

				<div className="item">
					{/* <a href="#" target="_blank" rel="noreferrer"> */}
					<div className="experience-icon">
						<FaNodeJs />
					</div>
					<div className="experience-text">Node.js</div>
					{/* </a> */}
				</div>

				<div className="item">
					{/* <a href="#" target="_blank" rel="noreferrer"> */}
					<div className="experience-icon">
						<SiTailwindcss />
					</div>
					<div className="experience-text">Tailwind</div>
					{/* </a> */}
				</div>
				<div className="item">
					{/* <a href="#" target="_blank" rel="noreferrer"> */}
					<div className="experience-icon">
						<FaTerminal />
					</div>
					<div className="experience-text">C Programming</div>
					{/* </a> */}
				</div>
				<div className="item">
					{/* <a href="#" target="_blank" rel="noreferrer"> */}
					<div className="experience-icon">
						<FaWordpress />
					</div>
					<div className="experience-text">Wordpress</div>
					{/* </a> */}
				</div>
				<div className="item">
					{/* <a href="#" target="_blank" rel="noreferrer"> */}
					<div className="experience-icon">
						<FaDocker />
					</div>
					<div className="experience-text">Docker Desktop</div>
					{/* </a> */}
				</div>
				<div className="item">
					{/* <a href="#" target="_blank" rel="noreferrer"> */}
					<div className="experience-icon">
						<FaBootstrap />
					</div>
					<div className="experience-text">Bootstrap</div>
					{/* </a> */}
				</div>

				<div className="item">
					{/* <a href="#" target="_blank" rel="noreferrer"> */}
					<div className="experience-icon">
						<FaJava />
					</div>
					<div className="experience-text">Java</div>
					{/* </a> */}
				</div>

				<div className="item">
					{/* <a href="#" target="_blank" rel="noreferrer"> */}
					<div className="experience-icon">
						<SiJavascript />
					</div>
					<div className="experience-text">JavaScript</div>
					{/* </a> */}
				</div>

				<div className="item">
					{/* <a href="#" target="_blank" rel="noreferrer"> */}
					<div className="experience-icon">
						<FaHtml5 />
					</div>
					<div className="experience-text">HTML5</div>
					{/* </a> */}
				</div>

				<div className="item">
					{/* <a href="#" target="_blank" rel="noreferrer"> */}
					<div className="experience-icon">
						<FaCss3 />
					</div>
					<div className="experience-text">CSS</div>
					{/* </a> */}
				</div>

				<div className="item">
					{/* <a href="#" target="_blank" rel="noreferrer"> */}
					<div className="experience-icon">
						<FaGithub />
					</div>
					<div className="experience-text">Github</div>
					{/* </a> */}
				</div>

				<div className="item">
					{/* <a href="#" target="_blank" rel="noreferrer"> */}
					<div className="experience-icon">
						<FaFigma />
					</div>
					<div className="experience-text">Figma</div>
					{/* </a> */}
				</div>

				<div className="item">
					{/* <a href="#" target="_blank" rel="noreferrer"> */}
					<div className="experience-icon">
						<SiFramer />
					</div>
					<div className="experience-text">Framer</div>
					{/* </a> */}
				</div>

				<div className="item">
					{/* <a href="#" target="_blank" rel="noreferrer"> */}
					<div className="experience-icon">
						<VscVscode />
					</div>
					<div className="experience-text">VSCode</div>
					{/* </a> */}
				</div>

				<div className="item">
					{/* <a href="#" target="_blank" rel="noreferrer"> */}
					<div className="experience-icon">
						<SiIntellijidea />
					</div>
					<div className="experience-text">IntelliJ</div>
					{/* </a> */}
				</div>

				<div className="item">
					{/* <a href="#" target="_blank" rel="noreferrer"> */}
					<div className="experience-icon">
						<SiAdobephotoshop />
					</div>
					<div className="experience-text">Photoshop</div>
					{/* </a> */}
				</div>

				{/* <div className="item">
				<a href="#" target="_blank" rel="noreferrer">
					<div className="experience-icon">
						<FontAwesomeIcon
							icon={faAdobe}
						/>
					</div>
					<div className="experience-text">Adobe Products</div>
				</a>
			</div> */}

			</div >
		</>
	);
};

export default Experience;
