import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://duttstate.in"),
  title: {
    default: "VVIP New Project Raj Nagar Extension | Madhuban Bapudham NH-58",
    template: "%s | VVIP New Project Raj Nagar Extension"
  },
  description:
    "VVIP New Project Raj Nagar Extension, Madhuban Bapudham NH-58, near RRTS Duhai Metro Station. 2, 3 and 4 BHK luxury residences with pre-launch offer.",
  keywords: [
    "VVIP New Project Raj Nagar Extension",
    "VVIP Madhuban Bapudham",
    "VVIP NH-58 Ghaziabad",
    "VVIP flats Ghaziabad",
    "Raj Nagar Extension flats",
    "Madhuban Bapudham flats",
    "RRTS Duhai Metro Station property",
    "2 BHK Raj Nagar Extension",
    "3 BHK Raj Nagar Extension",
    "4 BHK Raj Nagar Extension"
  ],
  authors: [{ name: "DuttState" }],
  creator: "DuttState",
  publisher: "DuttState",
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
    title: "VVIP New Project Raj Nagar Extension",
    description:
      "Premium residences at Madhuban Bapudham NH-58, near RRTS Duhai Metro Station.",
    url: "https://duttstate.in",
    siteName: "VVIP New Project Raj Nagar Extension",
    images: [
      {
        url: "/duttstate-launch-flat.svg",
        width: 1600,
        height: 1050,
        alt: "VVIP New Project Raj Nagar Extension"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "VVIP New Project Raj Nagar Extension",
    description:
      "2, 3 and 4 BHK luxury residences at Madhuban Bapudham NH-58, Ghaziabad."
  },
  alternates: {
    canonical: "https://duttstate.in"
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Ghaziabad",
    "geo.position": "28.6692;77.4538",
    ICBM: "28.6692, 77.4538"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
