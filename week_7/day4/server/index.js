const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3016;
const pool = require("./db.js");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Welcome to the pet store");
});

// CREATE
app.post("/add_pet", async (req, res) => {
	try {
		const { animal, quantity } = req.body;
		const newPet = await pool.query(
			"INSERT INTO pets (animal, quantity) VALUES ($1, $2)",
			[animal, quantity]
		);
		res.json(newPet);
	} catch (err) {
		console.log(err.message);
	}
});

// READ

app.get("/view_pets", async (req, res) => {
	try {
		const listPets = await pool.query("SELECT * from pets ORDER BY pets_id");
		res.json(listPets.rows);
	} catch (err) {
		console.log(err.message);
	}
});

// READ SPECIFIC
app.get("/list_pets/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const listSinglePet = await pool.query(
			"SELECT * from pets WHERE pets_id = ($1)",
			[id]
		);
		res.json(listSinglePet.rows);
	} catch (err) {
		console.log(err.message);
	}
});

// UPDATE
app.put("/update_pets/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { animal, quantity } = req.body;
		const updateSinglePet = await pool.query(
			"UPDATE pets SET (animal, quantity) = ($1, $2) WHERE pets_id = ($3)",
			[animal, quantity, id]
		);
		res.json(updateSinglePet.rows);
	} catch (err) {
		console.log(err.message);
	}
});

// DELETE
app.delete("/remove_pet/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const removePet = await pool.query("DELETE FROM pets WHERE pets_id = $1", [
			id,
		]);
		res.json(removePet);
	} catch (err) {
		console.log(err.message);
	}
});

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
