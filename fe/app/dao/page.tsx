"use client";

import { Button } from "@/components";

export default function Dao() {
  return (
    <>
      <div className="flex flex-col w-full text-gray-100 p-10 bg-slate-900 rounded-lg gap-4">
        <p className="font-semibold">Membership</p>
        <p className="">
          You are not a member of Neutron DAO. To become a member, you must
          obtain and stake $NTRN.
        </p>
        <Button>STAKE $NTRN </Button>
      </div>

      <div className="flex flex-col w-full text-gray-100 p-10 bg-slate-900 rounded-lg gap-4">
        <p className="font-semibold">Details</p>
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-2">
            <p className="text-gray-200 text-sm">Established</p>
            <p className="font-semibold">September 2023</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-200 text-sm">Treasury</p>
            <p className="font-semibold">$221.55M est. USD value</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-200 text-sm">$NTRN staked</p>
            <p className="font-semibold">8.32M $NTRN</p>
          </div>
        </div>
      </div>
    </>
  );
}
