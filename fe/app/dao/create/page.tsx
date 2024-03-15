"use client";
import { useContext } from "react";
import { CreateDaoContext } from "@/create/layout";
import DaoInfo from "@/create/(forms)/dao-info";
import TeamInfo from "@/create/(forms)/team-info";

export default function CreateDao() {
  const page = useContext(CreateDaoContext);

  if (page === 1) return <TeamInfo />;
  return <DaoInfo />;
}
