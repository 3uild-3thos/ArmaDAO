"use client";

// next
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// components
import { ConnectWallet } from "@/components/ui/connect-wallet";
import ThemeToggle from "@/components/ui/theme-toggle";
import {
  BadgePlusIcon,
  HomeIcon,
  Menu,
  PackagePlusIcon,
  RocketIcon,
  TablePropertiesIcon,
} from "lucide-react";

// lib
import { Button } from "@/components/ui/button";
import { PATH } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { useWallet } from "@solana/wallet-adapter-react";
import { usePathname } from "next/navigation";

interface INavItem {
  title: string;
  href: string;
}

export const navItems: Array<INavItem> = [];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20">
      <div className="relative flex items-center justify-between px-4 py-4 text-lg md:px-20 backdrop-blur-sm">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            {/* <Smile /> */}
            <Link href={PATH.home}>
              <Image
                src={"/logo.png"}
                alt={"Armada"}
                width={1000}
                height={1000}
                className="w-10 h-fit"
              />
            </Link>
          </div>
          <div className="flex items-center gap-7">
            <Link href={PATH.home}>
              <Button
                size={"sm"}
                variant={"ghost"}
                className={cn(
                  "gap-2",
                  pathname === PATH.home &&
                    "border-b border-white rounded-b-none"
                )}
              >
                <HomeIcon size={16} /> Home
              </Button>
            </Link>

            <Link href={PATH.fleets}>
              <Button
                size={"sm"}
                variant={"ghost"}
                className={cn(
                  "gap-2",
                  pathname === PATH.fleets &&
                    "border-b border-white rounded-b-none"
                )}
              >
                <RocketIcon size={16} /> Fleets
              </Button>
            </Link>

            <Link href={PATH.mothershipProposals}>
              <Button
                size={"sm"}
                variant={"ghost"}
                className={cn(
                  "gap-2",
                  pathname === PATH.mothershipProposals &&
                    "border-b border-white rounded-b-none"
                )}
              >
                <TablePropertiesIcon size={16} /> Mothership Proposals
              </Button>
            </Link>

            <Link href={PATH.fleetCreate}>
              <Button
                size={"sm"}
                variant={"ghost"}
                className={cn(
                  "gap-2",
                  pathname === PATH.fleetCreate &&
                    "border-b border-white rounded-b-none"
                )}
              >
                <PackagePlusIcon size={16} /> Create a Fleet
              </Button>
            </Link>
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
            {/* <Input /> */}
            <Link href={PATH.mothershipMint}>
              <Button size={"sm"} variant={"white"} className="gap-2">
                <BadgePlusIcon size={16} /> Mint Armada NFT
              </Button>
            </Link>
            <ConnectWallet />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
