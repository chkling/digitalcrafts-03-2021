const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3333;
// const es6Renderer = require("express-es6-template-engine");
// const pool = require("./db.js");

app.engine("html", es6Renderer);
app.set("views", "../client");
app.set("view engine", "html");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.render("home");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
