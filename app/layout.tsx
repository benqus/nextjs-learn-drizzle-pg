import { inter } from "@/app/ui/fonts";

import "@/app/ui/globals.css";

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
