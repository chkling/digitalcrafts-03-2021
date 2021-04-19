const express = require("express");
const app = express();
const path = require("path");
const PORT = 3008;
const { readFile } = require("fs");
app.use(express.json());

app.get("/index", (req, res) => {
	readFile("index.html", "utf8", (err, html) => {
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

app.get("*", (req, res) => {
	readFile("error.html", "utf8", (err, html) => {
		res.send(html);
	});
});

app.listen(PORT, () => {
	console.log(`Your server is being hosted on localhost: ${PORT}`);
});

// app.use(express.static(__dirname + "/public"));
{
	/* <link rel="stylesheet" type="text/css" href="public/css/style.css" />; */
}
app.use(express.static(__dirname + "/public"));
