const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const pool = require("./db.js");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Welcome to your contact list!");
});

app.post("/add_contact", async (req, res) => {
	try {
		const { first_name, last_name, phone_number, email_address } = req.body;
		const newContact = await pool.query(
			"INSERT INTO contacts (first_name, last_name, phone_number, email_address) VALUES ($1, $2, $3, $4)",
			[first_name, last_name, phone_number, email_address]
		);
		res.json(newContact);
	} catch (err) {
		console.log(err.message);
	}
});

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
