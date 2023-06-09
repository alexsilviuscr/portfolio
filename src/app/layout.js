import "./globals.scss";
import Footer from "@/components/Footer/Footer";
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: `Alex Silviu's Portfolio`,
  description: `Alex Silviu's portfolio showcasing UX/UI designs and front-end development projects.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
