'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function ItemCard({ item }) {
	return (
		<Link
			href={`/items/${item.id}`}
			className="group block bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-amber-200 dark:hover:border-amber-700"
		>
			<div className="relative aspect-[4/3] w-full overflow-hidden">
				<Image
					src={item.image}
					alt={item.name}
					fill
					className="object-cover group-hover:scale-110 transition-transform duration-500"
				/>
				<div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-amber-600 shadow-sm">
					${item.price.toFixed(2)}
				</div>
			</div>
			<div className="p-6">
				<div className="text-xs font-semibold text-amber-500 uppercase tracking-wide mb-2">
					{item.category}
				</div>
				<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
					{item.name}
				</h3>
				<p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
					{item.description}
				</p>
				<div className="mt-4 flex items-center text-amber-600 dark:text-amber-500 font-medium group-hover:translate-x-2 transition-transform">
					View Details <FaArrowRight className="ml-2" />
				</div>
			</div>
		</Link>
	);
}
