import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import itemsRoutes from './routes/items.js';
import authRoutes from './routes/auth.js';

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
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
	res.send('Restaurant API is running');
});

// Start Server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
