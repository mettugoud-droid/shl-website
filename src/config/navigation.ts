export const mainNavigation = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Us',
    href: '/about',
  },
  {
    title: 'Services',
    href: '/services',
    children: [
      { title: 'Full Truck Load (FTL)', href: '/services/ftl', description: 'Dedicated full truck shipments for large consignments' },
      { title: 'Part Truck Load (PTL)', href: '/services/ptl', description: 'Cost-effective shared transport for smaller loads' },
      { title: 'Warehousing Solutions', href: '/services/warehousing', description: 'Secure storage and inventory management' },
      { title: 'Distribution Services', href: '/services/distribution', description: 'End-to-end product distribution across India' },
      { title: 'Dedicated Fleet Services', href: '/services/dedicated-fleet', description: 'Exclusive fleet for your business operations' },
      { title: 'Supply Chain Management', href: '/services/supply-chain', description: 'Complete supply chain optimization' },
      { title: 'Last Mile Delivery', href: '/services/last-mile', description: 'Final leg delivery to end customers' },
      { title: 'E-Commerce Logistics', href: '/services/ecommerce', description: 'Specialized fulfillment for online businesses' },
      { title: 'Express Cargo Services', href: '/services/express-cargo', description: 'Time-critical express deliveries nationwide' },
    ],
  },
  {
    title: 'Industries',
    href: '/industries',
  },
  {
    title: 'Network',
    href: '/network',
  },
  {
    title: 'Fleet',
    href: '/fleet',
  },
  {
    title: 'Tracking',
    href: '/tracking',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export const footerNavigation = {
  services: [
    { title: 'Full Truck Load (FTL)', href: '/services/ftl' },
    { title: 'Part Truck Load (PTL)', href: '/services/ptl' },
    { title: 'Warehousing Solutions', href: '/services/warehousing' },
    { title: 'Distribution Services', href: '/services/distribution' },
    { title: 'Dedicated Fleet Services', href: '/services/dedicated-fleet' },
    { title: 'Supply Chain Management', href: '/services/supply-chain' },
    { title: 'Last Mile Delivery', href: '/services/last-mile' },
    { title: 'E-Commerce Logistics', href: '/services/ecommerce' },
    { title: 'Express Cargo Services', href: '/services/express-cargo' },
  ],
  company: [
    { title: 'About Us', href: '/about' },
    { title: 'Industries Served', href: '/industries' },
    { title: 'Network Coverage', href: '/network' },
    { title: 'Fleet Management', href: '/fleet' },
    { title: 'Careers', href: '/careers' },
    { title: 'Blog', href: '/blog' },
    { title: 'FAQ', href: '/faq' },
  ],
  support: [
    { title: 'Contact Us', href: '/contact' },
    { title: 'Request Quote', href: '/request-quote' },
    { title: 'Shipment Tracking', href: '/tracking' },
    { title: 'Privacy Policy', href: '/privacy-policy' },
    { title: 'Terms & Conditions', href: '/terms' },
  ],
} as const;
