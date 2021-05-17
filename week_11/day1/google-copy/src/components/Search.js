import React, { Component } from "react";
import search from "./search.png";
import microphone from "./microphone.png";

export default class Search extends Component {
	render() {
		return (
			<div className="search-area">
				<img src={search} alt="search"></img>
				<input className="search-input" type="text"></input>
				<img src={microphone} alt="microphone"></img>
			</div>
		);
	}
}
