// Permission checker middleware helper

export type PermissionCheck = {
  module: string;
  action: 'create' | 'read' | 'update' | 'delete' | 'export' | 'approve';
};

export function checkPermission(
  userPermissions: { permission: { module: string; action: string } }[],
  required: PermissionCheck
): boolean {
  return userPermissions.some(
    (p) =>
      p.permission.module === required.module &&
      p.permission.action === required.action
  );
}

export function checkAnyPermission(
  userPermissions: { permission: { module: string; action: string } }[],
  required: PermissionCheck[]
): boolean {
  return required.some((req) => checkPermission(userPermissions, req));
}

// Module names
export const MODULES = {
  DASHBOARD: 'dashboard',
  EMPLOYEES: 'employees',
  CUSTOMERS: 'customers',
  VENDORS: 'vendors',
  SHIPMENTS: 'shipments',
  FLEET: 'fleet',
  DRIVERS: 'drivers',
  WAREHOUSE: 'warehouse',
  BILLING: 'billing',
  FINANCE: 'finance',
  SALES: 'sales',
  HRMS: 'hrms',
  REPORTS: 'reports',
  NOTIFICATIONS: 'notifications',
  SETTINGS: 'settings',
} as const;

// Actions
export const ACTIONS = {
  CREATE: 'create',
  READ: 'read',
  UPDATE: 'update',
  DELETE: 'delete',
  EXPORT: 'export',
  APPROVE: 'approve',
} as const;
