import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/shared/nav-bar";
import { navbarData } from "@/data/navbar-data";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/lib/auth-context";
import { BetaBanner } from "@/components/shared/beta-banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chhoto.co"),
  title: "Chhoto - Smart URL Shortener, Custom Branded Links & Analytics",
  description: "Chhoto is a minimalist, lightning-fast URL shortener. Create custom branded links, generate dynamic QR codes, and track analytics in real-time.",
  keywords: [
    "url shortener",
    "link shortener",
    "custom url",
    "branded links",
    "short link generator",
    "link analytics",
    "free url shortener",
    "qr code generator",
    "chhoto",
    "custom redirects",
    "fast redirect engine"
  ],
  authors: [{ name: "Chhoto Team" }],
  creator: "Chhoto",
  publisher: "Chhoto",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://chhoto.co",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chhoto.co",
    title: "Chhoto - Smart URL Shortener, Custom Branded Links & Analytics",
    description: "Chhoto is a minimalist, lightning-fast URL shortener. Create custom branded links, generate dynamic QR codes, and track analytics in real-time.",
    siteName: "Chhoto",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 675,
        alt: "Chhoto URL Shortener Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chhoto - Smart URL Shortener, Custom Branded Links & Analytics",
    description: "Chhoto is a minimalist, lightning-fast URL shortener. Create custom branded links, generate dynamic QR codes, and track analytics in real-time.",
    creator: "@chhoto",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code-placeholder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'system';
                  var resolved = theme;
                  if (theme === 'system') {
                    resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  if (resolved === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Chhoto URL Shortener",
              "url": "https://chhoto.co",
              "logo": "https://chhoto.co/chhoto-logo.png",
              "image": "https://chhoto.co/og-image.jpg",
              "description": "Transform long URLs into short, trackable, and branded links with lightning-fast edge-powered redirects.",
              "operatingSystem": "All",
              "applicationCategory": "UtilitiesApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Custom branded links",
                "Lightning-fast edge redirects",
                "Dynamic QR codes",
                "Detailed link analytics",
                "Free URL shortening"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-250">
        <ThemeProvider>
          <AuthProvider>
            <NavBar items={navbarData} />
            {children}
            <BetaBanner />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

