import React, { Component } from "react";
import "../App.css";
import calvin from "./images/calvin.JPEG";

export class AboutMe extends Component {
	render() {
		return (
			<div className="about-me">
				<img className="calvin" src={calvin} alt="Calvin" />
				<div>
					<p className="p-1">
						I'm currently living in the Atlanta, Georgia area and from
						Minnesota. I received my Bachelor of Arts in Communication Arts from
						the University of Wisconsin – Madison with a Certificate in
						Entrepreneurship.
					</p>
					<br></br>
					<p className="p-2">
						I have worked in staffing and life insurance since graduating
						college. Some interests include staying active whether in a gym or
						outdoors, gaming and traveling when possible.
					</p>
				</div>
			</div>
		);
	}
}

export default AboutMe;
