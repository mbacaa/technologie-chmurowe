const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const UserSchema = new mongoose.Schema({
	name: String,
	age: Number,
});

const User = mongoose.model('User', UserSchema);

mongoose
	.connect('mongodb://mongo:27017/express', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Connected to MongoDB');
	});

app.post('/users', bodyParser.json(), (req, res) => {
	const user = new User(req.body);
	user.save().then(() => {
		res.json(user);
	});
});

app.get('/users', (req, res) => {
	User.find().then((users) => {
		res.json(users);
	});
});

const port = 8080;

app.listen(port, () => {
	console.log(`App listening on port: ${port}`);
});
