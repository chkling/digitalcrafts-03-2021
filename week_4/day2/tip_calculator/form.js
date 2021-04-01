function tipCalculator() {
	// taking inputs
	const mealCost = Number(document.querySelector(".costOfMeal").value);
	const tipInput = Number(document.querySelector(".tip").value);
	// tip calculations
	const tipPercent = tipInput / 100;
	const tipAmount = mealCost * tipPercent;
	const addedTip = tipAmount.toFixed(2);
	// adding to meal
	const mealTotal = mealCost + tipAmount;
	const meal = document.querySelector(".total");
	if (!isNaN(mealTotal)) {
		meal.innerText = mealTotal.toFixed(2);
	}
	// tip history
	const addTip = document.createElement("li");
	const tips = document.querySelector(".tipHistory");
	if (!isNaN(addedTip)) {
		addTip.append(addedTip);
		tips.append(addTip);
	}
}

// form validation
const form = document.querySelector("form");

const validateNumber = (num) => {
	myRegex = /[0-9]/g;
	return myRegex.test(num);
};

form.addEventListener("submit", (event) => {
	const bill = document.querySelector("#bill");
	const bill2 = document.querySelector("#bill2");

	if (!validateNumber(bill.value) || !validateNumber(bill2.value)) {
		event.preventDefault();
		alert("Please enter a valid number.");
	}
});

// const button = document.querySelector(".button");

// button.addEventListener("click", function (e) {
// 	tipCalculator();
// });
