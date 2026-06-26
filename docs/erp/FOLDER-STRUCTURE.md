# SHL ERP — Folder Structure

**Version:** 1.0

---

## Directory Layout (within existing project)

```
shl-website/
├── src/
│   ├── app/
│   │   ├── (website)/          ← Existing public website pages
│   │   │   ├── page.tsx
│   │   │   ├── about/
│   │   │   ├── services/
│   │   │   ├── contact/
│   │   │   └── ...
│   │   │
│   │   ├── (auth)/             ← Authentication pages
│   │   │   ├── login/
│   │   │   ├── forgot-password/
│   │   │   └── reset-password/
│   │   │
│   │   ├── crm/               ← ERP Dashboard (internal)
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx       (Dashboard)
│   │   │   ├── shipments/
│   │   │   │   ├── page.tsx   (List)
│   │   │   │   ├── new/
│   │   │   │   ├── [id]/
│   │   │   │   └── bulk-upload/
│   │   │   ├── customers/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── new/
│   │   │   │   └── [id]/
│   │   │   ├── vendors/
│   │   │   ├── fleet/
│   │   │   ├── drivers/
│   │   │   ├── employees/
│   │   │   ├── sales/
│   │   │   ├── billing/
│   │   │   ├── finance/
│   │   │   ├── warehouse/
│   │   │   ├── routes/
│   │   │   ├── hrms/
│   │   │   ├── reports/
│   │   │   └── notifications/
│   │   │
│   │   ├── admin/             ← Admin settings
│   │   │   ├── layout.tsx
│   │   │   ├── users/
│   │   │   ├── roles/
│   │   │   ├── company/
│   │   │   ├── branches/
│   │   │   ├── tax-config/
│   │   │   ├── templates/
│   │   │   └── audit/
│   │   │
│   │   ├── customer/          ← Customer portal
│   │   │   ├── layout.tsx
│   │   │   ├── shipments/
│   │   │   ├── invoices/
│   │   │   └── tickets/
│   │   │
│   │   ├── vendor/            ← Vendor portal
│   │   │   ├── layout.tsx
│   │   │   ├── vehicles/
│   │   │   ├── trips/
│   │   │   └── payments/
│   │   │
│   │   └── api/
│   │       ├── auth/
│   │       │   ├── login/
│   │       │   ├── logout/
│   │       │   ├── me/
│   │       │   └── forgot-password/
│   │       ├── crm/
│   │       │   ├── shipments/
│   │       │   ├── customers/
│   │       │   ├── vendors/
│   │       │   ├── fleet/
│   │       │   ├── drivers/
│   │       │   ├── employees/
│   │       │   ├── billing/
│   │       │   ├── finance/
│   │       │   ├── sales/
│   │       │   ├── warehouse/
│   │       │   ├── reports/
│   │       │   └── notifications/
│   │       └── portal/
│   │           ├── customer/
│   │           └── vendor/
│   │
│   ├── components/
│   │   ├── ui/                ← Shared UI (existing + new)
│   │   ├── layout/           ← Website layout (existing)
│   │   ├── sections/         ← Website sections (existing)
│   │   ├── shared/           ← Shared components
│   │   ├── forms/            ← Website forms (existing)
│   │   └── crm/             ← ERP-specific components
│   │       ├── layout/
│   │       │   ├── sidebar.tsx
│   │       │   ├── topbar.tsx
│   │       │   ├── crm-layout.tsx
│   │       │   └── mobile-nav.tsx
│   │       ├── dashboard/
│   │       │   ├── stats-cards.tsx
│   │       │   ├── charts/
│   │       │   └── widgets/
│   │       ├── shipments/
│   │       │   ├── shipment-form.tsx
│   │       │   ├── shipment-table.tsx
│   │       │   ├── shipment-timeline.tsx
│   │       │   └── shipment-filters.tsx
│   │       ├── customers/
│   │       ├── fleet/
│   │       ├── drivers/
│   │       ├── employees/
│   │       ├── billing/
│   │       ├── sales/
│   │       ├── finance/
│   │       └── common/
│   │           ├── data-table.tsx
│   │           ├── search-bar.tsx
│   │           ├── filters.tsx
│   │           ├── export-button.tsx
│   │           ├── status-badge.tsx
│   │           ├── pagination.tsx
│   │           └── confirm-dialog.tsx
│   │
│   ├── lib/
│   │   ├── utils.ts          (existing)
│   │   ├── db.ts             (existing)
│   │   ├── email.ts          (existing)
│   │   ├── validations.ts    (existing)
│   │   ├── auth.ts           ← JWT + session management
│   │   ├── permissions.ts    ← RBAC checker
│   │   ├── generate-id.ts    ← Shipment number generator
│   │   └── pdf.ts            ← Invoice/CN PDF generation
│   │
│   ├── hooks/
│   │   ├── use-auth.ts
│   │   ├── use-permissions.ts
│   │   ├── use-debounce.ts
│   │   └── use-pagination.ts
│   │
│   ├── config/
│   │   ├── site.ts           (existing)
│   │   ├── navigation.ts     (existing)
│   │   ├── crm-navigation.ts ← CRM sidebar config
│   │   ├── permissions.ts    ← Permission definitions
│   │   └── constants.ts      ← Enums, status codes
│   │
│   ├── types/
│   │   ├── index.ts          (existing)
│   │   ├── auth.ts
│   │   ├── crm.ts            ← All CRM types
│   │   └── api.ts            ← API response types
│   │
│   └── styles/
│       └── globals.css       (existing)
│
├── prisma/
│   ├── schema.prisma         ← Extended with all ERP models
│   ├── seed.ts               ← Seed data (roles, permissions, admin)
│   └── migrations/
│
├── public/
│   ├── images/               (existing)
│   └── uploads/              ← Document uploads storage
│
└── docs/
    └── erp/
        ├── REQUIREMENTS.md
        ├── DATABASE-ERD.md
        ├── ROLES-PERMISSIONS.md
        ├── NAVIGATION.md
        └── FOLDER-STRUCTURE.md
```



---

## Key Architectural Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Route Groups | `(website)` for public pages | Keeps website layout separate from CRM layout |
| CRM Layout | `/crm/layout.tsx` | Sidebar + topbar for all CRM pages |
| Auth | Shared `/api/auth/` | Single login for all portals |
| Components | `/components/crm/` | Separate from website components |
| API Routes | `/api/crm/[module]` | RESTful, organized by module |
| Database | Single PostgreSQL | All modules share one DB |
| Permissions | Middleware + hook | Check on both server and client |

---

## Layout Strategy

```
Website pages   → Website layout (Header + Footer)
CRM pages       → CRM layout (Sidebar + Topbar)
Admin pages     → Admin layout (Sidebar + Topbar, admin theme)
Customer portal → Portal layout (Simple header + sidebar)
Vendor portal   → Portal layout (Simple header + sidebar)
Auth pages      → Minimal layout (centered card)
```

---

## File Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Pages | `page.tsx` | `/crm/shipments/page.tsx` |
| Layouts | `layout.tsx` | `/crm/layout.tsx` |
| Components | `kebab-case.tsx` | `shipment-table.tsx` |
| API Routes | `route.ts` | `/api/crm/shipments/route.ts` |
| Hooks | `use-name.ts` | `use-auth.ts` |
| Types | `camelCase.ts` | `crm.ts` |
| Config | `kebab-case.ts` | `crm-navigation.ts` |

---

*End of Folder Structure Document*
