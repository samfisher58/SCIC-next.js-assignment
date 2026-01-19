'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
	FaHome,
	FaUtensils,
	FaPlus,
	FaSignInAlt,
	FaSignOutAlt,
	FaBars,
} from 'react-icons/fa';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const checkAuth = () => {
			const hasToken = document.cookie
				.split(';')
				.some(item => item.trim().startsWith('auth_token='));
			setIsLoggedIn(hasToken);
		};
		checkAuth();
	}, [pathname]);

	return (
		<nav className="fixed w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex-shrink-0 flex items-center">
						<Link
							href="/"
							className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent flex items-center gap-2"
						>
							<FaUtensils className="text-amber-600" />
							GourmetHaven
						</Link>
					</div>

					<div className="hidden md:flex items-center space-x-8">
						<Link
							href="/"
							className="text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-500 transition-colors font-medium flex items-center gap-1"
						>
							<FaHome /> Home
						</Link>
						<Link
							href="/items"
							className="text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-500 transition-colors font-medium flex items-center gap-1"
						>
							<FaUtensils /> Menu
						</Link>

						{isLoggedIn && (
							<Link
								href="/add-item"
								className="text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-500 transition-colors font-medium flex items-center gap-1"
							>
								<FaPlus /> Add Dish
							</Link>
						)}

						<ThemeToggle />

						{!isLoggedIn ? (
							<Link
								href="/login"
								className="px-5 py-2.5 rounded-full bg-amber-600 text-white font-medium hover:bg-amber-700 transition-all shadow-lg shadow-amber-600/20 flex items-center gap-2"
							>
								<FaSignInAlt /> Login
							</Link>
						) : (
							<button
								onClick={() => {
									document.cookie = 'auth_token=; path=/; max-age=0';
									window.location.reload();
								}}
								className="px-5 py-2.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-all flex items-center gap-2"
							>
								<FaSignOutAlt /> Logout
							</button>
						)}
					</div>

					<div className="md:hidden flex items-center gap-4">
						<ThemeToggle />
						<button className="text-gray-500 dark:text-gray-300 hover:text-amber-600 transition-colors p-2">
							<FaBars size={24} />
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
