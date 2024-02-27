"use client";
import { MainLayout } from "@/layouts";
require("@solana/wallet-adapter-react-ui/styles.css");

import { DaoCard } from "@/components";
import { featuredDao } from "@/mock";
export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <p className="text-lg font-bold text-white">Featured DAOs</p>
        <div className="flex items-center gap-4">
          {featuredDao.map((e: any) => (
            <DaoCard
              key={e.id}
              title={e.title}
              createdAt={e.createdAt}
              description={e.description}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
