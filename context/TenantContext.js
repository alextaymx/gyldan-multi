"use client";

import { createContext, useContext } from 'react';

// Context for tenant/brand information
const TenantContext = createContext({
  tenant: 'main',
  tenantType: 'main',
  isMainDomain: true,
  isBrand: false,
});

export function TenantProvider({ children, tenant, tenantType }) {
  const value = {
    tenant,
    tenantType,
    isMainDomain: tenantType === 'main',
    isBrand: tenantType === 'brand',
  };

  return (
    <TenantContext.Provider value={value}>
      {children}
    </TenantContext.Provider>
  );
}

export function useTenant() {
  const context = useContext(TenantContext);
  if (!context) {
    throw new Error('useTenant must be used within a TenantProvider');
  }
  return context;
}

export default TenantContext;
