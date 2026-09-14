import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FaCircleXmark, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import "./styles/project.css";

const Project = ({ project }) => {
	const {
		title,
		description,
		linkText,
		image,
		icon,
		badge,
		year,
		role,
		tags = [],
		tools = [],
		links = [],
		overlayText,
	} = project;

	// Fall back to the single card image if no gallery is provided.
	// Each entry can be a plain string (treated as a desktop/website shot) or
	// an object { src, device } where device is "desktop" or "phone".
	const rawGallery =
		project.gallery && project.gallery.length ? project.gallery : [image];
	const gallery = rawGallery.map((g) =>
		typeof g === "string" ? { src: g, device: "desktop" } : g
	);

	const [overlayVisible, setOverlayVisible] = useState(false);
	const [titleVisible, setTitleVisible] = useState(false);
	const [activeImage, setActiveImage] = useState(0);

	const showOverlay = () => {
		setActiveImage(0);
		setOverlayVisible(true);
		document.body.style.overflow = "hidden"; // lock scroll behind the overlay
	};

	const hideOverlay = () => {
		setOverlayVisible(false);
		document.body.style.overflow = "auto";
	};

	const stopPropagation = (event) => {
		event.stopPropagation();
	};

	const nextImage = (event) => {
		event.stopPropagation();
		setActiveImage((i) => (i + 1) % gallery.length);
	};

	const prevImage = (event) => {
		event.stopPropagation();
		setActiveImage((i) => (i - 1 + gallery.length) % gallery.length);
	};

	// Close on Escape / navigate with arrow keys while the overlay is open.
	useEffect(() => {
		if (!overlayVisible) return;
		const onKey = (e) => {
			if (e.key === "Escape") hideOverlay();
			if (e.key === "ArrowRight")
				setActiveImage((i) => (i + 1) % gallery.length);
			if (e.key === "ArrowLeft")
				setActiveImage((i) => (i - 1 + gallery.length) % gallery.length);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [overlayVisible, gallery.length]);

	const hasGallery = gallery.length > 1;

	return (
		<React.Fragment>
			{/* Project card */}
			<div
				className="project"
				onMouseEnter={() => setTitleVisible(true)}
				onMouseLeave={() => setTitleVisible(false)}
				onClick={showOverlay}
			>
				<div
					className="project-image"
					style={{ backgroundImage: `url(${image})` }}
				>
					{badge && <div className="project-badge">{badge}</div>}
					{titleVisible && (
						<div className="project-container">
							<div className="project-title">{title}</div>
							<div className="project-description">
								{description}
							</div>
							<div className="project-link">
								<span className="project-link-text">
									{linkText}
								</span>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Overlay / case-study view */}
			{overlayVisible && (
				<div className="overlay" onClick={hideOverlay}>
					<div className="overlay-content" onClick={stopPropagation}>
						<div className="overlay-exit" onClick={hideOverlay}>
							<FaCircleXmark className="overlay-exit-button" />
						</div>

						{/* Gallery */}
						<div className="overlay-gallery">
							<div className="overlay-gallery-stage">
								<div
									className={`device-frame device-${gallery[activeImage].device}`}
								>
									{gallery[activeImage].device === "desktop" && (
										<div className="browser-bar">
											<span className="browser-dot dot-red" />
											<span className="browser-dot dot-yellow" />
											<span className="browser-dot dot-green" />
										</div>
									)}
									<div className="device-screen">
										<img
											src={gallery[activeImage].src}
											alt={`${title} screenshot ${
												activeImage + 1
											}`}
										/>
									</div>
								</div>

								{/* Arrows sit on the stage, in the side gutters —
								    never on top of the phone/computer image. */}
								{hasGallery && (
									<button
										className="gallery-nav gallery-prev"
										onClick={prevImage}
										aria-label="Previous image"
									>
										<FaChevronLeft />
									</button>
								)}
								{hasGallery && (
									<button
										className="gallery-nav gallery-next"
										onClick={nextImage}
										aria-label="Next image"
									>
										<FaChevronRight />
									</button>
								)}
							</div>

							{hasGallery && (
								<div className="overlay-thumbs">
									{gallery.map((img, i) => (
										<button
											key={i}
											className={`overlay-thumb thumb-${img.device} ${
												i === activeImage ? "active" : ""
											}`}
											onClick={(e) => {
												e.stopPropagation();
												setActiveImage(i);
											}}
										>
											<img src={img.src} alt="" />
										</button>
									))}
								</div>
							)}
						</div>

						{/* Details */}
						<div className="overlay-container">
							<div className="overlay-heading">
								{icon && (
									<img
										className="overlay-app-icon"
										src={icon}
										alt={`${title} app icon`}
									/>
								)}
								<div className="overlay-title">{title}</div>
							</div>

							<div className="overlay-meta">
								{badge && (
									<span className="overlay-status">
										{badge}
									</span>
								)}
								{tags.map((tag) => (
									<span key={tag} className="overlay-tag">
										{tag}
									</span>
								))}
							</div>

							{(role || year) && (
								<div className="overlay-subline">
									{role}
									{role && year ? " · " : ""}
									{year}
								</div>
							)}

							<div className="overlay-description">
								{overlayText}
							</div>

							{tools.length > 0 && (
								<div className="overlay-tools">
									<div className="overlay-tools-label">
										Tools
									</div>
									<div className="overlay-tools-list">
										{tools.map((tool) => (
											<span
												key={tool}
												className="overlay-tool"
											>
												{tool}
											</span>
										))}
									</div>
								</div>
							)}

							{links.length > 0 && (
								<div className="overlay-links">
									{links.map((l) => (
										<a
											key={l.label}
											href={l.url}
											target="_blank"
											rel="noopener noreferrer"
											className="overlay-link"
										>
											<FontAwesomeIcon icon={faLink} />
											<span className="overlay-link-text">
												{l.label}
											</span>
										</a>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default Project;
