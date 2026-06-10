import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { PageHero } from '@/components/shared/page-hero';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Sri Harinath Logistics services. Please read these terms carefully before using our services.',
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services."
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
      />

      <section className="section-padding bg-white">
        <Container size="sm">
          <div className="prose prose-gray max-w-none">
            <p className="text-body-md text-gray-600 mb-6">
              <strong>Effective Date:</strong> January 1, 2025
            </p>

            <p className="text-body-md text-gray-600 mb-6">
              These Terms and Conditions (&quot;Terms&quot;) govern your use of the services provided by Sri Harinath Logistics (&quot;SHL,&quot; &quot;Company,&quot; &quot;we,&quot; &quot;us&quot;), GST No. {siteConfig.gst}, headquartered at {siteConfig.address.full}. By booking our services or using our website, you agree to these Terms.
            </p>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">1. Services</h2>
            <p className="text-body-md text-gray-600 mb-4">
              SHL provides transportation, logistics, warehousing, distribution, and supply chain management services across India. Specific service terms, transit times, and pricing are provided in individual quotations and service agreements.
            </p>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">2. Booking & Confirmation</h2>
            <ul className="list-disc pl-6 text-body-md text-gray-600 space-y-2 mb-6">
              <li>Bookings are confirmed upon acceptance of quotation and receipt of shipment details.</li>
              <li>Pickup and delivery dates are estimates and may be subject to operational factors.</li>
              <li>SHL reserves the right to refuse shipments that violate legal or safety regulations.</li>
              <li>Client must provide accurate weight, dimensions, and content description of cargo.</li>
            </ul>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">3. Pricing & Payment</h2>
            <ul className="list-disc pl-6 text-body-md text-gray-600 space-y-2 mb-6">
              <li>Prices quoted are based on information provided by the client. Actual charges may vary if shipment details differ.</li>
              <li>All prices are exclusive of GST unless specified otherwise.</li>
              <li>Payment terms are as agreed in the quotation (advance, COD, or credit terms).</li>
              <li>Late payment may attract interest at 2% per month on outstanding amounts.</li>
              <li>SHL reserves the right to hold cargo until pending payments are cleared.</li>
            </ul>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">4. Client Responsibilities</h2>
            <ul className="list-disc pl-6 text-body-md text-gray-600 space-y-2 mb-6">
              <li>Provide accurate and complete shipment information including weight, contents, and value.</li>
              <li>Ensure goods are properly packed and labeled for transport.</li>
              <li>Obtain all necessary permits, licenses, and documentation for the goods.</li>
              <li>Ensure goods do not contain prohibited, illegal, or hazardous materials without prior declaration.</li>
              <li>Provide accessible pickup and delivery locations during agreed time windows.</li>
            </ul>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">5. Prohibited Goods</h2>
            <p className="text-body-md text-gray-600 mb-4">SHL does not transport:</p>
            <ul className="list-disc pl-6 text-body-md text-gray-600 space-y-2 mb-6">
              <li>Illegal or contraband goods</li>
              <li>Explosives, firearms, or ammunition</li>
              <li>Hazardous materials without proper declaration and permits</li>
              <li>Perishable goods without appropriate packaging and disclosure</li>
              <li>Live animals</li>
              <li>Currency, bullion, or precious stones (without declared value insurance)</li>
            </ul>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">6. Liability & Claims</h2>
            <ul className="list-disc pl-6 text-body-md text-gray-600 space-y-2 mb-6">
              <li>SHL liability for loss or damage is limited to the declared value of goods or as per insurance coverage, whichever is applicable.</li>
              <li>Claims for damage or shortage must be reported within 24 hours of delivery with photographic evidence.</li>
              <li>Written claims must be filed within 7 days of delivery for processing.</li>
              <li>SHL is not liable for delays caused by natural disasters, strikes, road blocks, government regulations, or other force majeure events.</li>
              <li>SHL is not liable for damage due to inadequate packaging by the client.</li>
            </ul>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">7. Insurance</h2>
            <p className="text-body-md text-gray-600 mb-6">
              Basic transit insurance is included with all shipments. Clients are advised to declare the full value of goods and opt for comprehensive cargo insurance for high-value shipments. Additional insurance can be arranged at applicable premiums.
            </p>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">8. Cancellation & Refunds</h2>
            <ul className="list-disc pl-6 text-body-md text-gray-600 space-y-2 mb-6">
              <li>Cancellations made 24 hours before scheduled pickup: Full refund</li>
              <li>Cancellations made within 24 hours of pickup: 50% charge may apply</li>
              <li>Cancellations after pickup: Full charges apply</li>
              <li>Refunds are processed within 7-10 business days</li>
            </ul>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">9. Warehousing Terms</h2>
            <ul className="list-disc pl-6 text-body-md text-gray-600 space-y-2 mb-6">
              <li>Warehousing charges are billed monthly as per agreed rates.</li>
              <li>Client must provide accurate inventory manifests at the time of inward.</li>
              <li>SHL is not liable for natural degradation of goods during storage.</li>
              <li>Goods unclaimed for 90 days after contract termination may be disposed of with written notice.</li>
            </ul>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">10. Intellectual Property</h2>
            <p className="text-body-md text-gray-600 mb-6">
              All content on this website including text, graphics, logos, and software is the property of Sri Harinath Logistics and is protected by Indian copyright laws. Unauthorized use or reproduction is prohibited.
            </p>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">11. Dispute Resolution</h2>
            <p className="text-body-md text-gray-600 mb-6">
              Any disputes arising from these terms or our services shall be resolved through mutual discussion first. If unresolved, disputes shall be subject to the jurisdiction of courts in Secunderabad, Telangana, India. The governing law shall be Indian law.
            </p>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">12. Amendments</h2>
            <p className="text-body-md text-gray-600 mb-6">
              SHL reserves the right to update these Terms at any time. Changes will be posted on this page with the updated effective date. Continued use of our services after changes constitutes acceptance of revised terms.
            </p>

            <h2 className="text-heading-lg font-heading font-bold text-primary mt-10 mb-4">13. Contact</h2>
            <p className="text-body-md text-gray-600 mb-4">
              For questions regarding these Terms, contact us:
            </p>
            <div className="p-6 bg-accent rounded-2xl border border-gray-100">
              <p className="text-body-md text-gray-700"><strong>Sri Harinath Logistics</strong></p>
              <p className="text-body-sm text-gray-600 mt-2">{siteConfig.address.full}</p>
              <p className="text-body-sm text-gray-600 mt-1">Phone: {siteConfig.contact.phone}</p>
              <p className="text-body-sm text-gray-600 mt-1">Email: {siteConfig.contact.secondaryEmail}</p>
              <p className="text-body-sm text-gray-600 mt-1">GST: {siteConfig.gst}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
