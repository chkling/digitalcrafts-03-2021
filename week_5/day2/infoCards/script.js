const main = document.querySelector(".main");

const fetchPerson = async () => {
	let response = await fetch(
		"https://fakerapi.it/api/v1/persons?_quantity=30&_gender=male&_birthday_start=2005-01-01"
	);
	let json = await response.json();
	console.log(json);
	console.log(json.data);
	let counter = 1;
	for (let people of json.data) {
		// container
		const personContainer = document.createElement("div");
		personContainer.className = "person";
		// person name
		const nameOfPerson = document.createElement("h3");
		nameOfPerson.className = "person-name";
		nameOfPerson.innerHTML = people["firstname"] + " " + people["lastname"];
		// image
		const img = document.createElement("img");
		img.height = "170";
		img.width = "170";
		img.src = `http://placeimg.com/640/48${counter}/people`;
		//location
		const city = document.createElement("h3");
		city.innerHTML = people["address"]["city"] + ",";
		const country = document.createElement("h3");
		country.innerHTML = people["address"]["country"];
		// appending
		personContainer.append(img, nameOfPerson, city, country);
		main.append(personContainer);
		counter += 1;
	}
	return json;
};

const fetchAnimals = async () => {
	let response = await fetch(
		"https://fakerapi.it/api/v1/images?_quantity=30&_type=kittens&_height=300"
	);
	let json = await response.json();
	console.log(json);
	counter = 1;
	for (let cat of json.data) {
		console.log(cat);
		// container
		const animalContainer = document.createElement("div");
		animalContainer.className = "animal";
		// animal name
		const nameOfAnimal = document.createElement("h3");
		nameOfAnimal.className = "animal-name";
		nameOfAnimal.innerHTML = cat["title"];
		// image
		const img = document.createElement("img");
		img.height = "150";
		img.width = "170";
		img.src = `https://placekitten.com/600/30${counter}`;
		// appending
		animalContainer.append(img, nameOfAnimal);
		main.append(animalContainer);
		counter += 1;
	}
	return json;
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
