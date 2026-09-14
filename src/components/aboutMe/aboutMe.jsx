import React from "react";


import "./aboutMe.css";

const AboutMe = () => {
	return (
		<>
			<div class="h2 header">About Me</div>
			<div class="flex">
				<div className="left-side">
					<div className="image-container">
						<img
							src="portrait.png"
							alt="about"
							className="about-image"
						/>
					</div>
				</div>
				<div class="right-side">
					<div class="details">I'm a senior studying Web Programming &amp; Design at Purdue
						University, where I'm also studying Computer Science and Entrepreneurship. I work
						across the full stack and love turning ideas into applications that solve real
						problems — my favorite work has been with startups, a few of which you'll find above.
						I'm currently seeking full-time opportunities. Off the screen, you'll catch me
						travelling with my family, deep in an arts-and-crafts project, or out throwing a
						frisbee.</div>
				</div>
			</div>
		</>
	);
};

export default AboutMe;


