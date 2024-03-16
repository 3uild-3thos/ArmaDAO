"use client";
import { useContext } from "react";
import { CreateDaoContext } from "@/create/layout";
import DaoInfo from "@/create/(forms)/dao-info";
import TeamInfo from "@/create/(forms)/team-info";
import Config from "@/create/(forms)/config";

export default function CreateDao() {
  const page = useContext(CreateDaoContext);
  switch (page) {
    case 1: {
      return <TeamInfo />;
    }
    case 2: {
      return <Config />;
    }
    default: {
      return <DaoInfo />;
    }
  }
}
