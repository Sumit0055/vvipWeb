import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://vviprajnagar.example.com"),
  title: {
    default: "VVIP Raj Nagar Brand Launch | Premium Flats in Raj Nagar Extension",
    template: "%s | VVIP Raj Nagar"
  },
  description:
    "VVIP Raj Nagar brand launch for premium flats near Raj Nagar Extension, Duhai, NH-24, Noida and Delhi NCR with modern amenities and site visit support.",
  keywords: [
    "VVIP Raj Nagar",
    "VVIP Raj Nagar Extension",
    "Raj Nagar Extension flats",
    "property in Raj Nagar",
    "Duhai property",
    "NH-24 flats",
    "Noida Delhi NCR property",
    "Ghaziabad real estate",
    "premium flats Raj Nagar Extension",
    "luxury apartments NH-24",
    "VVIP Raj Nagar launch",
    "VVIP flats Raj Nagar"
  ],
  authors: [{ name: "VVIP Raj Nagar" }],
  creator: "VVIP Raj Nagar",
  publisher: "VVIP Raj Nagar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title: "VVIP Raj Nagar Brand Launch | Premium Flats in Raj Nagar Extension",
    description:
      "Premium VVIP Raj Nagar brand launch for Raj Nagar Extension, Duhai, NH-24, Noida and Delhi NCR buyers.",
    url: "https://vviprajnagar.example.com",
    siteName: "VVIP Raj Nagar",
    images: [
      {
        url: "/vvip-launch-flat.svg",
        width: 1600,
        height: 1050,
        alt: "VVIP Raj Nagar premium real estate project"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "VVIP Raj Nagar Brand Launch | Premium Flats in Raj Nagar Extension",
    description:
      "VVIP Raj Nagar project near Raj Nagar Extension, Duhai, NH-24, Noida and Delhi NCR."
  },
  alternates: {
    canonical: "https://vviprajnagar.example.com"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
