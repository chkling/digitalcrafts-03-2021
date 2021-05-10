import React, { Component } from "react";
import "../App.css";

export class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar">
				<ul>
					<a href="about.html">Resume</a>
					<a href="about.html">LinkedIn</a>
					<a href="about.html">Projects</a>
					<a href="about.html">Github</a>
					<a href="about.html">Education</a>
				</ul>
			</div>
		);
	}
}

export default Sidebar;
