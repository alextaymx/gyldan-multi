import { NextResponse } from 'next/server';

// Valid subdomains that map to brands
const validSubdomains = ['coliving', 'properties', 'suites', 'intellex', 'studio', 'advisory'];

export function middleware(request) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';
  
  // Get subdomain from hostname
  // Handles: coliving.gyldan.my, coliving.localhost:3000, etc.
  const subdomain = getSubdomain(hostname);
  
  // Create response with tenant header
  const response = NextResponse.next();
  
  if (subdomain && validSubdomains.includes(subdomain)) {
    // Brand subdomain - set tenant header
    response.headers.set('x-tenant', subdomain);
    response.headers.set('x-tenant-type', 'brand');
  } else {
    // Main domain or unknown - treat as main
    response.headers.set('x-tenant', 'main');
    response.headers.set('x-tenant-type', 'main');
  }
  
  return response;
}

function getSubdomain(hostname) {
  // Remove port if present
  const host = hostname.split(':')[0];
  
  // Handle localhost development
  // Format: coliving.localhost or localhost
  if (host.includes('localhost') || host.includes('127.0.0.1')) {
    const parts = host.split('.');
    if (parts.length > 1 && parts[0] !== 'www') {
      return parts[0];
    }
    return null;
  }
  
  // Handle production domains
  // Format: coliving.gyldan.my or gyldan.my
  const parts = host.split('.');
  
  // If we have 3+ parts (subdomain.domain.tld), extract subdomain
  if (parts.length >= 3) {
    const subdomain = parts[0];
    // Ignore www
    if (subdomain === 'www') {
      return null;
    }
    return subdomain;
  }
  
  return null;
}

// Configure which paths the middleware runs on
export const config = {
  matcher: [
    // Match all paths except static files and api routes
    '/((?!api|_next/static|_next/image|favicon.ico|assets).*)',
  ],
};
