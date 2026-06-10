import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { PageHero } from '@/components/shared/page-hero';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy of Sri Harinath Logistics. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="section-padding bg-white">
        <Container size="sm">
          <div className="prose prose-gray max-w-none">
            <p className="text-body-md text-gray-600 mb-6">
              <strong>Last Updated:</strong> January 1, 2025
            </p>

            <p className="text-body-md text-gray-600 mb-6">
              Sri Harinath Logistics (&quot;SHL,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at {siteConfig.domain} or use our services.
            </p>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">1. Information We Collect</h2>

            <h3 className="text-heading-sm font-heading font-semibold text-primary mt-6 mb-3">Personal Information</h3>
            <p className="text-body-md text-gray-600 mb-4">When you use our services or submit forms on our website, we may collect:</p>
            <ul className="list-disc pl-6 text-body-md text-gray-600 space-y-2 mb-6">
              <li>Full name and designation</li>
              <li>Company name and GST number</li>
              <li>Email address and phone number</li>
              <li>Pickup and delivery addresses</li>
              <li>Shipment details and cargo information</li>
              <li>Payment and billing information</li>
            </ul>

            <h3 className="text-heading-sm font-heading font-semibold text-primary mt-6 mb-3">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-body-md text-gray-600 space-y-2 mb-6">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring URL and exit pages</li>
              <li>Cookies and tracking pixels</li>
            </ul>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">2. How We Use Your Information</h2>
            <p className="text-body-md text-gray-600 mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 text-body-md text-gray-600 space-y-2 mb-6">
              <li>Process your shipment bookings and quote requests</li>
              <li>Provide real-time tracking and delivery updates</li>
              <li>Send booking confirmations and invoices</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Improve our services, website, and user experience</li>
              <li>Send relevant service updates and offers (with consent)</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Prevent fraud and ensure security</li>
            </ul>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">3. Information Sharing</h2>
            <p className="text-body-md text-gray-600 mb-4">We do not sell or rent your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 text-body-md text-gray-600 space-y-2 mb-6">
              <li><strong>Service Partners:</strong> Transport partners and drivers assigned to your shipment (limited to delivery details only)</li>
              <li><strong>Technology Providers:</strong> Hosting, email, and analytics services that support our operations</li>
              <li><strong>Legal Authorities:</strong> When required by law, court order, or government regulation</li>
              <li><strong>Business Transfers:</strong> In the event of merger, acquisition, or asset sale</li>
            </ul>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">4. Data Security</h2>
            <p className="text-body-md text-gray-600 mb-6">
              We implement industry-standard security measures to protect your information, including encrypted data transmission (SSL/TLS), secure servers, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">5. Cookies</h2>
            <p className="text-body-md text-gray-600 mb-6">
              Our website uses cookies to enhance your browsing experience, analyze traffic, and personalize content. You can control cookie settings through your browser preferences. Disabling cookies may limit certain features of our website.
            </p>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">6. Your Rights</h2>
            <p className="text-body-md text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-body-md text-gray-600 space-y-2 mb-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">7. Data Retention</h2>
            <p className="text-body-md text-gray-600 mb-6">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Shipment records are retained for a minimum of 7 years as per Indian tax regulations.
            </p>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">8. Third-Party Links</h2>
            <p className="text-body-md text-gray-600 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to read the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-body-md text-gray-600 mb-6">
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">10. Changes to This Policy</h2>
            <p className="text-body-md text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. The updated version will be indicated by the &quot;Last Updated&quot; date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">11. Contact Us</h2>
            <p className="text-body-md text-gray-600 mb-4">
              If you have questions about this Privacy Policy or wish to exercise your rights, contact us:
            </p>
            <div className="p-6 bg-accent rounded-2xl border border-gray-100">
              <p className="text-body-md text-gray-700"><strong>Sri Harinath Logistics</strong></p>
              <p className="text-body-sm text-gray-600 mt-2">{siteConfig.address.full}</p>
              <p className="text-body-sm text-gray-600 mt-1">Phone: {siteConfig.contact.phone}</p>
              <p className="text-body-sm text-gray-600 mt-1">Email: {siteConfig.contact.secondaryEmail}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
