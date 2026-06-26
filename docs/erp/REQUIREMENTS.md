# SHL Enterprise ERP & CRM — Requirements Document

**Version:** 1.0  
**Date:** June 2026  
**Project:** Sri Harinath Logistics ERP  
**Domain:** https://sriharinathlogistics.com/crm

---

## 1. Executive Summary

Sri Harinath Logistics requires a comprehensive Enterprise Resource Planning (ERP) system integrated with the existing website. The system manages end-to-end logistics operations including shipments (B2B/B2C, FTL/PTL), fleet management, employee management, customer CRM, vendor management, billing, finance, HRMS, and AI-driven analytics.

The ERP will serve 13 user roles across multiple departments with role-based access control, real-time dashboards, and mobile-responsive interfaces.

---

## 2. System Architecture

```
sriharinathlogistics.com
├── / (Public Website - existing)
├── /crm (ERP Dashboard - all internal users)
├── /admin (Super Admin & Settings)
├── /customer (Customer Portal)
├── /vendor (Vendor Portal)
```

**Single deployment. Single database. Single auth system.**

---

## 3. Module Requirements

---

### MODULE 1: Dashboard

**Purpose:** Real-time operational overview for all roles (customized per role)

**Features:**
- Today's shipments (booked, in-transit, delivered, delayed)
- Revenue (today, this week, this month)
- Pending deliveries & collections
- Available vehicles & drivers
- Delayed shipment alerts
- Today's tasks per employee
- Notifications feed
- Upcoming follow-ups
- Quick actions (create shipment, add customer, assign vehicle)
- Interactive charts (Recharts)
  - Revenue trend (line chart)
  - Shipment volume (bar chart)
  - Vehicle utilization (pie chart)
  - On-time delivery rate (gauge)
  - Top customers (bar chart)
  - Branch-wise performance (bar chart)

**Role-specific views:**
- Super Admin/Director: Full company overview
- Operations Manager: Shipments + fleet focus
- Branch Manager: Branch-specific data
- Sales Executive: Leads + revenue + follow-ups
- Customer Support: Tickets + pending issues
- Dispatch Executive: Today's dispatches + vehicle allocation
- Driver: Assigned trips + route
- Customer: Shipment status + invoices
- Vendor: Trips assigned + payments

---

### MODULE 2: Employee Management

**Purpose:** Complete employee lifecycle management

**Entities:**
- Employee (profile, department, designation, reporting manager)
- Attendance (check-in, check-out, GPS location, working hours)
- Leave (apply, approve, balance, carry forward)
- Documents (Aadhaar, PAN, DL, bank details, address proof)
- Salary (CTC, basic, HRA, allowances, deductions)
- Daily Tasks (assigned, in-progress, completed, overdue)
- Performance Score (calculated from tasks, attendance, shipments handled)

**Features:**
- Employee CRUD with document upload
- GPS-based attendance check-in/check-out
- Daily task assignment by manager
- Task completion with notes and photos
- Leave application and approval workflow
- Payroll-ready salary data
- Employee performance dashboard
  - Tasks completed rate
  - Attendance percentage
  - Shipments handled
  - Customer feedback score
  - Overall performance score (0-100)
- Department and designation hierarchy

---

### MODULE 3: Customer CRM

**Purpose:** Complete customer relationship and business management

**Entities:**
- Customer (company name, GST, PAN, type: B2B/B2C)
- Customer Branch (multiple locations per customer)
- Customer Contact (multiple contacts per customer)
- Contract (rate card, validity, terms)
- Interaction (calls, emails, WhatsApp, meetings)
- Quotation (line items, validity, status)
- Sales Opportunity (pipeline stages)

**Features:**
- Customer master with full details
- GST verification
- Multiple branches and contacts per customer
- Credit limit and outstanding balance tracking
- Contract management with rate cards
- Complete interaction history (calls, emails, meetings)
- Sales opportunity pipeline
- Quotation generation and tracking
- Customer lifetime value calculation
- Customer segmentation (by volume, revenue, frequency)
- Document management (contracts, agreements, PO)

---

### MODULE 4: Vendor Management

