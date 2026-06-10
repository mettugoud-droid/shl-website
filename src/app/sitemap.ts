import type { MetadataRoute } from 'next';

const BASE_URL = 'https://sriharinathlogistics.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const services = [
    'ftl',
    'ptl',
    'warehousing',
    'distribution',
    'dedicated-fleet',
    'supply-chain',
    'last-mile',
    'ecommerce',
    'express-cargo',
  ];

  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/industries', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/network', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/fleet', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/tracking', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/request-quote', priority: 0.95, changeFrequency: 'monthly' as const },
    { url: '/careers', priority: 0.6, changeFrequency: 'weekly' as const },
    { url: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const servicePages = services.map((slug) => ({
    url: `/services/${slug}`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
  }));

  const allPages = [...staticPages, ...servicePages];

  return allPages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
