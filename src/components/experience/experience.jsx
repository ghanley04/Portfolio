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
} from "@fortawesome/free-brands-svg-icons";

// import INFO from "../../../data/user";

import "./styles/experience.css";

const Experience = () => {
	return (
		<>
		<div class = "h1">What I've Worked With</div>
		<div className="icons">
			<div className="flex-container">
				<a href="#" className ="column flex-container" target="_blank" rel="noreferrer">
					<div className="item experience-icon">
						<FontAwesomeIcon
							icon={faReact}
						/>
					</div>
					<div className="experience-text">React</div>
				</a>
			</div>

            <div className="item experience-icon">
				<a href="#" target="_blank" rel="noreferrer">
					<div className="item experience-icon">
						<FontAwesomeIcon
							icon={faFigma}
						/>
					</div>
					<div className="experience-text">Figma</div>
				</a>
			</div>

            <div className="item experience-icon">
				<a href="#" target="_blank" rel="noreferrer">
					<div className="item experience-icon">
						<FontAwesomeIcon
							icon={faCss3}
						/>
					</div>
					<div className="experience-text">CSS</div>
				</a>
			</div>

            <div className="item experience-icon">
				<a href="#" target="_blank" rel="noreferrer">
					<div className="item experience-icon">
						<FontAwesomeIcon
							icon={faBootstrap}
						/>
					</div>
					<div className="experience-text">Bootstrap</div>
				</a>
			</div>
		</div>
		</>
	);
};

export default Experience;