**Purpose:** Manage fleet owners, vehicle providers, transport partners

**Entities:**
- Vendor (name, type, company, GST, PAN)
- Vendor Vehicle (vehicles provided by vendor)
- Vendor Document (GST cert, PAN, bank details, agreement)
- Vendor Payment (trips done, amount due, paid)
- Vendor Rating (on-time, condition, behaviour)

**Features:**
- Vendor registration and onboarding
- Document verification workflow
- Vehicle assignment from vendor fleet
- Trip-wise payment calculation
- Payment history and ledger
- Performance rating system
- Vendor portal for self-service

---

### MODULE 5: Shipment Management

**Purpose:** End-to-end shipment lifecycle from booking to delivery

**Entities:**
- Shipment (number, type, customer, origin, destination, weight, dimensions)
- Shipment Item (multiple items per shipment)
- Shipment Status (workflow states with timestamps)
- Consignment Note (generated document)
- Proof of Delivery (OTP, signature, photo)
- Shipment Assignment (vehicle, driver)

**Shipment Types:**
- B2B (Business to Business)
- B2C (Business to Consumer)
- FTL (Full Truck Load)
- PTL (Part Truck Load)
- Express Cargo
- Reverse Logistics (returns/RTO)

**Workflow States:**
1. Booked
2. Assigned (vehicle + driver allocated)
3. Picked Up
4. Loaded
5. In Transit
6. Reached Hub
7. Out For Delivery
8. Delivered
9. Cancelled
10. RTO (Return to Origin)

**Features:**
- Auto-generate shipment number (SHL-YYMMDD-XXXX)
- Barcode and QR code generation
- Consignment note PDF generation
- Real-time status updates
- Delivery confirmation (OTP + signature + photo)
- Multi-stop routing
- FTL load details (single customer, full vehicle)
- PTL load details (multiple consignments, shared vehicle)
- Weight and dimension capture
- Rate calculation based on customer contract
- E-way bill reference
- Shipment history and timeline
- Bulk shipment creation (Excel upload)
- Shipment search and advanced filters

---

### MODULE 6: Fleet Management

**Purpose:** Complete vehicle lifecycle and utilization management

**Entities:**
- Vehicle (number, type, capacity, owner type: own/vendor)
- Vehicle Document (insurance, fitness, PUC, permit, RC)
- Vehicle Maintenance (service history, scheduled maintenance)
- Vehicle Expense (fuel, tyre, repair, toll)
- Tyre (position, brand, km run, replacement date)
- GPS Device (device ID, last location, status)

**Features:**
- Vehicle master with all details
- Document expiry alerts (insurance, fitness, PUC, permit)
- Maintenance scheduling and history
- Fuel log with mileage calculation
- Tyre management with rotation tracking
- GPS integration for live tracking
- Vehicle availability status (available, on-trip, maintenance, idle)
- Trip history per vehicle
- Vehicle utilization report
- Cost per km calculation

---

### MODULE 7: Driver Management

**Purpose:** Driver lifecycle, trips, performance, and compliance

**Entities:**
- Driver (profile, licence, Aadhaar, medical, bank details)
- Driver Document (DL, Aadhaar, medical certificate)
- Driver Trip (assigned trips with timeline)
- Driver Expense (fuel, food, toll, loading/unloading)
- Driver Attendance (login, logout, active hours)
- Driver Rating (from customer, operations, safety)
- Driver Fine (traffic violations, penalties)
- Driver Accident (incident reports)

**Features:**
- Driver registration with document upload
- DL verification and expiry alerts
- Trip assignment and acceptance
- Expense submission per trip
- Attendance tracking
- Performance rating (on-time, behaviour, safety)
- Accident and fine history
- Driver payout calculation
- Driver app-ready data structure

---

### MODULE 8: Warehouse Management

**Purpose:** Inventory and hub operations management

**Entities:**
- Warehouse (location, capacity, type)
- Inventory Item (SKU, quantity, rack location)
- Inbound (receiving goods)
- Outbound (dispatching goods)
- Stock Movement (transfer between warehouses)
- Rack/Bay (storage location within warehouse)

