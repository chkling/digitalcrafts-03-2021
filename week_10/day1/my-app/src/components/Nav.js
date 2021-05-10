import React, { Component } from "react";
import "../App.css";

export class Nav extends Component {
	render() {
		return (
			<header className="nav">
				<a href="index.html">Main</a>
				<a href="about.html">About</a>
				<a href="contact.html">Contact</a>
			</header>
		);
	}
}

export default Nav;
