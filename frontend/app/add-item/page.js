'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createItem } from '../../utils/api';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import { toast } from 'react-hot-toast';

export default function AddItemPage() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [formData, setFormData] = useState({
		name: '',
		description: '',
		price: '',
		category: 'Main',
		image: '',
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async e => {
		e.preventDefault();
		setLoading(true);
		setError('');

		try {
			const itemData = {
				...formData,
				price: parseFloat(formData.price),
			};

			await createItem(itemData);
			toast.success('Item created successfully!');
			router.push('/items');
			router.refresh();
		} catch (err) {
			setError('Failed to create item. Please try again.');
			toast.error('Failed to create item');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors duration-300">
			<Navbar />
			<main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full">
				<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
						Add New Item
					</h1>

					{error && (
						<div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg mb-6 text-sm">
							{error}
						</div>
					)}

					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
								Item Name
							</label>
							<input
								type="text"
								name="name"
								required
								value={formData.name}
								onChange={handleChange}
								className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
								placeholder="e.g., Spicy Tuna Roll"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
								Description
							</label>
							<textarea
								name="description"
								required
								rows="3"
								value={formData.description}
								onChange={handleChange}
								className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
								placeholder="Describe the dish..."
							/>
						</div>

						<div className="grid grid-cols-2 gap-6">
							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Price ($)
								</label>
								<input
									type="number"
									name="price"
									step="0.01"
									required
									value={formData.price}
									onChange={handleChange}
									className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
									placeholder="0.00"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Category
								</label>
								<select
									name="category"
									value={formData.category}
									onChange={handleChange}
									className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all dark:bg-gray-700 dark:text-white"
								>
									<option value="Starter">Starter</option>
									<option value="Main">Main</option>
									<option value="Dessert">Dessert</option>
									<option value="Drink">Drink</option>
								</select>
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
								Image URL
							</label>
							<input
								type="url"
								name="image"
								value={formData.image}
								onChange={handleChange}
								className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
								placeholder="https://example.com/image.jpg"
							/>
							<p className="text-xs text-gray-400 mt-1">
								Leave blank for default image
							</p>
						</div>

						<div className="pt-4">
							<button
								type="submit"
								disabled={loading}
								className="w-full py-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{loading ? 'Creating Item...' : 'Create Item'}
							</button>
							<p className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
								* Only authorized personnel can add items.
							</p>
						</div>
					</form>
				</div>
			</main>
			<Footer />
		</div>
	);
}
