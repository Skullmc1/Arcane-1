import "aos/dist/aos.css";
import { Metadata } from "next";
import "./globals.css";
import { Rajdhani, Chakra_Petch } from "next/font/google";
import { AuthProvider } from "./context/AuthContext";
import Navigation from "./components/Navigation"; // Import the Navigation component
import CursorWeb from "./components/CursorWeb"; // Import the CursorWeb component

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra-petch",
});

// Enhanced SEO Metadata
export const metadata: Metadata = {
  title: "RICHMUN Jr 2025 | Richmond College Model United Nations",
  description:
    "Join RICHMUN Jr 2025, the premier Model United Nations conference for juniors, organized by Richmond College, Galle, Sri Lanka. Develop diplomacy, leadership, and public speaking skills in a global simulation.",
  keywords: [
    "RICHMUN",
    "Richmond College",
    "Model United Nations",
    "MUN",
    "Galle",
    "Sri Lanka",
    "RICHMUN Jr 2025",
    "Junior MUN",
    "Youth Conference",
  ],
  openGraph: {
    title: "RICHMUN Jr 2025 | Richmond College Model United Nations",
    description:
      "Join RICHMUN Jr 2025, the premier Model United Nations conference for juniors, organized by Richmond College, Galle, Sri Lanka. Develop diplomacy, leadership, and public speaking skills in a global simulation.",
    type: "website",
    url: "https://richmun.org", // Replace with your actual website URL
    siteName: "RICHMUN Jr 2025",
    images: [
      {
        url: "https://richmun.org/og-image.jpg", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "RICHMUN Jr 2025 Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RICHMUN Jr 2025 | Richmond College Model United Nations",
    description:
      "Join RICHMUN Jr 2025, the premier Model United Nations conference for juniors, organized by Richmond College, Galle, Sri Lanka. Develop diplomacy, leadership, and public speaking skills in a global simulation.",
    images: ["https://richmun.org/twitter-image.jpg"], // Replace with your actual Twitter image URL
  },
  metadataBase: new URL("https://richmun.org"), // Replace with your actual website URL
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${chakraPetch.variable}`}>
      <head>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <AuthProvider>
          {/* Include the Navigation component */}
          <Navigation />

          {/* Include the CursorWeb component */}
          <CursorWeb />

          {/* Render the page content */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
