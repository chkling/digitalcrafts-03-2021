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
	meal.innerText = mealTotal.toFixed(2);
	// tip history
	const addTip = document.createElement("li");
	addTip.append(addedTip);
	const tips = document.querySelector(".tipHistory");
	tips.append(addTip);

	// form validation
	const form = document.querySelector("form");

	const validateNumber = (num) => {
		myRegex = /[0-9]/;
		return myRegex.test(num);
	};

	form.addEventListener("submit", (event) => {
		const bill = document.querySelector("#bill");

		if (!validateNumber(bill.value)) {
			event.preventDefault();
			alert("Please enter a valid number.");
		}
	});
}
