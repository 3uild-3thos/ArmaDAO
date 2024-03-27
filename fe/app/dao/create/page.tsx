"use client";
import { useContext } from "react";

// Components
import { CreateDaoContext } from "@/create/layout";
import DaoInfo from "@/create/(forms)/dao-info";
import TeamInfo from "@/create/(forms)/team-info";
import Config from "@/create/(forms)/config";
import Review from "@/create/review";

export default function CreateDao() {
  const page = useContext(CreateDaoContext);

  switch (page) {
    case 1: {
      return <TeamInfo />;
    }
    case 2: {
      return <Config />;
    }
    case 3: {
      return <Review />;
    }
    default: {
      return <DaoInfo />;
    }
  }
}
