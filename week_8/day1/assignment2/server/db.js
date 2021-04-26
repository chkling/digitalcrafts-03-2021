const Pool = require("pg").Pool;

const pool = new Pool({
	user: "kling",
	password: "",
	host: "localhost",
	port: 5432,
	database: "todolist2",
});

module.exports = pool;
