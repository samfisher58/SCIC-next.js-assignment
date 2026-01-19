import express from 'express';
import { MOCK_TOKEN } from '../middleware/auth.js';

const router = express.Router();

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

export default router;
