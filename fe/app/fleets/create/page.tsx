"use client";

// Components
import Config from "@/app/fleets/create/(forms)/fleet-config";
import FleetInfo from "@/app/fleets/create/(forms)/fleet-info";
import TeamInfo from "@/app/fleets/create/(forms)/team-info";
import Review from "@/app/fleets/create/review";
import { useCreateFleet } from "@/lib/zustand/create-fleet.store";

export default function CreateFleet() {
  const { page } = useCreateFleet();

  switch (page) {
    case 1:
      return <Config />;
    case 2:
      return <TeamInfo />;
    case 3:
      return <Review />;
    default:
      return <FleetInfo />;
  }
}
