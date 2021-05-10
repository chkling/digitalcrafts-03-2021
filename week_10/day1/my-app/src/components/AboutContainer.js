import React, { Component } from "react";
import "../App.css";
import AboutMe from "./AboutMe";

export class AboutContainer extends Component {
	render() {
		return (
			<div className="about-container">
				<h1>Calvin Kling</h1>
				<AboutMe />
			</div>
		);
	}
}

export default AboutContainer;
