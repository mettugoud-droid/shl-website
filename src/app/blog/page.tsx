import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { PageHero } from '@/components/shared/page-hero';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Logistics insights, industry trends, and supply chain tips from Sri Harinath Logistics. Stay updated with the latest in Indian logistics.',
  keywords: [
    'logistics blog',
    'supply chain articles',
    'transport industry news',
    'logistics tips india',
    'freight management blog',
  ],
};

const featuredPosts = [
  {
    title: 'How to Choose the Right Logistics Partner for Your Business',
    excerpt: 'Selecting a logistics partner is a critical business decision. Learn the key factors to evaluate – from fleet size and network coverage to technology capabilities and compliance standards.',
    category: 'Guides',
    date: 'December 15, 2024',
    author: 'SHL Team',
    slug: 'how-to-choose-logistics-partner',
  },
  {
    title: 'FTL vs PTL: Which Shipping Mode is Right for Your Cargo?',
    excerpt: 'Understanding when to choose Full Truck Load over Part Truck Load can save you up to 40% on logistics costs. We break down the decision criteria with real examples.',
    category: 'Education',
    date: 'November 28, 2024',
    author: 'SHL Team',
    slug: 'ftl-vs-ptl-comparison',
  },
  {
    title: 'Top 10 Ways to Reduce Transportation Costs in 2025',
    excerpt: 'Rising fuel prices and increasing demand are pushing logistics costs up. Here are 10 proven strategies that businesses across India are using to keep transportation budgets in check.',
    category: 'Cost Optimization',
    date: 'November 10, 2024',
    author: 'SHL Team',
    slug: 'reduce-transportation-costs',
  },
  {
    title: 'The Complete Guide to Warehousing Solutions in India',
    excerpt: 'From owned warehouses to third-party logistics (3PL) providers – understand your warehousing options, costs, and how to choose the right model for your business scale.',
    category: 'Warehousing',
    date: 'October 22, 2024',
    author: 'SHL Team',
    slug: 'warehousing-solutions-guide-india',
  },
  {
    title: 'How GPS Tracking is Revolutionizing Indian Logistics',
    excerpt: 'Real-time GPS tracking has transformed logistics operations in India. Learn how fleet management technology improves delivery reliability, reduces costs, and enhances customer satisfaction.',
    category: 'Technology',
    date: 'October 5, 2024',
    author: 'SHL Team',
    slug: 'gps-tracking-logistics-india',
  },
  {
    title: 'Understanding GST Compliance for Logistics Companies',
    excerpt: 'Navigate the complexities of GST in transportation and logistics. A comprehensive guide to e-way bills, tax invoicing, input tax credit, and compliance requirements.',
    category: 'Compliance',
    date: 'September 18, 2024',
    author: 'SHL Team',
    slug: 'gst-compliance-logistics',
  },
];

const categories = [
  'All',
  'Guides',
  'Education',
  'Cost Optimization',
  'Warehousing',
  'Technology',
  'Compliance',
  'Industry News',
  'Supply Chain',
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="SHL Logistics Blog"
        subtitle="Industry insights, logistics tips, and supply chain strategies to help your business move smarter, faster, and more efficiently."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="section-padding bg-white">
        <Container>
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                  category === 'All'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-secondary hover:text-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <article
                key={post.slug}
                className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-secondary/20 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
              >
                {/* Category */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 bg-secondary/10 text-secondary-700 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-heading-sm font-heading font-semibold text-primary mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-body-sm text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-gray-400 pt-4 border-t border-gray-100">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-12 text-center p-8 bg-accent rounded-2xl border border-gray-100">
            <h3 className="text-heading-md font-heading font-semibold text-primary mb-2">
              More Articles Coming Soon
            </h3>
            <p className="text-body-sm text-gray-600 max-w-md mx-auto">
              Our team is working on comprehensive logistics guides, industry analysis, and practical tips to help your business. Stay tuned!
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
