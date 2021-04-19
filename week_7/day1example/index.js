const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
	res.send("Hello");
	// ReadFile("index.html", "utf8", (err, html) => {
	// 	res.send(html);
});

app.listen(PORT, () => {
	console.log(`The server is on ${PORT}`);
});
