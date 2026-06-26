import { Header } from './header';
import { Footer } from './footer';
import { WhatsAppButton } from './whatsapp-button';
import {
  OrganizationSchema,
  LocalBusinessSchema,
  ServiceSchema,
  FAQSchema,
} from '@/components/shared/schema-markup';

export function WebsiteWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <ServiceSchema />
      <FAQSchema />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
