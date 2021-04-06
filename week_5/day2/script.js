// we are going to communicate to an api and display the stuff on the screen
// i need to fetch from an api
// what does fetch require me to write?
// fetch("address that you fetch from")

// let response = fetch("https://pokeapi.co/api/v2/pokemon?&limit=151")
// 	// Thenable object (if you can use .then on it, it's thenable)

// 	// resolution
// 	.then((responseWeGetBack) => responseWeGetBack.json())
// 	.then((data) => console.log(data));

const fetchPokemonData = async () => {
	let response = await fetch("https://pokeapi.co/api/v2/pokemon?&limit=151");
	let json = await response.json();

	const nameOfPokemon = document.createElement("h3");
	console.log(nameOfPokemon);
	return json;

	// to improve the above, you would wrap in a Promise.all()
};

// if promise rejected, then it goes into .catch
// .catch(console.log("woops, error!"));
// console.log(response);
