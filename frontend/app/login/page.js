'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const router = useRouter();

	const { login } = require('../../utils/api');

	const handleSubmit = async e => {
		e.preventDefault();
		setError('');

		try {
			const data = await login(email, password);
			// Set cookie with token from backend
			document.cookie = `auth_token=${data.token}; path=/; max-age=3600`;
			router.push('/items');
		} catch (err) {
			setError('Invalid credentials. Try admin@example.com / password');
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
			<div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
						Sign in to your account
					</h2>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<input
								type="email"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-t-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm dark:bg-gray-700 transition-colors"
								placeholder="Email address"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<input
								type="password"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-b-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm dark:bg-gray-700 transition-colors"
								placeholder="Password"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
					</div>

					{error && (
						<div className="text-red-500 text-sm text-center font-medium">
							{error}
						</div>
					)}

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
						>
							Sign in
						</button>
					</div>

					<div className="text-sm text-center text-gray-500 dark:text-gray-400">
						Use <b>email: admin@example.com</b> / <b>pass: password</b>
					</div>
				</form>
			</div>
		</div>
	);
}
