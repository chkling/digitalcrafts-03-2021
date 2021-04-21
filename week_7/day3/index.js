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

// routes we define for our node server

// CRUD

// create todo list
app.post("/todo", async (req, res) => {
	try {
		const { description } = req.body;
		const newTodoInDB = await pool.query(
			"INSERT INTO todo (description) VALUES($1)",
			[description]
		);
		console.log(req.body);
		res.json(newTodoInDB);
	} catch (err) {
		console.log(err.message);
	}
});

// read todo list

// update todo list

// delete the todo

app.listen(port, () => {
	console.log(`The server is on ${port}`);
});
