/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['i.pravatar.cc', 'images.uzum.uz', 'www.usnews.com'],
	},
	experimental: {
		trustProxy: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
