const main = document.querySelector(".main");

const fetchPerson = async () => {
	let response = await fetch("https://randomuser.me/api/");
	let json = await response.json();
	console.log(json);
	// container
	const personContainer = document.createElement("div");
	personContainer.className = "person";
	// person name
	const nameOfPerson = document.createElement("h3");
	nameOfPerson.className = "person-name";
	nameOfPerson.innerHTML =
		json.results[0]["name"]["first"] + " " + json.results[0]["name"]["last"];
	// image
	const img = document.createElement("img");
	img.src = json.results[0]["picture"]["large"];
	// birthday
	const birthday = document.createElement("h3");
	birthday.innerHTML = json.results[0]["dob"]["age"];
	//location
	const state = document.createElement("h3");
	state.innerHTML = json.results[0]["location"]["state"] + ",";
	const country = document.createElement("h3");
	country.innerHTML = json.results[0]["location"]["country"];
	// appending
	personContainer.append(img, nameOfPerson, birthday, state, country);
	main.append(personContainer);
};

const fetchAnimals = async () => {
	let response = await fetch(
		"https://fakerapi.it/api/v1/images?_quantity=1&_type=kittens&_height=300"
	);
	let json = await response.json();
	console.log(json);
	// container
	const animalContainer = document.createElement("div");
	animalContainer.className = "animal";
	// animal name
	const nameOfAnimal = document.createElement("h3");
	nameOfAnimal.className = "animal-name";
	nameOfAnimal.innerHTML = json.data[0]["title"];
	// image
	const img = document.createElement("img");
	img.src = json.data[0]["url"];
	// appending
	animalContainer.append(img, nameOfAnimal);
	main.append(animalContainer);
};

const subPeople = document.querySelector(".people-button");
subPeople.addEventListener("click", (e) => {
	e.preventDefault();
	fetchPerson();
});

const subAnimal = document.querySelector(".animal-button");
subAnimal.addEventListener("click", (e) => {
	e.preventDefault();
	fetchAnimals();
});