**Features:**
- Warehouse master with capacity
- Inbound receiving with barcode scan
- Outbound dispatch with loading verification
- Rack/bay allocation
- Stock level monitoring
- FIFO/LIFO management
- Stock reports and alerts
- Cross-dock operations
- Loading/unloading management

---

### MODULE 9: Route Planning

**Purpose:** Optimize pickup and delivery routes

**Entities:**
- Route (origin, destination, waypoints, distance, duration)
- Trip Plan (date, vehicle, driver, route, shipments)
- Fuel Estimate (distance-based fuel calculation)

**Features:**
- Route creation with waypoints
- Distance and duration calculation
- Fuel estimation based on vehicle type
- Trip planning (assign shipments to route)
- Google Maps integration ready
- Multi-stop optimization
- Historical route performance
- Traffic-aware ETA estimation (future)

---

### MODULE 10: Billing

**Purpose:** Complete billing cycle from quotation to payment

**Entities:**
- Quotation (customer, line items, validity, status)
- Invoice (shipment-based or period-based)
- Credit Note (for returns/adjustments)
- Debit Note (for additional charges)
- Payment (received, mode, reference)
- Customer Ledger (running balance)
- Vendor Ledger (payable tracking)

**Features:**
- Quotation creation and PDF generation
- GST invoice generation (CGST/SGST/IGST)
- Auto-invoice from delivered shipments
- Credit/debit note management
- Payment recording and receipts
- Customer outstanding tracking
- Payment reminder automation
- Customer and vendor ledger
- Export to Tally-ready format

---

### MODULE 11: Finance

**Purpose:** Company financial management and reporting

**Entities:**
- Income (shipment revenue, other income)
- Expense (fuel, salary, maintenance, office, vehicle)
- Bank Transaction (deposits, withdrawals, transfers)
- Petty Cash (daily small expenses)
- Budget (monthly/quarterly targets)

**Features:**
- Income tracking (auto from invoices)
- Expense categorization and approval
- Fuel expense with vehicle linking
- Salary expense with employee linking
- Vehicle-wise expense tracking
- Profit & Loss statement
- Cash flow report
- GST report (GSTR-1, GSTR-3B ready data)
- TDS report
- Monthly/quarterly/yearly comparison
- Budget vs actuals

---

### MODULE 12: Sales CRM

**Purpose:** Lead-to-deal pipeline for sales team

**Entities:**
- Lead (source, company, contact, requirement)
- Sales Activity (call, email, WhatsApp, meeting)
- Pipeline Stage (New → Qualified → Proposal → Negotiation → Won/Lost)
- Follow-up (scheduled actions)
- Quotation (linked to opportunity)

**Features:**
- Lead capture from website forms (auto)
- Lead assignment to sales executives
- Activity logging (calls, emails, meetings)
- Pipeline visualization (Kanban board)
- Follow-up scheduling and reminders
- Quotation generation from opportunity
- Win/loss analysis
- Sales executive performance
- Revenue forecasting
- WhatsApp integration for communication

---

### MODULE 13: HRMS

**Purpose:** Human resource management and payroll

**Entities:**
- Attendance (daily records)
- Leave (types, balance, applications)
- Holiday Calendar (company holidays)
- Payroll (monthly salary processing)
- Recruitment (job openings, applications, pipeline)
- Employee Asset (laptop, phone, ID card issued)

**Features:**
- Attendance with GPS check-in
- Leave application and multi-level approval
- Holiday calendar management
- Payroll calculation (basic + allowances - deductions)
- Salary slip generation
- Recruitment pipeline
- Asset assignment and tracking
- Performance review cycles
- Employee self-service portal

---

### MODULE 14: Reports

**Purpose:** Business intelligence and analytics

**Report Categories:**
- Revenue reports (daily, weekly, monthly, quarterly, yearly)
- Customer-wise revenue and shipment count
- Vehicle-wise revenue, trips, utilization
- Driver-wise trips, performance, expenses
- Employee-wise tasks, performance
- Shipment reports (status, type, route)
- Fuel reports (consumption, cost per km)
- Profitability reports (per customer, per vehicle, per route)
- On-time delivery percentage
- Customer satisfaction scores
- Branch-wise comparisons

