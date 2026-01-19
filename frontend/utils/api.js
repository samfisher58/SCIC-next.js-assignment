import { isAuthenticated } from './auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export async function login(email, password) {
	const res = await fetch(`${API_URL}/api/auth/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
	});

	if (!res.ok) {
		throw new Error('Invalid credentials');
	}

	return res.json();
}

export async function fetchItems() {
	const res = await fetch(`${API_URL}/api/items`, {
		cache: 'no-store',
	});
	if (!res.ok) {
		throw new Error('Failed to fetch items');
	}
	return res.json();
}

export async function fetchItem(id) {
	const res = await fetch(`${API_URL}/api/items/${id}`, {
		cache: 'no-store',
	});
	if (!res.ok) {
		return null;
	}
	return res.json();
}

export async function createItem(item) {
	// Get token from cookie manually for client component or pass it in
	// For this simple mock, we'll assume the client calls this and has the cookie available in document.cookie
	// But strictly, httpOnly cookies are better. Here we used a simple non-httpOnly cookie for demo.

	let token = '';
	if (typeof document !== 'undefined') {
		const match = document.cookie.match(new RegExp('(^| )auth_token=([^;]+)'));
		if (match) token = match[2];
	}

	const res = await fetch(`${API_URL}/api/items`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(item),
	});

	if (!res.ok) {
		throw new Error('Failed to create item');
	}

	return res.json();
}
