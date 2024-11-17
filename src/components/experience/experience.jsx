import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faHtml5,
	faGithub,
	faCss3,
	faBootstrap,
    faReact,
    faFigma,
	faNodeJs, 
	faJsSquare,
	faAdobe, 
	faAdobePhotoshop,
} from "@fortawesome/free-brands-svg-icons";

// import INFO from "../../../data/user";

import "./styles/experience.css";

const Experience = () => {
	return (
		<>
		<div class = "h1 header">What I've Worked With</div>
		<div className="icons">

			<div className="item">
				<a href="#" target="_blank" rel="noreferrer">
					<div className="experience-icon">
						<FontAwesomeIcon
							icon={faReact}
						/>
					</div>
					<div className="experience-text">React</div>
				</a>
			</div>

            <div className="item">
				<a href="#" target="_blank" rel="noreferrer">
					<div className="experience-icon">
						<FontAwesomeIcon
							icon={faFigma}
						/>
					</div>
					<div className="experience-text">Figma</div>
				</a>
			</div>

            <div className="item">
				<a href="#" target="_blank" rel="noreferrer">
					<div className="experience-icon">
						<FontAwesomeIcon
							icon={faCss3}
						/>
					</div>
					<div className="experience-text">CSS</div>
				</a>
			</div>

            <div className="item">
				<a href="#" target="_blank" rel="noreferrer">
					<div className="experience-icon">
						<FontAwesomeIcon
							icon={faBootstrap}
						/>
					</div>
					<div className="experience-text">Bootstrap</div>
				</a>
			</div>

			<div className="item">
				<a href="#" target="_blank" rel="noreferrer">
					<div className="experience-icon">
						<FontAwesomeIcon
							icon={faGithub}
						/>
					</div>
					<div className="experience-text">Github</div>
				</a>
			</div> 

			<div className="item">
				<a href="#" target="_blank" rel="noreferrer">
					<div className="experience-icon">
						<FontAwesomeIcon
							icon={faJsSquare}
						/>
					</div>
					<div className="experience-text">JavaScript</div>
				</a>
			</div> 

			<div className="item">
				<a href="#" target="_blank" rel="noreferrer">
					<div className="experience-icon">
						<FontAwesomeIcon
							icon={faHtml5}
						/>
					</div>
					<div className="experience-text">HTML5</div>
				</a>
			</div>

			<div className="item">
				<a href="#" target="_blank" rel="noreferrer">
					<div className="experience-icon">
						<FontAwesomeIcon
							icon={faNodeJs}
						/>
					</div>
					<div className="experience-text">Node.js</div>
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
