import React, { Component } from "react";

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
					<a href="index.html"> Settings</a>
					<a href="index.html"> Profile</a>
				</div>
			</div>
		);
	}
}
