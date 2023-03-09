const express = require('express');
const app = express();

app.get('/', (req, res) => {
	const now = new Date();
	res.json({
		message: 'Hello world!',
		date: now.toISOString(),
	});
});

const port = 8080;
app.listen(port, () => {
	console.log(`App listening on port: ${port}`);
});
