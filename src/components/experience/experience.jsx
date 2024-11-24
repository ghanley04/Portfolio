import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiAdobephotoshop, SiJavascript, SiTailwindcss  } from "react-icons/si";
import { FaFigma, FaReact, FaCss3, FaHtml5, FaNodeJs, FaGithub, FaBootstrap } from "react-icons/fa6";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// import INFO from "../../../data/user";

import "./styles/experience.css";

const Experience = () => {
	return (
		<>
			<div class="h2 header">What I've Worked With</div>
			<div className="icons">

				<div className="item">
					<a href="#" target="_blank" rel="noreferrer">
						<div className="experience-icon">
							<FaReact />
						</div>
						<div className="experience-text">React</div>
					</a>
				</div>

				<div className="item">
					<a href="#" target="_blank" rel="noreferrer">
						<div className="experience-icon">
							<FaFigma />
						</div>
						<div className="experience-text">Figma</div>
					</a>
				</div>

				<div className="item">
					<a href="#" target="_blank" rel="noreferrer">
						<div className="experience-icon">
							<FaCss3 />
						</div>
						<div className="experience-text">CSS</div>
					</a>
				</div>

				<div className="item">
					<a href="#" target="_blank" rel="noreferrer">
						<div className="experience-icon">
							<SiTailwindcss />
						</div>
						<div className="experience-text">Tailwind</div>
					</a>
				</div>

				<div className="item">
					<a href="#" target="_blank" rel="noreferrer">
						<div className="experience-icon">
							<FaBootstrap />
						</div>
						<div className="experience-text">Bootstrap</div>
					</a>
				</div>

				<div className="item">
					<a href="#" target="_blank" rel="noreferrer">
						<div className="experience-icon">
							<FaGithub />
						</div>
						<div className="experience-text">Github</div>
					</a>
				</div>

				<div className="item">
					<a href="#" target="_blank" rel="noreferrer">
						<div className="experience-icon">
							<SiJavascript />
						</div>
						<div className="experience-text">JavaScript</div>
					</a>
				</div>

				<div className="item">
					<a href="#" target="_blank" rel="noreferrer">
						<div className="experience-icon">
							<FaHtml5 />
						</div>
						<div className="experience-text">HTML5</div>
					</a>
				</div>

				<div className="item">
					<a href="#" target="_blank" rel="noreferrer">
						<div className="experience-icon">
							<FaNodeJs />
						</div>
						<div className="experience-text">Node.js</div>
					</a>
				</div>

				<div className="item">
					<a href="#" target="_blank" rel="noreferrer">
						<div className="experience-icon">
							<SiAdobephotoshop />
						</div>
						<div className="experience-text">Photoshop</div>
					</a>
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

			</div>
		</>
	);
};

export default Experience;
