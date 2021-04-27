const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3003;
const es6Renderer = require("express-es6-template-engine");
const pool = require("./db.js");

app.engine("html", es6Renderer);
app.set("views", "../templates");
app.set("view engine", "html");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Welcome to your TO DO list.");
});

app.get("/home", (req, res) => {
	res.render("home");
});

app.get("/todolist", async (req, res) => {
	const grabData = await pool.query("SELECT * FROM todo");

	res.render("todolist", {
		locals: {
			todos: grabData.rows,
		},
	});
});

// CREATE
app.post("/add", async (req, res) => {
	try {
		const { task, priority } = req.body;
		const addItem = await pool.query(
			"INSERT INTO todo (task, priority) values ($1, $2)",
			[task, priority]
		);
		res.json(addItem);
	} catch (err) {
		console.log(err.message);
	}
});

// REVIEW
app.get("/review", async (req, res) => {
	try {
		const reviewItems = await pool.query("SELECT * from todo ORDER BY todo_id");
		res.json(reviewItems.rows);
	} catch (err) {
		console.log(err.message);
	}
});

// UPDATE
app.put("/update/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { task, priority } = req.body;
		const updateItem = await pool.query(
			"UPDATE todo SET (task, priority) = ($1, $2) WHERE todo_id = ($3)",
			[task, priority, id]
		);
		res.json(updateItem.rows);
	} catch (err) {
		console.log(err.message);
	}
});

// DELETE
app.delete("/delete/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const removeItem = await pool.query(
			"DELETE FROM todo WHERE todo_id = ($1)",
			[id]
		);
		res.json(removeItem.rows);
	} catch (err) {
		console.log(err.message);
	}
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
