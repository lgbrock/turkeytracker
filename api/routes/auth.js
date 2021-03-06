const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register
router.post('/register', async (req, res) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPass = await bcrypt.hash(req.body.password, salt);
		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hashedPass,
		});
		// How we save the user
		const user = await newUser.save();
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Login
router.post('/login', async (req, res) => {
	try {
		// finds user inside of MongoDB
		const user = await User.findOne({ username: req.body.username });
		!user && res.status(400).json('Wrong username!');
		// validates if bcrypt password matches User login password
		const validated = await bcrypt.compare(req.body.password, user.password);
		!validated && res.status(400).json('Wrong password');
		// make sure password is not saved in MongoDB
		const { password, ...others } = user._doc;
		res.status(200).json(others);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
