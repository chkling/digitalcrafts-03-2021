$(document).ready(() => {
	console.log("We are in jquery");
});

const divContainer = document.createElement("div");
console.log(typeof divContainer);

const $jdivContainer = $("<div>");

// create an element on the dom, using jquery
const $header3 = $("<h3>", {
	text: "Joe is Here",
});
// target css on a jquery element
$header3.css("color", "red");

$jdivContainer.append($header3);
console.log($jdivContainer);
$(document.body).append($jdivContainer);

// button.addEventListener('click', () => {})

// $btn.on('click', () => {})

// fetch("url", {})

// PROMISE is a Thenable Object

$.ajax({
	url: "https://pokeapi.co/api/v2/pokemon/ditto1231231231231223",
	//   header: {
	//     Accept: "application/json",
	//   },
})
	.then((res) => {
		console.log(res);
	})
	.catch((valueReturned) => {
		console.error(valueReturned);
	});
