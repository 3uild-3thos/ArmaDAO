"use client";
import { MainLayout } from "@/layouts";
import { DaoTypeCard } from "./components";
import { Button } from "@/components";

export default function Create() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-9 p-10 bg-slate-900 rounded">
          <div className="flex items-center gap-6">
            <p className="text-gray-100">Name</p>
            <input type="text" className="w-full" />
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-gray-100">Description</p>
            <textarea rows={4} cols={40}></textarea>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <DaoTypeCard />
          <DaoTypeCard />
          <DaoTypeCard />
        </div>

        <div className="flex w-full justify-end">
          <Button>Continue</Button>
        </div>
      </div>
    </MainLayout>
  );
}
