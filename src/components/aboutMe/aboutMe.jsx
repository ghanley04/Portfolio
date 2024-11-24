import React from "react";


import "./aboutMe.css";

const AboutMe = () => {
	return (
		<>
			<div class="h1 header">About Me</div>
			<div class="flex">
				<div className="left-side">
					<div className="image-container">
						<img
							src="family.jpg"
							alt="about"
							className="about-image"
						/>
					</div>
				</div>
				<div class="right-side">
					<div class="details">I am a student in Web Programming and Design at Purdue University,
						also studying Computer Science and Data Science. I am excited about both front and
						back-end development, and I look forward to creating applications in order to solve
						real-world problems. I also love travelling with my family, making stickers of my
						two cats, crocheting peanuts characters, and a good frisbee disc.</div>
				</div>
			</div>
		</>
	);
};

export default AboutMe;


