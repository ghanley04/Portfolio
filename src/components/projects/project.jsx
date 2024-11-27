import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { image, title, description, linkText, link, overlayText, overlayTools } = props;

	// State to manage the overlay visibility
	const [overlayVisible, setOverlayVisible] = useState(false);

	// Function to show the overlay
	const showOverlay = () => {
		setOverlayVisible(true); // Show the overlay
		document.body.style.overflow = 'hidden'; // Disable scroll when overlay is active
	};

	// Function to hide the overlay
	const hideOverlay = () => {
		setOverlayVisible(false); // Hide the overlay
		document.body.style.overflow = 'auto'; // Re-enable scroll when overlay is hidden
	};

	// Prevent click event from propagating when clicking inside the overlay content
	const stopPropagation = (event) => {
		event.stopPropagation();
		event.preventDefault();
	};

	// Render overlay if visible
	let overlay = null;
	if (overlayVisible) {
		overlay = (
			<div className="overlay" onClick={hideOverlay}>
				<div className="overlay-content" onClick={stopPropagation}>
					<div className="overlay-image">
						<img src={image} alt="image" />
					</div>

					<div className="overlay-container">
						<div className="overlay-title">{title}</div>
						<div className="overlay-description">{overlayText}</div>
						<div className="overlay-description">Tools Used: {overlayTools}</div>
						<div className="overlay-link">
							<div className="overlay-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="overlay-link-text">{linkText}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<React.Fragment>
			{/* Project Content */}
			<div className="h-auto">
				<Link>
					<div className="project" onClick={showOverlay}>
						<div className="project-image">
							<img src={image} alt="image" />
						</div>

						<div className="project-container">
							<div className="project-title">{title}</div>
							<div className="project-description">{description}</div>
							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>
								<div className="project-link-text">{linkText}</div>
							</div>
						</div>
					</div>
				</Link>
			</div>

			{/* Render overlay if it is visible */}
			{overlay}
		</React.Fragment>
	);
};

export default Project;

