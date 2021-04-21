const http = require("http");

const hostname = "127.0.0.1";
const PORT = 3011;

const express = require("express");
const app = express();

const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

const server = http.createServer(app);
const db = require("./db");

app.get("/", (req, res) => {
	res.render("home");
});

// app.get("/friends", (req, res) => {
// 	res.render("friend");
// });

app.get("/friends/:handle", (req, res) => {
	const { handle } = req.params;
	const friend = db.find((f) => f.handle === handle);

	if (friend) {
		let htmlData = ``;
		htmlData += `<h1>${friend.name}</h1>`;
		htmlData += `<h3>${friend.handle}</h1>`;
		htmlData += `<h3>${friend.skill}</h1>`;
		res.send(htmlData);
	} else {
		res.status(404).send(`no friend with handle ${handle}`);
	}
});

app.get("/about", (req, res) => {
	res.send("About this website");
});

app.get("/team", (req, res) => {
	res.send("Meet the Team");
});

app.get("/faq", (req, res) => {
	res.send("Q&A");
});

app.post("/faq", (req, res) => {
	const { question, answer } = req.body;
	const message = `Your question is ${question} and answer is ${answer}`;
	res.send(message);
});

app.get("*", (req, res) => {
	res.send("Page does not exist");
});

app.listen(PORT, () => {
	console.log(`The server is on port ${PORT}`);
});
