console.log("Hello");

const http = require("http");
const address = "127.0.0.1";
const PORT = 3002;

// const server = http.createServer((request,response))
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");
	res.end("Goodbye");
});

server.listen(PORT, address, () => {
	console.log(`server is on http://${address}:${PORT}`);
});
