# SHL ERP — Database Entity Relationship Diagram

**Version:** 1.0  
**Database:** PostgreSQL via Prisma ORM

---

## Entity Relationship Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           CORE ENTITIES                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌──────────┐     ┌──────────────┐     ┌───────────┐     ┌──────────────┐  │
│  │   User   │────▶│   Employee   │     │  Customer │     │    Vendor    │  │
│  │  (Auth)  │     │              │     │           │     │              │  │
│  └──────────┘     └──────────────┘     └───────────┘     └──────────────┘  │
│       │                  │                   │                   │           │
│       │                  │                   │                   │           │
│       ▼                  ▼                   ▼                   ▼           │
│  ┌──────────┐     ┌──────────────┐     ┌───────────┐     ┌──────────────┐  │
│  │   Role   │     │    Tasks     │     │ Shipment  │     │   Vehicle    │  │
│  │Permission│     │  Attendance  │     │  Invoice  │     │   Payment    │  │
│  └──────────┘     └──────────────┘     └───────────┘     └──────────────┘  │
│                                              │                   │           │
│                                              ▼                   ▼           │
│                                        ┌───────────┐     ┌──────────────┐  │
│                                        │  Vehicle  │     │    Driver    │  │
│                                        │Assignment │     │              │  │
│                                        └───────────┘     └──────────────┘  │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Complete Entity List (43 Tables)

### Authentication & Access (4 tables)
| # | Entity | Purpose |
|---|--------|---------|
| 1 | User | Authentication (email, password, role) |
| 2 | Role | Role definitions (Super Admin, Director, etc.) |
| 3 | Permission | Module + action permissions |
| 4 | AuditLog | Who did what, when |

### Employee & HR (8 tables)
| # | Entity | Purpose |
|---|--------|---------|
| 5 | Employee | Employee profile and details |
| 6 | EmployeeDocument | Aadhaar, PAN, DL uploads |
| 7 | Attendance | Daily check-in/check-out |
| 8 | Leave | Leave applications and balance |
| 9 | LeaveType | Annual, Sick, Casual, etc. |
| 10 | Task | Daily task assignment |
| 11 | Payroll | Monthly salary record |
| 12 | EmployeeAsset | Company assets assigned |

### Customer (7 tables)
| # | Entity | Purpose |
|---|--------|---------|
| 13 | Customer | Customer master record |
| 14 | CustomerBranch | Multiple locations |
| 15 | CustomerContact | Contact persons |
| 16 | Contract | Rate cards and agreements |
| 17 | Interaction | Calls, emails, meetings log |
| 18 | SalesOpportunity | Pipeline deal tracking |
| 19 | Quotation | Price quotations |

### Vendor (4 tables)
| # | Entity | Purpose |
|---|--------|---------|
| 20 | Vendor | Vendor master |
| 21 | VendorDocument | GST, PAN, agreements |
| 22 | VendorVehicle | Vehicles provided by vendor |
| 23 | VendorPayment | Payment records |

### Shipment (6 tables)
| # | Entity | Purpose |
|---|--------|---------|
| 24 | Shipment | Main shipment record |
| 25 | ShipmentItem | Items in a shipment |
| 26 | ShipmentStatus | Status history/timeline |
| 27 | ShipmentAssignment | Vehicle + driver assignment |
| 28 | ProofOfDelivery | OTP, signature, photo |
| 29 | ConsignmentNote | Generated documents |

### Fleet & Vehicle (7 tables)
| # | Entity | Purpose |
|---|--------|---------|
| 30 | Vehicle | Vehicle master |
| 31 | VehicleDocument | Insurance, fitness, PUC, permit |
| 32 | VehicleMaintenance | Service records |
| 33 | VehicleExpense | Fuel, tyre, repair costs |
| 34 | Tyre | Tyre tracking per vehicle |
| 35 | GPSDevice | GPS device mapping |
| 36 | Trip | Vehicle trip records |

### Driver (5 tables)
| # | Entity | Purpose |
|---|--------|---------|
| 37 | Driver | Driver profile |
| 38 | DriverDocument | DL, Aadhaar, medical |
| 39 | DriverExpense | Trip expenses |
| 40 | DriverRating | Performance ratings |
| 41 | DriverIncident | Accidents, fines |

