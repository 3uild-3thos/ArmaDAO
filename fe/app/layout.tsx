// metadata
import meta from "@/lib/metadata.json";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

// font
import localFont from "next/font/local";

// styles
import "@/app/globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";

// provider
import { WalletConnectProvider } from "@/lib/providers";

// components
import { Navbar } from "@/app/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const gordita = localFont({
  src: [
    {
      path: "../fonts/gordita/Gordita-Light.otf",
      weight: "300",
    },
    {
      path: "../fonts/gordita/Gordita-Regular.otf",
      weight: "400",
    },
    {
      path: "../fonts/gordita/Gordita-Medium.otf",
      weight: "500",
    },
    {
      path: "../fonts/gordita/Gordita-Bold.otf",
      weight: "600",
    },
    {
      path: "../fonts/gordita/Gordita-Black.otf",
      weight: "700",
    },
  ],
  variable: "--font-gordita",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_HOST_URL ?? ""),
  title: {
    default: meta.longName,
    template: `%s - ${meta.longName}`,
  },
  description: meta.description,
  keywords: meta.keywords,
  openGraph: {
    title: meta.longName,
    description: meta.description,
    url: process.env.NEXT_PUBLIC_HOST_URL,
    siteName: meta.longName,
    locale: "en-US",
    type: "website",
    images: [
      {
        url: `/assets/og-image.png`,
        width: 2400,
        height: 1260,
      },
    ],
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
  twitter: {
    title: meta.longName,
    card: "summary_large_image",
    description: meta.description,
    creator: "@TheArmadaDAO",
    images: [`/assets/og-image.png`],
  },
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={cn(gordita.variable, "antialiased")}>
        <WalletConnectProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <TooltipProvider delayDuration={300}>
              <Navbar />
              <main className="bg-background">{children}</main>
              <Toaster />
              <Analytics />
            </TooltipProvider>
          </ThemeProvider>
        </WalletConnectProvider>
      </body>
    </html>
  );
};

export default RootLayout;
