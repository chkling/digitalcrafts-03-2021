const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3015;
const pool = require("./db.js");
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
		res.json(newTodoInDB);
	} catch (err) {
		console.log(err.message);
	}
});

// read todo list
app.get("/read_todos", async (req, res) => {
	try {
		const readToDosFromDB = await pool.query("SELECT * from todo");
		res.json(readToDosFromDB);
	} catch (err) {
		console.log(err.message);
	}
});

// read specific todo
app.get("/read_todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		// this looks at the url for whatever you put in :
		console.log(id);
		const readSingleToDoFromID = await pool.query(
			"SELECT * from todo WHERE todo_id = ($1)",
			[id]
		);
		res.json(readSingleToDoFromID);
	} catch (err) {
		console.log(err.message);
	}
});

// update todo list

// delete the todo

app.listen(port, () => {
	console.log(`The server is on ${port}`);
});
