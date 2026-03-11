import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://isartal-bau.de"),
  title: {
    default: "ISARTAL Bau & Elektrotechnik",
    template: "%s | ISARTAL Bau & Elektrotechnik",
  },
  description:
    "ISARTAL bietet Elektrotechnik, Trockenbau und Baustellenservice in München und Umgebung.",
  applicationName: "ISARTAL Bau & Elektrotechnik",
  keywords: [
    "Elektrotechnik München",
    "Trockenbau München",
    "Baustellenservice München",
    "Innenausbau München",
    "Elektroinstallation München",
  ],
  authors: [{ name: "ISARTAL Bau & Elektrotechnik" }],
  creator: "ISARTAL Bau & Elektrotechnik",
  publisher: "ISARTAL Bau & Elektrotechnik",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://isartal-bau.de",
    siteName: "ISARTAL Bau & Elektrotechnik",
    title: "ISARTAL Bau & Elektrotechnik",
    description:
      "Elektrotechnik, Trockenbau und Baustellenservice in München und Umgebung.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ISARTAL Bau & Elektrotechnik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISARTAL Bau & Elektrotechnik",
    description:
      "Elektrotechnik, Trockenbau und Baustellenservice in München und Umgebung.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="bg-white text-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}