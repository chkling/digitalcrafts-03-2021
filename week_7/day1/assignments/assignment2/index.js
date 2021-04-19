const express = require("express");
const app = express();
const PORT = 3006;

app.get("/", (req, res) => {
	ReadFile("index.html", "utf8", (err, html) => {
		res.send(html);
	});
});

app.get("/store", (req, res) => {
	ReadFile("store.html", "utf8", (err, html) => {
		res.send(html);
	});

	app.get("/contact", (req, res) => {
		ReadFile("contact.html", "utf8", (err, html) => {
			res.send(html);
		});
	});

	app.listen(PORT, () => {
		console.log(`Running server on ${PORT}`);
	});
});
