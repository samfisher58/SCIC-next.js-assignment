import { mockItems } from '../../utils/mockData';
import ItemCard from '../../components/ItemCard';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default async function ItemsPage() {
	// Use mock data directly for static generation
	const items = mockItems;

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors duration-300">
			<Navbar />
			<main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
				<div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
						Our <span className="text-amber-600 dark:text-amber-500">Menu</span>
					</h1>
					<p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
						Explore our carefully curated selection of dishes, crafted with
						passion and precision.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{items.map(item => (
						<ItemCard key={item.id} item={item} />
					))}
				</div>
			</main>
			<Footer />
		</div>
	);
}
