import React, { Component } from "react";
import Card from "./Card.jsx";
import "./cardContainer.css";

export default class CardContainer extends Component {
	state = {
		searchCriteria: "",
	};

	searchCriteria = (event) => {
		this.setState({
			searchCriteria: event.target.value,
		});
	};

	render() {
		const { pokemonData } = this.props;
		const filteredData = pokemonData[0].pokemon.filter((pokemon) =>
			pokemon.name.includes(this.state.searchCriteria)
		);
		console.log(filteredData);
		return (
			<div>
				<h1>Pokemon Card Container</h1>
				<input
					onChange={(e) => this.searchCriteria(e)}
					type="text"
					placeholder="Search for a pokemon"
				/>
				<button>Submit</button>
				<div className="card-container">
					{filteredData.map((singlePokemon, index) => (
						<Card key={singlePokemon.name} pokemon={singlePokemon} />
					))}
				</div>
			</div>
		);
	}
}
