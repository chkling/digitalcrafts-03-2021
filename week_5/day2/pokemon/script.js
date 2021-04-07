// we are going to communicate to an api and display the stuff on the screen
// i need to fetch from an api
// what does fetch require me to write?
// fetch("address that you fetch from")

// let response = fetch("https://pokeapi.co/api/v2/pokemon?&limit=151")
// 	// Thenable object (if you can use .then on it, it's thenable)

// 	// resolution
// 	.then((responseWeGetBack) => responseWeGetBack.json())
// 	.then((data) => console.log(data));

const mainContainer = document.querySelector(".main-container");

const fetchPokemonData = async () => {
	let response = await fetch("https://pokeapi.co/api/v2/pokemon?&limit=151");
	let json = await response.json();
	console.log(json);
	console.log(json.results);
	let counter = 1;
	for (let pokemon of json.results) {
		const pokemonContainer = document.createElement("div");
		pokemonContainer.className = "pokemon";
		const nameOfPokemon = document.createElement("h3");
		nameOfPokemon.innerHTML = pokemon.name;
		const img = document.createElement("img");
		img.src = `https://pokeres.bastionbot.org/images/pokemon/${counter}.png`;
		img.height = "250";
		img.width = "250";
		pokemonContainer.append(nameOfPokemon, img);
		mainContainer.append(pokemonContainer);
		counter += 1;
	}
	return json;

	// to improve the above, you would wrap in a Promise.all()
};

const submit = document.querySelector("button");
submit.addEventListener("click", (e) => fetchPokemonData());

// if promise rejected, then it goes into .catch
// .catch(console.log("woops, error!"));
// console.log(response);
