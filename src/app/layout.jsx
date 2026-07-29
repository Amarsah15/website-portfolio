import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.growowl.online"),
  title: "GrowOwl | Digital Agency",
  description:
    "GrowOwl is a premier freelance website builder and custom full stack developer. We design and build high-performance React websites, custom database backends, MERN stack apps, and digital experiences that drive growth and rank high on search engines.",
  keywords: [
    "freelance website builder",
    "freelance full stack developer",
    "full stack web developer",
    "hire freelance full stack developer",
    "freelance web developer",
    "freelance portfolio builder",
    "MERN stack developer",
    "Node.js developer",
    "custom website developer",
    "freelance web designer",
    "react website developer",
    "bespoke website builder India",
    "hire website developer",
    "database developer",
  ],
  authors: [{ name: "GrowOwl Studio", url: "https://www.growowl.online" }],
  creator: "GrowOwl",
  publisher: "GrowOwl",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.growowl.online/",
  },
  openGraph: {
    type: "website",
    url: "https://www.growowl.online/",
    title: "GrowOwl | Digital Agency",
    description:
      "Bespoke freelance website builder and full stack developer crafting premium digital experiences that rank high and move the needle for growing brands.",
    siteName: "GrowOwl",
    images: [
      {
        url: "https://www.growowl.online/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "GrowOwl | Digital Agency",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://www.growowl.online/",
    title: "GrowOwl | Digital Agency",
    description:
      "Bespoke freelance website builder and full stack developer crafting premium digital experiences that rank high and move the needle for growing brands.",
    images: ["https://www.growowl.online/images/hero.webp"],
  },
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
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
};

export const viewport = {
  themeColor: "#ebe8e4",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "GrowOwl",
  image: "https://www.growowl.online/images/hero.webp",
  "@id": "https://www.growowl.online/#service",
  url: "https://www.growowl.online",
  telephone: "+918609504186",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.5726,
    longitude: 88.3639,
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: ["https://www.instagram.com/growowl_"],
  description:
    "Premium freelance website builder and custom full stack developer designing bold web apps, backend databases, and campaigns that move the needle.",
  knowsAbout: [
    "Freelance Website Builder",
    "Full Stack Development",
    "MERN Stack Developer",
    "Node.js & MongoDB",
    "Web Development",
    "UI/UX Design",
    "React Development",
    "SEO Optimization",
    "E-commerce Website Building",
    "Custom Portfolios",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-cream text-ink" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
