import { Metadata } from 'next';
import { inter } from "@/app/ui/fonts";

import "@/app/ui/globals.css";

export const metadata: Metadata = {
  title: '%s | Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " antialiased"}>{children}</body>
    </html>
  );
}
