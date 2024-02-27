"use client";
import { MainLayout } from "@/layouts";
import Image from "next/image";
import image from "@/public/image.png";
import { Button } from "@/components";

export default function Dao({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayout>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between p-10 bg-slate-900 rounded-lg">
          <div className="flex items-center gap-5">
            <Image src={image} width={100} height={100} alt="profile-pic" />
            <div className="flex flex-col gap-2 text-gray-100">
              <p className="text-2xl font-bold">DAO DAO</p>
              <p className="text-sm font-light">A DAO that builds DAOs.</p>
            </div>
          </div>
          <Button>Follow</Button>
        </div>
        <div className="flex items-center justify-evenly w-full text-gray-100 p-4 bg-slate-900 rounded-lg">
          <p>Home</p>
          <p>Proposals</p>
          <p>Treasury</p>
          <p>SubDAOs</p>
          <p>Members</p>
          <p>Apps</p>
          <p>Vesting Payments</p>
        </div>

        {children}
      </div>
    </MainLayout>
  );
}
