import React from "react";


import "./aboutMe.css";

const AboutMe = () => {
	return (
		<>
			<div class="h1 header">About Me</div>
			<div class="flex">
				<div className="#">
					<div className="#">
						<div className="#">
							<img
								src="homepage.jpg"
								alt="about"
								className="homepage-image"
							/>
						</div>
					</div>
				</div>
				<div class="details">details about myself!!</div>
			</div>
		</>
	);
};

export default AboutMe;


