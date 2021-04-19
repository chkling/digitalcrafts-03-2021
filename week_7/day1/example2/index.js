const express = require("express");
const app = express();
const PORT = 3001;
const { readFile } = require("fs");

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

app.post("/messages", (req, res) => {
	const message = "Post a message.";
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
