/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	reactCompiler: true,
	turbopack: {
		root: process.cwd(),
	},
	output: 'export',
	distDir: 'out',
	trailingSlash: true,
	skipTrailingSlashRedirect: true,
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		],
	},
};