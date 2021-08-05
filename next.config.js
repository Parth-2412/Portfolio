/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	images: {
		domains: ["www.upwork.com"],
		dangerouslyAllowAllDomains: true,
	},
};

module.exports = nextConfig;
