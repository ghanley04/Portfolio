import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { FaLocationDot, FaLink } from "react-icons/fa6";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";
import Experience from "../components/experience/experience";
import AboutMe from "../components/aboutMe/aboutMe";
import Contact from "../components/contact/contact";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			// if (newLogoSize < oldLogoSize) {
			// 	if (newLogoSize > 40) {
			// 		setLogoSize(newLogoSize);
			// 		setOldLogoSize(newLogoSize);
			// 		setStayLogo(false);
			// 	} else {
			// 		setStayLogo(true);
			// 	}
			// } else {
			// 	setLogoSize(newLogoSize);
			// 	setStayLogo(false);
			// }
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						{/* <div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div> */}
					</div>

					<div className="homepage-container" id="home-home">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side mx-2 flex flex-col items-center justify-center text-center h-full">
								<div className="title homepage-title align-center">
									{INFO.homepage.title}
								</div>
								<div className="subtitle homepage-subtitle">
									<div className="inline-loc text-center justify-center">
										{INFO.homepage.description}
									</div>
									<div className="inline-loc text-center justify-center">
										<FaLocationDot className="#" />
										{INFO.homepage.location}
									</div>
									<div className="resume-link inline-loc text-center justify-center">
										<div className="resume-link-icon">
											<FaLink />
										</div>
										<a href="/pdf/Gillian_Hanley_Resume.pdf" className="resume-link-text" target="_blank" rel="noopener noreferrer">
											View my Resume</a>
									</div>

								</div>
							</div>

							{/* <div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src= "portrait.png"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div> */}
						</div>

						{/* <div className="homepage-socials">
							<a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.stackoverflow}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div> */}

						<div className="container homepage-projects" id="home-projects">
							<AllProjects />
						</div>

						<div className="container homepage-experience" id="home-experience">
							<Experience />
						</div>

						<div className="container homepage-aboutme" id="home-about">
							<AboutMe />
						</div>

						<div className="container homepage-contact" id="home-contact">
							<Contact />
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
