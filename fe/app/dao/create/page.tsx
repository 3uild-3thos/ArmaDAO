"use client";
import { useContext } from "react";

// Components
import Config from "@/app/dao/create/(forms)/dao-config";
import DaoInfo from "@/create/(forms)/dao-info";
import TeamInfo from "@/create/(forms)/team-info";
import { CreateDaoContext } from "@/create/layout";
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
