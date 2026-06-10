import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be under 100 characters'),
  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  subject: z
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .max(200, 'Subject must be under 200 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be under 2000 characters'),
});

export const quoteFormSchema = z.object({
  companyName: z
    .string()
    .min(2, 'Company name must be at least 2 characters')
    .max(150, 'Company name must be under 150 characters'),
  contactPerson: z
    .string()
    .min(2, 'Contact person name must be at least 2 characters')
    .max(100, 'Name must be under 100 characters'),
  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  pickupLocation: z
    .string()
    .min(2, 'Pickup location is required')
    .max(200, 'Location must be under 200 characters'),
  deliveryLocation: z
    .string()
    .min(2, 'Delivery location is required')
    .max(200, 'Location must be under 200 characters'),
  shipmentType: z
    .string()
    .min(1, 'Please select a shipment type'),
  vehicleRequirement: z
    .string()
    .min(1, 'Please select a vehicle type'),
  monthlyVolume: z
    .string()
    .min(1, 'Please select monthly volume'),
  message: z
    .string()
    .max(2000, 'Message must be under 2000 characters')
    .optional()
    .or(z.literal('')),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type QuoteFormData = z.infer<typeof quoteFormSchema>;

export const shipmentTypeOptions = [
  { value: 'ftl', label: 'Full Truck Load (FTL)' },
  { value: 'ptl', label: 'Part Truck Load (PTL)' },
  { value: 'express', label: 'Express Cargo' },
  { value: 'warehousing', label: 'Warehousing' },
  { value: 'distribution', label: 'Distribution' },
  { value: 'ecommerce', label: 'E-Commerce Logistics' },
  { value: 'last-mile', label: 'Last Mile Delivery' },
  { value: 'supply-chain', label: 'Supply Chain' },
  { value: 'other', label: 'Other' },
];

export const vehicleOptions = [
  { value: 'mini-truck', label: 'Mini Truck (1-3 Tons)' },
  { value: 'lcv', label: 'LCV (3-7 Tons)' },
  { value: 'icv', label: 'ICV (7-15 Tons)' },
  { value: 'heavy-truck', label: 'Heavy Truck (15-25 Tons)' },
  { value: 'multi-axle', label: 'Multi-Axle (25-40 Tons)' },
  { value: 'container', label: 'Container Truck (20-40 ft)' },
  { value: 'any', label: 'Any / Recommend Best' },
];

export const volumeOptions = [
  { value: '1-5', label: '1-5 Shipments' },
  { value: '6-20', label: '6-20 Shipments' },
  { value: '21-50', label: '21-50 Shipments' },
  { value: '51-100', label: '51-100 Shipments' },
  { value: '100+', label: '100+ Shipments' },
  { value: 'dedicated', label: 'Dedicated Fleet Required' },
];
