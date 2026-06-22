# Cold Air ERP & HVAC Service Platform

Cold Air is an Arabic-only RTL web platform for HVAC and refrigeration companies. It combines a public SEO website, e-commerce store, customer portal, service booking, and a scalable multi-branch ERP dashboard.

## Modules

- Public homepage with hero, intro, services, featured products, brands, testimonials, projects, contact, WhatsApp, and service request CTA.
- Dedicated service pages for sales, installation, maintenance, cleaning, refrigerant charging, contracts, project supply, cold/freezer rooms, VRF, and central AC.
- Store for air conditioners, spare parts, and filters with category, brand, specs, stock, reviews, cart, checkout, and cash/Vodafone Cash/InstaPay payment strategy.
- Customer accounts for profile, orders, invoices, contracts, service history, and installed devices.
- ERP dashboard for roles, branches, customers, devices, maintenance records, orders, technicians, contracts, renewals, invoices, inventory, suppliers, financial reports, coupons, analytics, files, and audit logs.

## Development

```bash
npm install
npm run prisma:generate
npm run build
npm run dev
```

See `docs/architecture.md` and `prisma/schema.prisma` for the architecture, API, security, and relational database design.
