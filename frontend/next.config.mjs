/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	output: 'export',
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

export default nextConfig;