// URL utilities for handling subdomain navigation

// Check if we're in development mode
const isDevelopment = process.env.NODE_ENV === 'development';

// Base domain for production
const PRODUCTION_DOMAIN = 'gyldan.my';

/**
 * Get the URL for the main domain
 */
export const getMainUrl = () => {
    if (isDevelopment) {
        return '/';
    }
    return `https://${PRODUCTION_DOMAIN}`;
};

/**
 * Get the URL for a brand subdomain
 * In development: uses path-based routing (/brand/[subdomain])
 * In production: uses actual subdomains
 */
export const getSubdomainUrl = (subdomain) => {
    if (isDevelopment) {
        // In development, use path-based routing
        return `/brand/${subdomain}`;
    }
    return `https://${subdomain}.${PRODUCTION_DOMAIN}`;
};

/**
 * Check if current request is for a specific subdomain
 * Used in middleware and server components
 */
export const isSubdomain = (hostname, subdomain) => {
    return hostname.startsWith(`${subdomain}.`);
};
