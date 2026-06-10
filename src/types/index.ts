export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface Service {
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
}

export interface Statistic {
  id: number;
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

export interface Industry {
  title: string;
  slug: string;
  description: string;
  icon: string;
}

export interface FleetVehicle {
  type: string;
  capacity: string;
  description: string;
  count: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  mobile: string;
  email: string;
  subject: string;
  message: string;
}

export interface QuoteFormData {
  companyName: string;
  contactPerson: string;
  mobile: string;
  email: string;
  pickupLocation: string;
  deliveryLocation: string;
  shipmentType: string;
  vehicleRequirement: string;
  monthlyVolume: string;
  message: string;
}

export interface Lead {
  id: string;
  type: 'contact' | 'quote';
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject?: string;
  message: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: Date;
  featured: boolean;
}
