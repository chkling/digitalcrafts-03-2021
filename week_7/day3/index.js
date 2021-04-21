const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3015;
const pool = require("./db.js");
console.log(port);
// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Welcome to the node server");
});

app.listen(port, () => {
	console.log(`The server is on ${port}`);
});
