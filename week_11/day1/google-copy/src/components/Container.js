import React, { Component } from "react";
import Logo from "./Logo.js";
import Search from "./Search.js";
import Buttons from "./Buttons.js";

export default class Container extends Component {
	render() {
		return (
			<div className="main-container">
				<Logo />
				<Search />
				<Buttons />
			</div>
		);
	}
}
