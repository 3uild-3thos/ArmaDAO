"use client";

import { useEffect, useState } from "react";
// next
// components
import { ConnectWallet } from "@/components/ui/connect-wallet";
import ThemeToggle from "@/components/ui/theme-toggle";
import { useWallet } from "@solana/wallet-adapter-react";
import { Home, Menu, Star } from "lucide-react";
import { Input } from "@/components/ui/input";

interface INavItem {
  title: string;
  href: string;
}

export const navItems: Array<INavItem> = [];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { publicKey } = useWallet();

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (publicKey) {
      setMenuOpen(false);
    }
  }, [publicKey]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative flex items-center justify-between px-4 py-4 text-lg md:px-20 backdrop-blur-sm">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            {/* <Smile /> */}
            <p className="font-bold text-2xl">Armdao</p>
          </div>
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-2">
              <Home size={15} />
              <p className="text-sm font-medium">Home</p>
            </div>

            <div className="flex items-center gap-2">
              <Star size={15} />
              <p className="text-sm font-medium">Mint</p>
            </div>

            <div className="flex items-center gap-2">
              <Star size={15} />
              <p className="text-sm font-medium">DAO</p>
            </div>

            <div className="flex items-center gap-2">
              <Star size={15} />
              <p className="text-sm font-medium">Proposals</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-end h-full gap-4">
          <div className="md:hidden">
            <Menu size={24} onClick={() => setMenuOpen(!menuOpen)} />
          </div>

          <div
            className={`fixed flex flex-col top-24 items-end md:items-center p-8 md:p-0 gap-4 left-0 w-full z-40 transition-transform duration-300 ease-in-out transform ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            } md:static md:w-auto md:bg-transparent md:flex-row md:transform-none md:text-sm bg-black backdrop-blur-md sm:bg-transparent sm:backdrop-blur-none`}
          >
            <Input />
            <ConnectWallet />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
