export const crmNavigation = [
  {
    title: 'Dashboard',
    href: '/crm',
    icon: 'LayoutDashboard',
  },
  {
    title: 'Shipments',
    href: '/crm/shipments',
    icon: 'Package',
    children: [
      { title: 'All Shipments', href: '/crm/shipments' },
      { title: 'Create Shipment', href: '/crm/shipments/new' },
      { title: 'FTL Shipments', href: '/crm/shipments?mode=FTL' },
      { title: 'PTL Shipments', href: '/crm/shipments?mode=PTL' },
    ],
  },
  {
    title: 'Customers',
    href: '/crm/customers',
    icon: 'Users',
    children: [
      { title: 'All Customers', href: '/crm/customers' },
      { title: 'Add Customer', href: '/crm/customers/new' },
      { title: 'Contracts', href: '/crm/customers/contracts' },
      { title: 'Quotations', href: '/crm/customers/quotations' },
    ],
  },
  {
    title: 'Vendors',
    href: '/crm/vendors',
    icon: 'Building2',
  },
  {
    title: 'Fleet',
    href: '/crm/fleet',
    icon: 'Truck',
    children: [
      { title: 'All Vehicles', href: '/crm/fleet' },
      { title: 'Add Vehicle', href: '/crm/fleet/new' },
      { title: 'Maintenance', href: '/crm/fleet/maintenance' },
      { title: 'Fuel Log', href: '/crm/fleet/fuel' },
      { title: 'GPS Tracking', href: '/crm/fleet/tracking' },
    ],
  },
  {
    title: 'Drivers',
    href: '/crm/drivers',
    icon: 'UserCircle',
  },
  {
    title: 'Employees',
    href: '/crm/employees',
    icon: 'Users',
    children: [
      { title: 'All Employees', href: '/crm/employees' },
      { title: 'Tasks', href: '/crm/employees/tasks' },
      { title: 'Attendance', href: '/crm/employees/attendance' },
      { title: 'Performance', href: '/crm/employees/performance' },
    ],
  },
  {
    title: 'Sales',
    href: '/crm/sales',
    icon: 'TrendingUp',
    children: [
      { title: 'Leads', href: '/crm/sales' },
      { title: 'Pipeline', href: '/crm/sales/pipeline' },
      { title: 'Follow-ups', href: '/crm/sales/followups' },
    ],
  },
  {
    title: 'Billing',
    href: '/crm/billing',
    icon: 'Receipt',
    children: [
      { title: 'Invoices', href: '/crm/billing' },
      { title: 'Create Invoice', href: '/crm/billing/new' },
      { title: 'Payments', href: '/crm/billing/payments' },
      { title: 'Outstanding', href: '/crm/billing/outstanding' },
    ],
  },
  {
    title: 'Finance',
    href: '/crm/finance',
    icon: 'IndianRupee',
  },
  {
    title: 'Warehouse',
    href: '/crm/warehouse',
    icon: 'Warehouse',
  },
  {
    title: 'Routes',
    href: '/crm/routes',
    icon: 'Route',
  },
  {
    title: 'HRMS',
    href: '/crm/hrms',
    icon: 'Calendar',
    children: [
      { title: 'Attendance', href: '/crm/hrms' },
      { title: 'Leaves', href: '/crm/hrms/leaves' },
      { title: 'Payroll', href: '/crm/hrms/payroll' },
      { title: 'Holidays', href: '/crm/hrms/holidays' },
    ],
  },
  {
    title: 'Reports',
    href: '/crm/reports',
    icon: 'BarChart3',
  },
  {
    title: 'Notifications',
    href: '/crm/notifications',
    icon: 'Bell',
  },
];

export const adminNavigation = [
  { title: 'Users', href: '/admin/users', icon: 'Users' },
  { title: 'Roles & Permissions', href: '/admin/roles', icon: 'Settings' },
  { title: 'Company Profile', href: '/admin/company', icon: 'Building2' },
  { title: 'Branches', href: '/admin/branches', icon: 'Building2' },
  { title: 'Tax Config', href: '/admin/tax-config', icon: 'Receipt' },
  { title: 'Audit Log', href: '/admin/audit', icon: 'BarChart3' },
];
