import React, { useState } from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	const [activeFilter, setActiveFilter] = useState("All");

	const filters = ["All", ...INFO.projectFilters];

	const visibleProjects =
		activeFilter === "All"
			? INFO.projects
			: INFO.projects.filter((project) =>
					(project.tags || []).includes(activeFilter)
			  );

	return (
		<>
			<div className="h2 header">My Projects</div>

			<div className="project-filters">
				{filters.map((filter) => (
					<button
						key={filter}
						className={`project-filter ${
							activeFilter === filter ? "active" : ""
						}`}
						onClick={() => setActiveFilter(filter)}
					>
						{filter}
					</button>
				))}
			</div>

			<div className="all-projects-container">
				{visibleProjects.map((project) => (
					<div
						className={`all-projects-project size-${
							project.size || "wide"
						}`}
						key={project.item}
					>
						<Project project={project} />
					</div>
				))}
			</div>
		</>
	);
};

export default AllProjects;
