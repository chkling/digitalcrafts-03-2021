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
app.post("/pets", async (req, res) => {
	try {
		const { animal } = req.body;
		const newPet = await pool.query("INSERT INTO pets (animal) VALUES ($1)", [
			animal,
		]);
		res.json(newPet);
	} catch (err) {
		console.log(err.message);
	}
});

// READ

app.get("/list_pets", async (req, res) => {
	try {
		const listPets = await pool.query("SELECT * from pets ORDER BY pets_id");
		res.json(listPets);
	} catch (err) {
		console.log(err.message);
	}
});

// UPDATE

// DELETE

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
