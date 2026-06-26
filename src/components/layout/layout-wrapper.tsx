'use client';

import { usePathname } from 'next/navigation';
import { Header } from './header';
import { Footer } from './footer';
import { WhatsAppButton } from './whatsapp-button';

const NON_WEBSITE_PATHS = ['/crm', '/admin', '/customer', '/vendor', '/login'];

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isWebsite = !NON_WEBSITE_PATHS.some((path) => pathname.startsWith(path));

  if (!isWebsite) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
