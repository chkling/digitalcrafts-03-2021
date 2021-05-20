import React, { Component } from "react";

export default class ClassBased extends Component {
	state = {
		loadingMessage: "loading",
		status: "Code Red",
		object: {},
	};
	render() {
		return (
			<div>
				<h1>Class Based Component</h1>
				<p>{this.state.loadingMessage}</p>
				<button onClick={() => this.setState({ loadingMessage: "finished" })}>
					Finish Loading
				</button>
			</div>
		);
	}
}
