import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { fetchItem } from '../../../utils/api';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default async function ItemDetailsPage({ params }) {
	const { id } = await params;
	const item = await fetchItem(id);

	if (!item) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col transition-colors duration-300">
			<Navbar />
			<main className="flex-grow pt-24 pb-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<Link
						href="/items"
						className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500 mb-8 transition-colors"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 mr-2"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
								clipRule="evenodd"
							/>
						</svg>
						Back to Menu
					</Link>

					<div className="grid md:grid-cols-2 gap-12 items-start">
						<div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl">
							<Image
								src={item.image}
								alt={item.name}
								fill
								className="object-cover"
								priority
							/>
						</div>

						<div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
							<div>
								<span className="text-amber-600 dark:text-amber-500 font-bold tracking-wide uppercase text-sm bg-amber-50 dark:bg-amber-900/40 px-3 py-1 rounded-full">
									{item.category}
								</span>
								<h1 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
									{item.name}
								</h1>
								<p className="mt-4 text-3xl font-bold text-gray-900 dark:text-amber-500">
									${item.price.toFixed(2)}
								</p>
							</div>

							<div className="prose prose-lg text-gray-500 dark:text-gray-300">
								<p>{item.description}</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</p>
							</div>

							<div className="pt-8 border-t border-gray-100 dark:border-gray-800">
								<button className="w-full md:w-auto px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg">
									Add to Order
								</button>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
