import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FaCircleXmark } from "react-icons/fa6";


import "./styles/project.css";

const Project = (props) => {
	const { item, image, title, description, linkText, link, overlayText, overlayTools, overlayLinkText, overlayLinkText2, link2 } = props;

	// State to manage the overlay visibility
	const [overlayVisible, setOverlayVisible] = useState(false);
	const [titleVisible, setTitleVisible] = useState(false);

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


	const showTitle = () => {
		setTitleVisible(true); // Show the overlay
	};

	// Function to hide the overlay
	const hideTitle = () => {
		setTitleVisible(false); // Hide the overlay
	};

	// Prevent click event from propagating when clicking inside the overlay content
	const stopPropagation = (event) => {
		event.stopPropagation();
		event.preventDefault();
	};
	console.log("item: ");
	console.log(item);
	// Opening new link 
	const handleLinkClick = (e) => {
		e.preventDefault();
		window.open(link, '_blank', 'noopener noreferrer');
	};
	const handleLinkClick2 = (e) => {
		e.preventDefault();
		window.open(link2, '_blank', 'noopener noreferrer');
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
						<div className="overlay-exit" onClick={hideOverlay}>
							<FaCircleXmark className="overlay-exit-button" />
						</div>
						<div className="overlay-title">{title}</div>
						<div className="overlay-description">{overlayText}</div>
						<div className="overlay-description"><b>Tools Used: </b>{overlayTools}</div>
						<div className="overlay-link">
							<div className="overlay-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<a href="#" onClick={handleLinkClick} className="overlay-link-text">
								{overlayLinkText}
							</a>
						</div>

						{(item !== "3" && item !== "2" && item !== "1") && (
							<div className="overlay-link">

								{/* {item === "4" ? (
									<div className="overlay-link">
										<div className="overlay-link-icon">
											<FontAwesomeIcon icon={faLink} />
										</div>
										<p className="overlay-link-text">
											{overlayLinkText2}
										</p>
									</div>) : ( */}
								{/* // Default link when item is not "4" */}
								<div className="overlay-link">
									<div className="overlay-link-icon">
										<FontAwesomeIcon icon={faLink} />
									</div>
									<a href="#" onClick={handleLinkClick2} className="overlay-link-text">
										{overlayLinkText2}
									</a>
								</div>
								{/* )} */}

							</div>
						)}
					</div>
				</div>
			</div>
		);
	}

	return (
		<React.Fragment>
			{/* Project Content */}
			<Link>
				<div className="project" onMouseEnter={showTitle} onMouseLeave={hideTitle} onClick={showOverlay}>
					<div className="project-image"
					  style={{ backgroundImage: `url(${image})` }}>
						{/* <img src={image} alt="image" /> */}
						{titleVisible && (
							<div className="project-container">
								<div className="project-title">{title}</div>
								<div className="project-description">{description}</div>
								<div className="project-link">
									<a href="#" /*onClick={handleLinkClick}*/ className="project-link-text">
										{linkText}
									</a>
								</div>
							</div>
						)}
					</div>
				</div>
			</Link>

			{/* Render overlay if it is visible */}
			{overlay}
		</React.Fragment>
	);
};

export default Project;

