import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

function scrollToSection(sectionId) {
	const element = document.getElementById(sectionId);
	if (element) {
		element.scrollIntoView({
			behavior: 'smooth'
		});
	}
}

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a onClick={() => scrollToSection('home-home')}>Home</a>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a onClick={() => scrollToSection('home-projects')}>Projects</a>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a onClick={() => scrollToSection('home-about')}> About</a>
						</li>
						<li
							className={
								active === "contact"
									? "nav-item active"
									: "nav-item"
							}
						>
							<a onClick={() => scrollToSection('home-contact')}>Contact</a>
						</li>
					</ul>
			</div>
		</nav>
			</div >
		</React.Fragment >
	);
};

export default NavBar;
