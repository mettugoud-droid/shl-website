import { siteConfig } from '@/config/site';

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    foundingDate: '2014',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.contact.phone,
        contactType: 'customer service',
        email: siteConfig.contact.primaryEmail,
        availableLanguage: ['English', 'Hindi', 'Telugu'],
        areaServed: 'IN',
      },
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.contact.phone,
        contactType: 'sales',
        email: siteConfig.contact.primaryEmail,
        availableLanguage: ['English', 'Hindi', 'Telugu'],
        areaServed: 'IN',
      },
    ],
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.instagram,
    ],
    taxID: siteConfig.gst,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: siteConfig.name,
    image: `${siteConfig.url}/images/logo.png`,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.primaryEmail,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'H.No. 12-11-197/4, 2nd Floor, Warasiguda',
      addressLocality: 'Secunderabad',
      addressRegion: 'Telangana',
      postalCode: '500061',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 17.4399,
      longitude: 78.5058,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'State', name: 'Telangana' },
      { '@type': 'State', name: 'Andhra Pradesh' },
      { '@type': 'City', name: 'Hyderabad' },
      { '@type': 'City', name: 'Secunderabad' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema() {
  const services = [
    { name: 'Full Truck Load (FTL) Services', description: 'Dedicated full truck shipments across India with GPS tracking and on-time delivery guarantee.' },
    { name: 'Part Truck Load (PTL) Services', description: 'Cost-effective shared transport for smaller shipments with pan-India coverage.' },
    { name: 'Warehousing Solutions', description: 'Secure warehousing with inventory management, order fulfillment, and strategic locations.' },
    { name: 'Distribution Services', description: 'End-to-end product distribution with route optimization and real-time tracking.' },
    { name: 'Dedicated Fleet Services', description: 'Exclusive fleet deployed for your business operations without capital investment.' },
    { name: 'Supply Chain Management', description: 'Complete supply chain optimization from sourcing to delivery.' },
    { name: 'Last Mile Delivery', description: 'Doorstep delivery across 500+ cities with proof of delivery.' },
    { name: 'E-Commerce Logistics', description: 'Fulfillment services for online businesses including pick-pack-ship and returns management.' },
    { name: 'Express Cargo Services', description: 'Time-critical express deliveries with guaranteed transit times.' },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Logistics Services by Sri Harinath Logistics',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const faqs = [
    { question: 'What areas does Sri Harinath Logistics cover?', answer: 'SHL provides logistics services across all 28 states and 8 union territories of India, covering 500+ cities and 1000+ pin codes with primary hubs in Hyderabad and South India.' },
    { question: 'What types of vehicles do you operate?', answer: 'Our fleet includes mini trucks (1-3 tons), LCV (3-7 tons), ICV (7-15 tons), heavy trucks (15-25 tons), multi-axle vehicles (25-40 tons), and container trucks. All 450+ vehicles are GPS-tracked.' },
    { question: 'How quickly can I get a quote?', answer: 'We provide customized quotes within 2 hours during business hours (Mon-Sat, 9 AM - 7 PM). For urgent requirements, call +91 8008870661 directly.' },
    { question: 'Is Sri Harinath Logistics a GST registered company?', answer: 'Yes, SHL is fully GST registered with GST number 36ITMPS6428H1ZX. We provide proper tax invoices and all compliance documentation.' },
    { question: 'Do you provide real-time shipment tracking?', answer: 'Yes, all shipments are trackable in real-time. You receive a unique tracking ID upon booking to monitor shipment status, location, and estimated delivery time.' },
    { question: 'What industries do you specialize in?', answer: 'We serve FMCG, retail, manufacturing, pharmaceuticals, automotive, and e-commerce industries with specialized logistics solutions.' },
    { question: 'Do you offer warehousing services?', answer: 'Yes, we provide comprehensive warehousing including storage, inventory management, order fulfillment, cross-docking, and value-added services at strategic locations.' },
    { question: 'What is your on-time delivery rate?', answer: 'We maintain a 98% on-time delivery rate across all service categories through route optimization, real-time monitoring, and proactive communication.' },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url?: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        ...(item.url && { item: `${siteConfig.url}${item.url}` }),
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
