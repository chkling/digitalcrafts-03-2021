import React, { Component } from "react";
import google from "./google.png";

export default class Logo extends Component {
	render() {
		return (
			<div>
				<img className="google-pic" src={google} alt="Google"></img>
			</div>
		);
	}
}
