import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ROLES = [
  { name: 'SUPER_ADMIN', displayName: 'Super Admin', description: 'Full system access', isSystem: true },
  { name: 'DIRECTOR', displayName: 'Director', description: 'Business overview and approvals', isSystem: true },
  { name: 'OPS_MANAGER', displayName: 'Operations Manager', description: 'Operations management', isSystem: false },
  { name: 'BRANCH_MANAGER', displayName: 'Branch Manager', description: 'Branch-level management', isSystem: false },
  { name: 'HR_MANAGER', displayName: 'HR Manager', description: 'Human resources', isSystem: false },
  { name: 'ACCOUNTS', displayName: 'Accounts', description: 'Billing and finance', isSystem: false },
  { name: 'SALES_EXEC', displayName: 'Sales Executive', description: 'Sales and leads', isSystem: false },
  { name: 'CUSTOMER_SUPPORT', displayName: 'Customer Support', description: 'Customer queries', isSystem: false },
  { name: 'DISPATCH_EXEC', displayName: 'Dispatch Executive', description: 'Vehicle dispatch', isSystem: false },
  { name: 'WAREHOUSE_EXEC', displayName: 'Warehouse Executive', description: 'Warehouse operations', isSystem: false },
  { name: 'DRIVER', displayName: 'Driver', description: 'Driver access', isSystem: false },
  { name: 'CUSTOMER', displayName: 'Customer', description: 'Customer portal', isSystem: true },
  { name: 'VENDOR', displayName: 'Vendor', description: 'Vendor portal', isSystem: true },
];

const MODULES = [
  'dashboard', 'employees', 'customers', 'vendors',
  'shipments', 'fleet', 'drivers', 'warehouse',
  'billing', 'finance', 'sales', 'hrms',
  'reports', 'notifications', 'settings',
];

const ACTIONS = ['create', 'read', 'update', 'delete', 'export', 'approve'];

async function main() {
  console.log('Seeding database...');

  // Create roles
  for (const role of ROLES) {
    await prisma.role.upsert({
      where: { name: role.name },
      update: {},
      create: role,
    });
  }
  console.log('Roles created.');

  // Create permissions
  for (const module of MODULES) {
    for (const action of ACTIONS) {
      await prisma.permission.upsert({
        where: { module_action: { module, action } },
        update: {},
        create: { module, action },
      });
    }
  }
  console.log('Permissions created.');

  // Assign all permissions to Super Admin
  const superAdminRole = await prisma.role.findUnique({ where: { name: 'SUPER_ADMIN' } });
  const allPermissions = await prisma.permission.findMany();

  if (superAdminRole) {
    for (const perm of allPermissions) {
      await prisma.rolePermission.upsert({
        where: { roleId_permissionId: { roleId: superAdminRole.id, permissionId: perm.id } },
        update: {},
        create: { roleId: superAdminRole.id, permissionId: perm.id },
      });
    }
  }
  console.log('Super Admin permissions assigned.');

  // Create default branch
  await prisma.branch.upsert({
    where: { code: 'HYD-HQ' },
    update: {},
    create: {
      name: 'Hyderabad - Head Office',
      code: 'HYD-HQ',
      address: 'H.No. 12-11-197/4, 2nd Floor, Warasiguda',
      city: 'Secunderabad',
      state: 'Telangana',
      pincode: '500061',
      phone: '+91 70757 42929',
      email: 'info@sriharinathlogistics.com',
      isHead: true,
    },
  });
  console.log('Default branch created.');

  // Create Super Admin user (password: admin123)
  if (superAdminRole) {
    const encoder = new TextEncoder();
    const secret = process.env.JWT_SECRET || 'shl-erp-secret-change-in-production';
    const data = encoder.encode('admin123' + secret);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const passwordHash = Buffer.from(hashBuffer).toString('hex');

    await prisma.user.upsert({
      where: { email: 'admin@sriharinathlogistics.com' },
      update: {},
      create: {
        email: 'admin@sriharinathlogistics.com',
        password: passwordHash,
        name: 'Super Admin',
        phone: '+91 70757 42929',
        roleId: superAdminRole.id,
        isActive: true,
        emailVerified: true,
      },
    });
  }
  console.log('Super Admin user created.');
  console.log('Seed complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
