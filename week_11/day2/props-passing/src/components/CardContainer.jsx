import React, { Component } from "react";
import Card from "./Card";
import "./cardContainer.css";

class CardContainer extends Component {
	state = {
		searchCriteria: "",
		pokemonBerries: [],
		pokemonName: "",
		hp: "",
		frontURL: "",
		backURL: "",
	};

	async componentDidMount() {
		const berryUrl = "https://pokeapi.co/api/v2/berry/";
		const fetchData = await fetch(berryUrl, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		const json = await fetchData.json();
		this.setState({
			pokemonBerries: json.results,
		});
	}
	// componentDidMount() {
	// 	this.setState({});
	// }

	searchCriteria = (event) => {
		const search = event.target.value.toLowerCase();

		this.setState({
			searchCriteria: search,
		});
	};

	AddCard = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			[e.target.hp]: e.target.value,
			[e.target.frontURL]: e.target.value,
			[e.target.backURL]: e.target.value,
		});
		console.log(e);
	};

	handleSubmit = (e) => {
		this.AddCard(e);
		e.preventDefault();
		alert("This has been submitted");
	};

	render() {
		const { pokemonData } = this.props;

		const filteredData = pokemonData[0].pokemon.filter((pokemon) =>
			pokemon.name.includes(this.state.searchCriteria)
		)
			? pokemonData[0].pokemon.filter((pokemon) =>
					pokemon.name.includes(this.state.searchCriteria)
			  )
			: pokemonData[0].pokemon;

		return (
			<div className="main-card-container">
				<div>
					<input
						className="search-field"
						onChange={(e) => this.searchCriteria(e)}
						type="text"
						placeholder="Search for a pokemon"
					/>
				</div>
				<form onSubmit={this.handleSubmit}>
					<div>
						<input
							name="pokemonName"
							autoComplete="off"
							className="create-field"
							type="text"
							placeholder="Enter a Name"
							value={this.state.pokemonName}
							onChange={(e) => this.AddCard(e)}
						/>
						<input
							name="hp"
							autoComplete="off"
							className="create-field"
							type="text"
							placeholder="Enter a HP"
							value={this.state.hp}
							onChange={(e) => this.AddCard(e)}
						/>
						<input
							name="frontURL"
							autoComplete="off"
							className="create-field"
							type="text"
							placeholder="Enter front URL"
							value={this.state.frontURL}
							onChange={(e) => this.AddCard(e)}
						/>
						<input
							name="backURL"
							autoComplete="off"
							className="create-field"
							type="text"
							placeholder="Enter back URL"
							value={this.state.backURL}
							onChange={(e) => this.AddCard(e)}
						/>
						<input
							type="submit"
							className="create-button"
							placeholder="Submit"
						/>
					</div>
				</form>
				<div className="card-container">
					{filteredData.map((singlePokemon, index) => (
						<Card key={singlePokemon.name} pokemon={singlePokemon} />
					))}
				</div>
			</div>
		);
	}
}

export default CardContainer;
