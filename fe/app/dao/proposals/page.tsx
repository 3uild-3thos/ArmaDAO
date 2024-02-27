"use client";
import { Button } from "@/components";
import { ProposalCard } from "./components";

export default function Dao() {
  return (
    <>
      <div className="flex items-center justify-between w-full text-gray-100 p-4 bg-slate-900 rounded-lg">
        <p className="font-semibold">Create a proposal</p>
        <Button>New Proposal</Button>
      </div>
      <div className="flex flex-col w-full text-gray-100 p-4 bg-slate-900 rounded-lg gap-4">
        <div className="flex items-center justify-between ">
          <p className="font-semibold">Proposals</p>
          <Button>Get notified</Button>
        </div>
        <div className="w-full flex flex-col gap-2">
          <ProposalCard />
          <ProposalCard />
          <ProposalCard />
          <ProposalCard />
          <ProposalCard />
          <ProposalCard />
          <ProposalCard />
        </div>
      </div>
    </>
  );
}
