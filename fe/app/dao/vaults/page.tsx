"use client";
import { Button, DaoCard } from "@/components";
import { featuredDao } from "@/mock";

export default function Dao() {
  return (
    <>
      <div className="flex flex-col w-full text-gray-100 p-4 bg-slate-900 rounded-lg gap-4">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <p className="font-semibold">Voting Vaults</p>
            <p className="text-xs">
              Voting power in the DAO derives from multiple sources.
            </p>
          </div>
        </div>
      </div>
      <div className="flex  items-center w-full rounded-lg gap-4">
        {featuredDao.map((e: any) => (
          <div className="bg-slate-900 p-4 text-gray-200" key={e.id}>
            <div className="p-10 flex flex-col items-center gap-4">
              <p className="text-center font-bold">Neutron Vault</p>
              <p className="text-center text-sm text-gray-400">
                Deposit NTRN to get voting power.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Vault's voting power</p>
                <p className="text-sm ">21.46%</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Your voting power</p>
                <p className="text-sm ">0%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
