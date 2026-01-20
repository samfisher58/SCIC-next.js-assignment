'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../../utils/api';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async e => {
		e.preventDefault();
		setError('');
		setLoading(true);

		try {
			const data = await login(email, password);
			// Set cookie with token from backend
			document.cookie = `auth_token=${data.token}; path=/; max-age=3600`;
			router.push('/items');
		} catch (err) {
			setError('Invalid credentials. Use admin@example.com / password');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
			<div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
						Sign in to your account
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
						Connected to Railway backend
					</p>
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
						<div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm text-center font-medium">
							{error}
						</div>
					)}

					<div>
						<button
							type="submit"
							disabled={loading}
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
						>
							{loading ? 'Signing in...' : 'Sign in'}
						</button>
					</div>

					<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
						<div className="text-sm text-center text-amber-800 dark:text-amber-200">
							<div className="font-semibold mb-1">Demo Credentials:</div>
							<div><b>Email:</b> admin@example.com</div>
							<div><b>Password:</b> password</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}