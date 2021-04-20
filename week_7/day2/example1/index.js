const express = require("express");
const app = express();
const PORT = 3011;
// const { readFile } = require("fs");
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Welcome Home");
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
