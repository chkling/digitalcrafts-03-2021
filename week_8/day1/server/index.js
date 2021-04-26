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

//CREATE
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

//REVIEW
app.get("/view_contacts", async (req, res) => {
	try {
		const view = await pool.query(
			"SELECT * from contacts ORDER BY contacts_id"
		);
		res.json(view.rows);
	} catch (err) {
		console.log(err.message);
	}
});

//UPDATE
app.put("/update_contact/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { first_name, last_name, phone_number, email_address } = req.body;
		const updateContact = await pool.query(
			"UPDATE contacts SET (first_name, last_name, phone_number, email_address) = ($1, $2, $3, $4) WHERE contacts_id = ($5)",
			[first_name, last_name, phone_number, email_address, id]
		);
		res.json(updateContact.rows);
	} catch (err) {
		console.log(err.message);
	}
});

//DELETE
app.delete("/delete_contact/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const removeContact = await pool.query(
			"DELETE FROM contacts WHERE contacts_id = $1",
			[id]
		);
		res.json(removeContact);
	} catch (err) {
		console.log(err.message);
	}
});

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
