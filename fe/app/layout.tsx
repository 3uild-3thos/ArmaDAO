import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { WalletConnectProvider } from "@/lib/providers";
import "@solana/wallet-adapter-react-ui/styles.css";
import localFont from "next/font/local";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gordita.variable}>
        <WalletConnectProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <main className="flex flex-col h-full min-h-screen">
              {children}
            </main>
          </ThemeProvider>
        </WalletConnectProvider>
      </body>
    </html>
  );
}
