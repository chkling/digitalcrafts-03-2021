import React, { Component } from "react";
import leaf from "./leaf.png";

export default class Footer extends Component {
	render() {
		return (
			<div className="main-footer">
				<div className="footer1">
					<a href="index.html"> Advertising</a>
					<a href="index.html"> Business</a>
					<a href="index.html"> How Search works</a>
				</div>
				<div className="footer2">
					<img src={leaf}></img>
					<a href="index.html"> Carbon neutral since 2007</a>
				</div>
				<div className="footer3">
					<a href="index.html"> Privacy</a>
					<a href="index.html"> Terms</a>
					<a href="index.html"> Settings</a>
				</div>
			</div>
		);
	}
}
