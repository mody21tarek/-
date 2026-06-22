# Cold Air Architecture

- **Public website**: Arabic RTL SEO pages for homepage, services, projects, store, and customer account entry.
- **Admin ERP**: branch-aware dashboard for customers, devices, maintenance, orders, technicians, contracts, invoices, inventory, suppliers, finances, coupons, files, and audit logs.
- **Backend API**: Next.js route handlers with validation, JWT auth, RBAC, rate limiting gateway, secure uploads, and audit logging.
- **Database**: PostgreSQL via Prisma with indexed relational models for branches, users, customers, devices, orders, contracts, invoices, inventory, notifications, coupons, and audit logs.
- **Scalability**: every operational entity is branch-ready, enabling a single-company site to grow into unlimited branches.

## API Surface

- `POST /api/auth/login`
- `GET|POST /api/bookings`
- `GET|POST /api/orders`
- `GET|POST /api/products`
- `GET|POST /api/customers`
- `GET|POST /api/invoices`

## Security

JWT sessions, bcrypt password hashing, RBAC permissions, Zod request validation, ORM SQL-injection protection, CSP/XSS headers, CSRF token strategy for cookie sessions, upload MIME/size validation, rate limiting, immutable audit logs, encrypted backups, and point-in-time database recovery.

## Deployment

1. Copy `.env.example` to `.env` and set `DATABASE_URL` and `JWT_SECRET`.
2. Run `npm install`.
3. Run `npm run prisma:generate` and `npm run prisma:migrate`.
4. Run `npm run build`.
5. Deploy to a Node.js host with PostgreSQL, object storage for files, and scheduled jobs for contract renewal notifications at 30/15/7/0 days.
