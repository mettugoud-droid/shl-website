export const roleAccess: Record<string, string[]> = {
  'super-admin': ['Dashboard', 'Shipments', 'Customers', 'Vendors', 'Fleet', 'Drivers', 'Employees', 'Sales', 'Billing', 'Finance', 'Warehouse', 'Routes', 'HRMS', 'Reports', 'Notifications'],
  'SUPER_ADMIN': ['Dashboard', 'Shipments', 'Customers', 'Vendors', 'Fleet', 'Drivers', 'Employees', 'Sales', 'Billing', 'Finance', 'Warehouse', 'Routes', 'HRMS', 'Reports', 'Notifications'],
  'DIRECTOR': ['Dashboard', 'Shipments', 'Customers', 'Vendors', 'Fleet', 'Drivers', 'Employees', 'Sales', 'Billing', 'Finance', 'Warehouse', 'Routes', 'HRMS', 'Reports', 'Notifications'],
  'ops-manager': ['Dashboard', 'Shipments', 'Fleet', 'Drivers', 'Routes', 'Warehouse', 'Notifications'],
  'OPS_MANAGER': ['Dashboard', 'Shipments', 'Fleet', 'Drivers', 'Routes', 'Warehouse', 'Notifications'],
  'hr-manager': ['Dashboard', 'Employees', 'HRMS', 'Notifications'],
  'HR_MANAGER': ['Dashboard', 'Employees', 'HRMS', 'Notifications'],
  'accounts': ['Dashboard', 'Customers', 'Billing', 'Finance', 'Reports', 'Notifications'],
  'ACCOUNTS': ['Dashboard', 'Customers', 'Billing', 'Finance', 'Reports', 'Notifications'],
  'sales-exec': ['Dashboard', 'Customers', 'Sales', 'Notifications'],
  'SALES_EXEC': ['Dashboard', 'Customers', 'Sales', 'Notifications'],
  'support': ['Dashboard', 'Shipments', 'Customers', 'Notifications'],
  'CUSTOMER_SUPPORT': ['Dashboard', 'Shipments', 'Customers', 'Notifications'],
  'dispatch-exec': ['Dashboard', 'Shipments', 'Fleet', 'Drivers', 'Routes', 'Notifications'],
  'DISPATCH_EXEC': ['Dashboard', 'Shipments', 'Fleet', 'Drivers', 'Routes', 'Notifications'],
  'WAREHOUSE_EXEC': ['Dashboard', 'Warehouse', 'Shipments', 'Notifications'],
  'driver': ['Dashboard', 'Notifications'],
  'DRIVER': ['Dashboard', 'Notifications'],
};

export function getAccessibleModules(roleId: string): string[] {
  return roleAccess[roleId] || roleAccess['super-admin'];
}
