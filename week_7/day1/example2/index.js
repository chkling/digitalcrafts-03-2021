const express = require("express");
const app = express();
const PORT = 3001;
const { readFile } = require("fs");

//middleware
// do something to the request before it gets to the route
app.use(express.json());

app.get("/home", (req, res) => {
	readFile("index.html", "utf8", (err, html) => {
		res.send(html);
	});
});

app.get("/about", (req, res) => {
	readFile("about.html", "utf8", (err, html) => {
		res.send(html);
	});
});

app.get("/faq", (req, res) => {
	readFile("faq.html", "utf8", (err, html) => {
		res.send(html);
	});
});

app.post("/messages/:id", (req, res) => {
	console.log(req);
	// req.params
	// req.body
	// const copy = array[id].push(req.body)
	// const updatedCopy = [...array[id], ...req.body]
	const { logo, name } = req.body;
	const message = `Your name is ${name} logo is ${logo}`;
	res.send(message);
});

// star is the default when trying to go to a page that doesn't exist
app.get("*", (req, res) => {
	readFile("error.html", "utf8", (err, html) => {
		res.send(html);
	});
});

app.listen(PORT, () => {
	console.log(`Your server is being hosted on localhost: ${PORT}`);
});
