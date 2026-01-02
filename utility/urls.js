// URL utilities for handling subdomain navigation

// Check if we're in development mode
const isDevelopment = process.env.NODE_ENV === 'development';

// Base domain for production (set via env var or default to path-based)
const PRODUCTION_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || '';

// Use subdomains only if a custom domain is configured
const useSubdomains = !!PRODUCTION_DOMAIN;

/**
 * Get the URL for the main domain
 */
export const getMainUrl = () => {
  if (isDevelopment || !useSubdomains) {
    return '/';
  }
  return `https://${PRODUCTION_DOMAIN}`;
};

/**
 * Get the URL for a brand subdomain
 * Uses path-based routing unless a custom domain is set
 */
export const getSubdomainUrl = (subdomain) => {
  if (isDevelopment || !useSubdomains) {
    // Use path-based routing
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
