import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import itemsRoutes from './routes/items.js';
import authRoutes from './routes/auth.js';

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration for multiple origins
const allowedOrigins = [
	'http://localhost:3000',
	'http://localhost:3002',
	'https://scic-next-js-assignment.vercel.app',
	'https://endearing-cascaron-ea4f00.netlify.app',
	process.env.CORS_ORIGIN
].filter(Boolean);

// Middleware
app.use(cors({
	origin: function (origin, callback) {
		// Allow requests with no origin (like mobile apps or curl requests)
		if (!origin) return callback(null, true);
		
		if (allowedOrigins.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
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
