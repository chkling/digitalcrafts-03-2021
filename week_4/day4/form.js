const form = document.querySelector("form");

const validateName = (name) => {
	// console.log("Hi");
	myRegex = /[A-Za-z]+/;
	return myRegex.test(name);
};

form.addEventListener("submit", (event) => {
	const textInput = document.querySelector("#textInput");
	console.log(textInput.value);

	if (!validateName(textInput.value)) {
		event.preventDefault();
		alert("Please enter a valid name without any numbers.");
	}
});
const calvin = 1;
console.log(validateName(calvin));
