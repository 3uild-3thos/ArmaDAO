"use client";
import { Button, DaoCard } from "@/components";
import { featuredDao } from "@/mock";

export default function Dao() {
  return (
    <>
      <div className="flex flex-col w-full text-gray-100 p-4 bg-slate-900 rounded-lg gap-4">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <p className="font-semibold">SubDAOs</p>
            <p className="text-xs">
              SubDAOs are children DAOs that help manage groups within your DAO.
            </p>
          </div>
          <Button>Get notified</Button>
        </div>
      </div>
      <div className="flex flex-col w-full text-gray-100 p-4 bg-slate-900 rounded-lg gap-10">
        <p className="font-semibold">3 SubDAOs</p>
        <div className="flex items-center gap-5">
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
    </>
  );
}
