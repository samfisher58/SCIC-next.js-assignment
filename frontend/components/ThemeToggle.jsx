'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';

export function ThemeToggle() {
	const { setTheme, theme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div className="w-9 h-9" />; // Placeholder to prevent layout shift
	}

	return (
		<button
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative"
			aria-label="Toggle Theme"
			title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
		>
			<FaSun className="h-[1.2rem] w-[1.2rem] transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
			<FaMoon className="absolute top-2 left-2 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
			<span className="sr-only">Toggle theme</span>
		</button>
	);
}