### Billing & Finance (8 tables)
| # | Entity | Purpose |
|---|--------|---------|
| 42 | Invoice | GST invoices |
| 43 | InvoiceItem | Line items |
| 44 | CreditNote | Adjustments |
| 45 | Payment | Payment received |
| 46 | Expense | Company expenses |
| 47 | ExpenseCategory | Expense types |
| 48 | Income | Revenue records |
| 49 | BankTransaction | Bank movements |

### Warehouse (5 tables)
| # | Entity | Purpose |
|---|--------|---------|
| 50 | Warehouse | Warehouse locations |
| 51 | InventoryItem | Stock items |
| 52 | StockMovement | In/out/transfer |
| 53 | Rack | Storage positions |
| 54 | LoadingOrder | Loading/unloading records |

### Route (3 tables)
| # | Entity | Purpose |
|---|--------|---------|
| 55 | Route | Route definitions |
| 56 | RouteWaypoint | Stops in a route |
| 57 | TripPlan | Planned trips |

### Notifications (3 tables)
| # | Entity | Purpose |
|---|--------|---------|
| 58 | Notification | User notifications |
| 59 | NotificationTemplate | SMS/Email/WhatsApp templates |
| 60 | NotificationLog | Sent notification history |

### Sales CRM (3 tables)
| # | Entity | Purpose |
|---|--------|---------|
| 61 | Lead | Sales leads |
| 62 | SalesActivity | Calls, emails, meetings |
| 63 | FollowUp | Scheduled follow-ups |

### Settings (4 tables)
| # | Entity | Purpose |
|---|--------|---------|
| 64 | Branch | Company branches |
| 65 | CompanySettings | Company profile |
| 66 | TaxConfig | GST rates, SAC codes |
| 67 | Holiday | Holiday calendar |

---

## Key Relationships

```
User (1) ─────────── (1) Employee
User (1) ─────────── (1) Customer (customer portal login)
User (1) ─────────── (1) Vendor (vendor portal login)
User (M) ─────────── (1) Role
Role (M) ─────────── (M) Permission

Employee (1) ──────── (M) Task
Employee (1) ──────── (M) Attendance
Employee (1) ──────── (M) Leave
Employee (1) ──────── (M) SalesActivity

Customer (1) ──────── (M) CustomerBranch
Customer (1) ──────── (M) CustomerContact
Customer (1) ──────── (M) Contract
Customer (1) ──────── (M) Shipment
Customer (1) ──────── (M) Invoice
Customer (1) ──────── (M) Quotation
Customer (1) ──────── (M) Interaction
Customer (1) ──────── (M) SalesOpportunity

Vendor (1) ─────────── (M) VendorVehicle
Vendor (1) ─────────── (M) VendorPayment

Shipment (1) ──────── (M) ShipmentItem
Shipment (1) ──────── (M) ShipmentStatus
Shipment (1) ──────── (1) ShipmentAssignment
Shipment (1) ──────── (1) ProofOfDelivery
Shipment (1) ──────── (1) Invoice
Shipment (M) ──────── (1) Customer
Shipment (M) ──────── (1) Vehicle
Shipment (M) ──────── (1) Driver

Vehicle (1) ─────────── (M) VehicleDocument
Vehicle (1) ─────────── (M) VehicleMaintenance
Vehicle (1) ─────────── (M) VehicleExpense
Vehicle (1) ─────────── (M) Trip
Vehicle (M) ─────────── (1) Vendor (if vendor-owned)

Driver (1) ─────────── (M) DriverDocument
Driver (1) ─────────── (M) Trip
Driver (1) ─────────── (M) DriverExpense
Driver (1) ─────────── (M) DriverRating

Invoice (1) ─────────── (M) InvoiceItem
Invoice (1) ─────────── (M) Payment
Invoice (M) ─────────── (1) Customer

Lead (M) ──────────── (1) Employee (assigned to)
Lead (1) ──────────── (M) SalesActivity
Lead (1) ──────────── (M) FollowUp
Lead (1) ──────────── (1) SalesOpportunity
```

---

## Data Types & Conventions

| Convention | Standard |
|-----------|----------|
| Primary Key | `id` (CUID) |
| Timestamps | `createdAt`, `updatedAt` |
| Soft Delete | `deletedAt` (nullable DateTime) |
| Money | `Decimal(12,2)` |
| Phone | `String` (with country code) |
| Status | `Enum` types |
| References | `entityId` (foreign key) |
| Addresses | Embedded fields (street, city, state, pincode) |

---

*End of Database ERD Document*
