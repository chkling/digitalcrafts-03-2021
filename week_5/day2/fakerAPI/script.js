const main = document.querySelector(".main");

const fetchPerson = async () => {
	let response = await fetch(
		"https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01"
	);
	let json = await response.json();
	console.log(json);
	// container
	const personContainer = document.createElement("div");
	personContainer.className = "person";
	// person name
	const nameOfPerson = document.createElement("h3");
	nameOfPerson.innerHTML =
		json.data[0]["firstname"] + " " + json.data[0]["lastname"];
	// image
	const img = document.createElement("img");
	img.src = json.data[0]["image"];
	// birthday
	const birthday = document.createElement("h3");
	birthday.innerHTML = json.data[0]["birthday"];
	//location
	const location = document.createElement("h3");
	location.innerHTML =
		json.data[0]["address"]["city"] + ", " + json.data[0]["address"]["country"];
	// appending
	personContainer.append(img, nameOfPerson, birthday, location);
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
