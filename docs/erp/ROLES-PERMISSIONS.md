# SHL ERP — User Roles & Permissions Matrix

**Version:** 1.0

---

## Role Definitions

| # | Role | Description | Access Level |
|---|------|-------------|--------------|
| 1 | Super Admin | Full system access, settings, user management | Everything |
| 2 | Director | Full business view, approvals, reports | All modules (read + approve) |
| 3 | Operations Manager | Shipments, fleet, drivers, dispatch | Operations modules |
| 4 | Branch Manager | Branch-specific operations and team | Branch-scoped operations |
| 5 | HR Manager | Employees, attendance, leave, payroll | HR modules |
| 6 | Accounts | Billing, finance, payments, reports | Finance modules |
| 7 | Sales Executive | Leads, customers, quotations, follow-ups | Sales & CRM modules |
| 8 | Customer Support | Tickets, complaints, shipment tracking | Support modules |
| 9 | Dispatch Executive | Vehicle allocation, loading, dispatch | Dispatch operations |
| 10 | Warehouse Executive | Inventory, loading, unloading, stock | Warehouse module |
| 11 | Driver | Assigned trips, expenses, attendance | Driver app features |
| 12 | Customer | Track shipments, invoices, complaints | Customer portal |
| 13 | Vendor / Fleet Owner | Vehicles, trips, payments | Vendor portal |

---

## Permission Matrix

**Actions:** C = Create, R = Read, U = Update, D = Delete, A = Approve, E = Export

### Core Modules

| Module | Super Admin | Director | Ops Manager | Branch Mgr | HR Mgr | Accounts | Sales | Support | Dispatch | Warehouse | Driver | Customer | Vendor |
|--------|:-----------:|:--------:|:-----------:|:----------:|:------:|:--------:|:-----:|:-------:|:--------:|:---------:|:------:|:--------:|:------:|
| Dashboard | CRUD | R | R | R | R | R | R | R | R | R | R | R | R |
| Employees | CRUD | R | R | R (branch) | CRUD | R | - | - | - | - | - | - | - |
| Customers | CRUD | RU | CRUD | CRUD | - | R | CRUD | R | R | - | - | R (own) | - |
| Vendors | CRUD | RU | CRUD | R | - | R | - | - | R | - | - | - | RU (own) |
| Shipments | CRUD | R | CRUD | CRUD | - | R | CR | R | CRUD | RU | R (own) | R (own) | R (own) |
| Vehicles | CRUD | R | CRUD | R | - | - | - | - | RU | - | R (assigned) | - | R (own) |
| Drivers | CRUD | R | CRUD | R | - | - | - | - | RU | - | RU (own) | - | - |
| Warehouse | CRUD | R | R | R | - | - | - | - | - | CRUD | - | - | - |
| Billing | CRUD | RA | R | R | - | CRUD | R | R | - | - | - | R (own) | R (own) |
| Finance | CRUD | RA | R | - | - | CRUD | - | - | - | - | - | - | - |
| Sales CRM | CRUD | R | R | R | - | - | CRUD | R | - | - | - | - | - |
| HRMS | CRUD | RA | R | R | CRUD | R (payroll) | - | - | - | - | - | - | - |
| Reports | CRUDE | RE | RE | RE (branch) | RE (HR) | RE (finance) | RE (sales) | R | R | R | - | - | - |
| Settings | CRUD | R | - | - | - | - | - | - | - | - | - | - | - |
| Notifications | CRUD | R | R | R | R | R | R | R | R | R | R | R | R |

---

## Role-Specific Dashboard Widgets

### Super Admin / Director
- Total revenue (today/week/month)
- Shipment count & status breakdown
- Vehicle utilization %
- Employee attendance summary
- Outstanding collections
- Top 5 customers by revenue
- Delayed shipments alert
- Profit & loss summary

### Operations Manager
- Today's shipments (status-wise)
- Vehicles available vs on-trip
- Drivers available vs on-duty
- Delayed shipments
- Pending pickups
- Pending deliveries
- Vehicle maintenance due
- Route performance

### Branch Manager
- Branch shipments today
- Branch revenue
- Team attendance
- Branch vehicles status
- Pending tasks
- Customer complaints (branch)

### Sales Executive
- My leads (pipeline)
- Today's follow-ups
- Quotations sent/pending
- Revenue generated (my customers)
- Upcoming meetings
- New leads assigned
- Monthly target vs actual

### Customer Support
- Open tickets
- Pending complaints
- Delayed shipments
- Customer queries today
- Average resolution time
- Customer satisfaction score

### Dispatch Executive
- Today's dispatches
- Vehicles to allocate
- Pending pickups
- Loading status
- Driver availability
- Route assignments

### Driver
- Today's trips
- Current route
- Trip history
- Earnings this month
- Fuel allowance
- Upcoming trips

### Customer (Portal)
- Active shipments
- Recent deliveries
- Pending invoices
- Outstanding balance
- Track shipment widget

### Vendor (Portal)
- Vehicles on trip
- Pending payments
- Trip history
- Documents expiring
- Performance rating

---

## Permission Scoping Rules

| Scope | Description | Applies To |
|-------|-------------|-----------|
| Global | See all data across company | Super Admin, Director |
| Branch | See only their branch data | Branch Manager, branch staff |
| Own | See only their own records | Driver, Customer, Vendor |
| Team | See their team's data | Operations Manager, HR Manager |
| Assigned | See only assigned records | Sales (assigned leads), Support (assigned tickets) |

---

## Authentication Flow

1. User logs in with email + password
2. System checks role and permissions
3. JWT token issued with role + userId + branchId
4. Each API route checks permission before responding
5. UI shows/hides features based on role
6. Audit log records every action

---

*End of Roles & Permissions Document*