**Export Formats:**
- Excel (.xlsx)
- CSV
- PDF

**Features:**
- Date range filters
- Multi-dimension filters (customer, vehicle, branch, employee)
- Drill-down capability
- Scheduled report emails
- Dashboard widgets from reports
- Comparison (period over period)
- Trend analysis

---

### MODULE 15: Notifications

**Purpose:** Multi-channel communication and alerts

**Channels:**
- SMS
- Email (via Resend)
- WhatsApp (via WhatsApp Business API)
- Push Notifications (browser)
- In-app notifications

**Trigger Events:**
- Shipment status updates (to customer)
- Payment reminders (to customer)
- Task assignments (to employee)
- Document expiry alerts (vehicle, driver)
- Follow-up reminders (to sales)
- Leave approval/rejection (to employee)
- Delivery confirmation (to customer)
- New lead notification (to sales)
- Delayed shipment alerts (to operations)

**Features:**
- Notification templates (SMS, Email, WhatsApp)
- Trigger-based automation
- Notification history log
- User notification preferences
- Bulk notifications
- Read/unread tracking

---

### MODULE 16: Customer Portal

**Purpose:** Self-service portal for customers

**Features:**
- Track shipment (by shipment number or reference)
- View shipment history
- Download invoices and POD
- Raise support ticket/complaint
- Request new pickup
- View outstanding payments
- Make online payment (future)
- View rate card/contract
- Manage company profile and contacts

---

### MODULE 17: Admin Settings

**Purpose:** System configuration and administration

**Features:**
- User management (create, edit, activate, deactivate)
- Role management (create roles, assign permissions)
- Permission matrix (module-level and action-level)
- Company profile (name, GST, address, logo)
- Branch management (multiple branches)
- Tax configuration (GST rates, SAC codes)
- Email templates (CRUD)
- SMS templates
- WhatsApp templates
- API key management (for integrations)
- Audit log (who did what, when)
- System settings (date format, currency, timezone)
- Backup settings
- Data import/export tools

---

## 4. Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| Response time | < 2 seconds for any page |
| Concurrent users | 50+ simultaneous |
| Data retention | 7 years minimum |
| Uptime | 99.5% |
| Mobile responsive | All modules |
| Browser support | Chrome, Firefox, Edge, Safari |
| Dark mode | Full support |
| Search | Global search across all modules |
| Offline | Basic viewing (future phase) |

---

## 5. Integration Points

| System | Integration Type | Purpose |
|--------|-----------------|---------|
| Google Maps | API | Route planning, distance |
| Resend | API | Email notifications |
| WhatsApp Business | API | Customer notifications |
| SMS Gateway | API | SMS alerts |
| Payment Gateway | API | Online payments (future) |
| Tally | Export | Accounting sync |
| GPS Provider | API | Vehicle tracking |

---

## 6. Data Volume Estimates

| Entity | Expected Records/Month |
|--------|----------------------|
| Shipments | 500-2000 |
| Customers | 50-100 new |
| Invoices | 500-1500 |
| Vehicles | 450 total |
| Drivers | 500 total |
| Employees | 50-100 total |
| Leads | 100-300 |

---

## 7. Priority Order

| Priority | Module | Reason |
|----------|--------|--------|
| P0 | Authentication + RBAC | Foundation |
| P0 | Dashboard | Visibility |
| P1 | Shipment Management | Core business |
| P1 | Customer CRM | Revenue |
| P1 | Fleet Management | Operations |
| P2 | Billing | Cash flow |
| P2 | Employee Management | HR |
| P2 | Driver Management | Operations |
| P3 | Sales CRM | Growth |
| P3 | Finance | Accounting |
| P3 | Vendor Management | Partnerships |
| P4 | Warehouse | Optional for now |
| P4 | Route Planning | Enhancement |
| P4 | Reports | Analytics |
| P5 | HRMS | HR expansion |
| P5 | Notifications | Automation |
| P5 | Customer Portal | Self-service |
| P5 | AI Features | Intelligence |

---

*End of Requirements Document*
