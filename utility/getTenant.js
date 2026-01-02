import { headers } from 'next/headers';

// Server-side utility to get tenant information from middleware headers
export async function getTenant() {
  const headersList = await headers();
  const tenant = headersList.get('x-tenant') || 'main';
  const tenantType = headersList.get('x-tenant-type') || 'main';
  
  return {
    tenant,
    tenantType,
    isMainDomain: tenantType === 'main',
    isBrand: tenantType === 'brand',
  };
}
