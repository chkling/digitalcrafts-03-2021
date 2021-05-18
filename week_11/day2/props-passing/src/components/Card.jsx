import React, { Component } from "react";

export default class Card extends Component {
	render() {
		const { hp, id, name } = this.props.pokemon;
		return;
		<div>
			<p>{name}</p>
			<p>{id}</p>
			<p>{hp}</p>
		</div>;
	}
}
