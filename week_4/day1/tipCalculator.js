function goodTip(num1) {
	let tip = num1 * 0.2;
	return console.log(
		`For good service on a bill of $${num1} the tip is ${tip}.`
	);
}

function fairTip(num1) {
	let tip = num1 * 0.15;
	return console.log(
		`For fair service on a bill of $${num1} the tip is ${tip}.`
	);
}

function badTip(num1) {
	let tip = num1 * 0.1;
	return console.log(
		`For bad service on a bill of $${num1} the tip is ${tip}.`
	);
}

function tipCalculator(service, num1) {
	if (service == "good") {
		return goodTip(num1);
	} else if (service == "fair") {
		return fairTip(num1);
	} else if (service == "bad") {
		return badTip(num1);
	}
}

tipCalculator("good", 100);
tipCalculator("fair", 100);
tipCalculator("bad", 100);
