# SHL ERP — Navigation Structure

**Version:** 1.0

---

## URL Structure

```
/                           → Public Website (existing)
/crm                        → ERP Dashboard (internal users)
/crm/shipments              → Shipment Management
/crm/customers              → Customer CRM
/crm/vendors                → Vendor Management
/crm/fleet                  → Fleet & Vehicles
/crm/drivers                → Driver Management
/crm/employees              → Employee Management
/crm/warehouse              → Warehouse Management
/crm/sales                  → Sales CRM (Leads, Pipeline)
/crm/billing                → Billing & Invoices
/crm/finance                → Finance & Accounts
/crm/reports                → Reports & Analytics
/crm/hrms                   → HRMS (Attendance, Leave, Payroll)
/crm/routes                 → Route Planning
/crm/notifications          → Notification Center
/admin                      → Admin Settings
/admin/users                → User Management
/admin/roles                → Role Management
/admin/company              → Company Settings
/admin/branches             → Branch Management
/admin/audit                → Audit Logs
/customer                   → Customer Portal
/customer/shipments         → Track Shipments
/customer/invoices          → View Invoices
/customer/tickets           → Support Tickets
/vendor                     → Vendor Portal
/vendor/vehicles            → My Vehicles
/vendor/trips               → Trip History
/vendor/payments            → Payment History
```

---

## Sidebar Navigation (CRM)

```
📊 Dashboard
   └── Overview

📦 Shipments
   ├── All Shipments
   ├── Create Shipment
   ├── FTL Shipments
   ├── PTL Shipments
   ├── Express Cargo
   ├── Reverse / RTO
   └── Bulk Upload

👥 Customers
   ├── All Customers
   ├── Add Customer
   ├── Contracts
   ├── Interactions
   └── Quotations

🏢 Vendors
   ├── All Vendors
   ├── Add Vendor
   ├── Vendor Vehicles
   └── Payments

🚛 Fleet
   ├── All Vehicles
   ├── Add Vehicle
   ├── Maintenance
   ├── Documents
   ├── Fuel Log
   ├── Tyres
   └── GPS Tracking

👨‍✈️ Drivers
   ├── All Drivers
   ├── Add Driver
   ├── Trips
   ├── Expenses
   ├── Ratings
   └── Incidents

👨‍💼 Employees
   ├── All Employees
   ├── Add Employee
   ├── Tasks
   ├── Attendance
   ├── Documents
   └── Performance

📈 Sales
   ├── Leads
   ├── Pipeline
   ├── Follow-ups
   ├── Quotations
   └── Won / Lost

💰 Billing
   ├── Invoices
   ├── Create Invoice
   ├── Payments
   ├── Credit Notes
   ├── Outstanding
   └── Ledger

💵 Finance
   ├── Income
   ├── Expenses
   ├── Profit & Loss
   ├── Cash Flow
   ├── GST Reports
   └── Budget

🏪 Warehouse
   ├── Warehouses
   ├── Inventory
   ├── Inbound
   ├── Outbound
   └── Stock Report

🗺️ Routes
   ├── All Routes
   ├── Plan Trip
   └── Trip History

📋 HRMS
   ├── Attendance
   ├── Leave
   ├── Holidays
   ├── Payroll
   └── Recruitment

📊 Reports
   ├── Revenue
   ├── Shipments
   ├── Vehicles
   ├── Drivers
   ├── Employees
   ├── Customers
   └── Custom Report

🔔 Notifications
   ├── All
   ├── Unread
   └── Templates

⚙️ Settings (Admin only)
   ├── Users
   ├── Roles & Permissions
   ├── Company Profile
   ├── Branches
   ├── Tax Config
   ├── Templates
   ├── API Keys
   └── Audit Log
```

---

## Top Bar Elements

```
┌──────────────────────────────────────────────────────────────────┐
│ 🚛 SHL ERP │ 🔍 Global Search │ 🔔 Notifications │ 👤 Profile │
└──────────────────────────────────────────────────────────────────┘
```

- **Logo + Name:** Links to dashboard
- **Global Search:** Search shipments, customers, vehicles, invoices by number/name
- **Notifications Bell:** Unread count badge
- **Profile Menu:** My profile, settings, switch branch, logout
- **Dark/Light Toggle:** Theme switcher

---

## Mobile Navigation

On mobile (< 1024px):
- Hamburger menu → Full sidebar slides in
- Bottom tab bar for quick access:
  - Dashboard
  - Shipments
  - Create (+ button)
  - Notifications
  - Profile

---

*End of Navigation Document*
