import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { searchDocumentation } from "./search";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaif UI - Build Beautiful Interfaces at Lightning Speed",
  description:
    "Explore a vast library of beautifully crafted, animated components. Save development time, enhance user experience, and build visually stunning interfaces at lightning speed.",
  icons: {
    icon: "/favicon/favicon.ico",
  },
  keywords: [
    "Kaif UI",
    "React component library",
    "ShadCN UI",
    "Framer Motion",
    "UI components",
    "Web development",
    "Frontend library",
    "Animated components",
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffffff",
  authors: [
    {
      name: "Muhammad Kaif Nazeer",
      url: "https://muhammadkaifnazeer.netlify.app/",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://kaif-ui.vercel.app/",
    title: "Kaif UI - Build Beautiful Interfaces at Lightning Speed",
    description:
      "Explore a vast library of beautifully crafted, animated components. Save development time, enhance user experience, and build visually stunning interfaces at lightning speed.",
    siteName: "Kaif UI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kaif UI - Build Beautiful Interfaces at Lightning Speed",
      },
    ],
  },
  alternates: {
    canonical: "https://kaif-ui.vercel.app/",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="BMjfJbsMp6GG5QSG95rO9IVgptLFSYxt1J1HaHa4aOU"
        />
      </head>
      <body>
      <RootProvider
          search={{
            links: [
              ['Home', '/'],
              ['Docs', '/docs'],
            ],
          }}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Analytics />
            {children}
          </ThemeProvider>
        </RootProvider>
      </body>
    </html>
  );
}
