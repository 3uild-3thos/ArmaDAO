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

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={gordita.variable}>
        <WalletConnectProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Navbar />
            <main className="flex flex-col h-full py-32">{children}</main>
            <Toaster />
          </ThemeProvider>
        </WalletConnectProvider>
      </body>
    </html>
  );
};

export default RootLayout;
