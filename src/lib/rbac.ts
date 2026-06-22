export const permissionsByRole = {
  SUPER_ADMIN: ['*'],
  BRANCH_MANAGER: ['branch:read', 'branch:update', 'orders:*', 'customers:*', 'inventory:*', 'reports:read'],
  CUSTOMER_SERVICE: ['customers:read', 'customers:update', 'bookings:*', 'orders:read'],
  SALES_MANAGER: ['products:*', 'orders:*', 'coupons:*', 'reports:sales'],
  ACCOUNTANT: ['invoices:*', 'payments:*', 'reports:financial'],
  TECHNICIAN: ['orders:assigned', 'maintenance:create', 'devices:read'],
  CUSTOMER: ['profile:*', 'orders:own', 'invoices:own', 'contracts:own']
} as const;

export function hasPermission(role: keyof typeof permissionsByRole, permission: string) {
  const permissions = permissionsByRole[role];
  return permissions.includes('*' as never) || permissions.some((item) => item.endsWith(':*') ? permission.startsWith(item.slice(0, -1)) : item === permission);
}
