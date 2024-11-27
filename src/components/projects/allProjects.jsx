import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<><div className='h2 header'>My Projects</div>
			<div className="all-projects-container">
				{INFO.projects.map((project, index) => (
					<div className="all-projects-project" key={index}>
						<Project
							image={project.image}
							title={project.title}
							description={project.description}
							linkText={project.linkText}
							link={project.link}
							overlayText={project.overlayText}
							overlayTools={project.overlayTools}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default AllProjects;
