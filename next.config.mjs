/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable hostname handling for subdomains
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
  
  // Images configuration for external domains if needed
  images: {
    domains: ['localhost', 'gyldan.my'],
    unoptimized: true,
  },
  
  // Experimental features for better subdomain support
  experimental: {
    // Enable server actions if needed
  },
};

export default nextConfig;
