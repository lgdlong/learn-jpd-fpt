import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/kanji.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "Japanese Vocabulary App",
  description: "Learn and manage Japanese words easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7GPK06F5P5"
          strategy="afterInteractive"
        />
        <script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7GPK06F5P5', { page_path: window.location.pathname });
            `,
          }}
        />
      </head>
      <body>
        <Analytics />
        <Navbar />
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
