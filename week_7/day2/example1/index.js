const express = require("express");
const app = express();
const PORT = 3011;
const { readFile } = require("fs");
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello");
});

app.listen(PORT, () => {
	console.log(`The server is on prt ${PORT}`);
});
