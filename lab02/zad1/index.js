const http = require('http');

const PORT = 8080;
const MESSAGE = 'Hello World';

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.write(MESSAGE);
	res.end();
});

server.listen(PORT, () => {
	console.log(`Server is listening on port: ${PORT}`);
});
