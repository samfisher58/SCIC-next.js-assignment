import express from 'express';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Mock Database (In-Memory)
let items = [
	{
		id: 1,
		name: 'Truffle Mushroom Risotto',
		description:
			'Creamy arborio rice with black truffles, wild mushrooms, and parmesan crisp.',
		price: 24.99,
		image:
			'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070&auto=format&fit=crop',
		category: 'Main',
	},
	{
		id: 2,
		name: 'Pan-Seared Scallops',
		description:
			'Fresh Atlantic scallops served with cauliflower purée and truffle oil.',
		price: 32.5,
		image:
			'https://images.unsplash.com/photo-1548590632-4d56722d56d2?q=80&w=2070&auto=format&fit=crop',
		category: 'Starter',
	},
	{
		id: 3,
		name: 'Wagyu Beef Burger',
		description:
			'Premium Wagyu beef patty, brioche bun, aged cheddar, and house relish.',
		price: 28.0,
		image:
			'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop',
		category: 'Main',
	},
	{
		id: 4,
		name: 'Lobster Bisque',
		description:
			'Rich and creamy soup made with fresh lobster stock and brandy.',
		price: 18.0,
		image:
			'https://images.unsplash.com/photo-1547592166-23ac79dac8ad?q=80&w=2071&auto=format&fit=crop',
		category: 'Soup',
	},
	{
		id: 5,
		name: 'Chocolate Lava Cake',
		description:
			'Warm chocolate cake with a molten center, served with vanilla bean ice cream.',
		price: 14.0,
		image:
			'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=2070&auto=format&fit=crop',
		category: 'Dessert',
	},
	{
		id: 6,
		name: 'Caesar Salad',
		description:
			'Crisp romaine hearts, homemade croutons, shave parmesan, and classic Caesar dressing.',
		price: 16.5,
		image:
			'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2070&auto=format&fit=crop',
		category: 'Salad',
	},
];

// GET /api/items - Get all items
router.get('/', (req, res) => {
	res.json(items);
});

// GET /api/items/:id - Get single item
router.get('/:id', (req, res) => {
	const item = items.find(i => i.id === parseInt(req.params.id));
	if (!item) return res.status(404).json({ message: 'Item not found' });
	res.json(item);
});

// POST /api/items - Add new item (Protected)
router.post('/', authenticateToken, (req, res) => {
	const { name, description, price, image, category } = req.body;

	if (!name || !price) {
		return res.status(400).json({ message: 'Name and price are required' });
	}

	const newItem = {
		id: items.length + 1,
		name,
		description,
		price: parseFloat(price),
		image:
			image ||
			'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop', // Default image
		category: category || 'Other',
	};

	items.push(newItem);
	res.status(201).json(newItem);
});

export default router;
