import React, { Component } from "react";
import profile from "./profile.jpeg";
import dots from "./dots.jpeg";

export default class Navbar extends Component {
	render() {
		return (
			<div className="main-nav">
				<div className="nav1">
					<a href="index.html"> About</a>
					<a href="index.html"> Store</a>
				</div>
				<div className="nav2">
					<a href="index.html"> Gmail</a>
					<a href="index.html"> Images</a>
					<img className="dots" src={dots} alt="dots"></img>
					<img className="prof-pic" src={profile} alt="profile"></img>
				</div>
			</div>
		);
	}
}
