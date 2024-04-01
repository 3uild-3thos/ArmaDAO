"use client";

// Components
import Config from "@/app/dao/create/(forms)/dao-config";
import DaoInfo from "@/app/dao/create/(forms)/fleet-info";
import TeamInfo from "@/create/(forms)/team-info";
import Review from "@/create/review";
import { useCreateFleet } from "@/lib/zustand/create-fleet.store";

export default function CreateDao() {
  const { page } = useCreateFleet();

  switch (page) {
    case 1:
      return <Config />;
    case 2:
      return <TeamInfo />;
    case 3:
      return <Review />;
    default:
      return <DaoInfo />;
  }
}
