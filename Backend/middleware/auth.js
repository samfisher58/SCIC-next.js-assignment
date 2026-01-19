const MOCK_TOKEN = 'mock_token_secret_123';

function authenticateToken(req, res, next) {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

	if (token == null) return res.sendStatus(401);

	if (token === MOCK_TOKEN) {
		next();
	} else {
		return res.sendStatus(403);
	}
}

module.exports = { authenticateToken, MOCK_TOKEN };
