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
		const readToDosFromDB = await pool.query(
			"SELECT * from todo ORDER BY todo_id"
		);
		res.json(readToDosFromDB.rows);
	} catch (err) {
		console.log(err.message);
	}
});

// read specific todo
app.get("/read_todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		// this looks at the url for whatever you put in :

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
app.put("/update_todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { description } = req.body;
		const updateToDoInDB = await pool.query(
			"UPDATE todo SET description = $1 WHERE todo_id = $2",
			[description, id]
		);
		res.json(updateToDoInDB);
	} catch (err) {
		console.log(err.message);
	}
});

app.delete("/delete_todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { description } = req.body;
		const deleteToDoInDB = await pool.query(
			"DELETE FROM todo WHERE todo_id = $1",
			[id]
		);
		res.json(deleteToDoInDB);
	} catch (err) {
		console.log(err.message);
	}
});

// delete the todos

app.listen(port, () => {
	console.log(`The server is on ${port}`);
});
