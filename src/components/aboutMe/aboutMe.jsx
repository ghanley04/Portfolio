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
					<div class="details">I am a student in Web Programming and Design at Purdue University,
						also studying Computer Science and Entrepreneurship. I am excited about both front and
						back-end development, and I look forward to creating applications in order to solve
						real-world problems. My favorite projects have been with startup companies, as you can 
						find above, and expanding my knowledge in web development and computer science. I also 
						love travelling with my family, all things arts and crafts,
						and a good frisbee disc.</div>
				</div>
			</div>
		</>
	);
};

export default AboutMe;


