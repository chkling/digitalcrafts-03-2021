const express = require("express");
const app = express();
const PORT = 3008;
const { readFile } = require("fs");
app.use(express.json());

app.get("/", (req, res) => {
	readFile(".index.html", "utf8", (err, html) => {
		res.send(html);
	});
});

app.get("/store", (req, res) => {
	readFile("store.html", "utf8", (err, html) => {
		res.send(html);
	});
});

app.get("/contact", (req, res) => {
	readFile("contact.html", "utf8", (err, html) => {
		res.send(html);
	});
});

app.listen(PORT, () => {
	console.log(`Running server on ${PORT}`);
});
