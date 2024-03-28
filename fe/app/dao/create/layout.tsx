"use client";
import { createContext, useState } from "react";

// components
import CreateFleetStepper from "@/app/dao/create/(stepper)/stepper";

export const CreateDaoContext = createContext<number>(0);

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [page, setPage] = useState(0);

  const handleNext = () => {
    if (page < 3) setPage((state) => state + 1);
  };

  const handleBack = () => {
    if (page > 0) setPage((state) => state - 1);
  };

  return (
    <CreateDaoContext.Provider value={page}>
      <div className="flex flex-col gap-8">
        <p className="font-medium text-3xl">Create a Fleet DAO</p>

        <div className="grid grid-cols-3 p-5 gap-10">
          <CreateFleetStepper page={page} />
          <div className="col-span-2 flex flex-col gap-10">{children}</div>
        </div>
      </div>
    </CreateDaoContext.Provider>
  );
};

export default RootLayout;
