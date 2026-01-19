const express = require('express');
const router = express.Router();
const { MOCK_TOKEN } = require('../middleware/auth');

router.post('/login', (req, res) => {
	const { email, password } = req.body;

	// Hardcoded credentials
	if (email === 'admin@example.com' && password === 'password') {
		res.json({
			token: MOCK_TOKEN,
			user: { email: 'admin@example.com', role: 'admin' },
		});
	} else {
		res.status(401).json({ message: 'Invalid credentials' });
	}
});

module.exports = router;
