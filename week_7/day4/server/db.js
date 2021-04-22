const Pool = require("pg").Pool;

const pool = new Pool({
	user: "kling",
	password: "",
	host: "localhost",
	port: 5432,
	database: "petstore",
});

module.exports = pool;
