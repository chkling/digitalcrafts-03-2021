const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3333;
const es6Renderer = require("express-es6-template-engine");
const { doctor, patient, appointment } = require("../models");

app.engine("html", es6Renderer);
app.set("views", "../client");
app.set("view engine", "html");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/doctors", async (req, res) => {
	const doctorsFromDB = await doctor.findAll();
	console.log(res.json(doctorsFromDB));
	res.render("doctors", {
		locals: {
			doctors: doctorsFromDB,
		},
	});
});

// app.post("/doctors", async (req, res) => {
// 	const { name, email } = req.body;
// 	const newDoctor = await doctor.create({
// 		name,
// 		email,
// 	});

// 	res.json({
// 		id: newDoctor.id,
// 	});
// });

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
