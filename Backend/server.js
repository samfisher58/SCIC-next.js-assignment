const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const itemsRoutes = require('./routes/items');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
	origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
	credentials: true
}));
app.use(bodyParser.json());

// Routes
app.use('/api/items', itemsRoutes);
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
	res.send('Restaurant API is running');
});

// Start Server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
