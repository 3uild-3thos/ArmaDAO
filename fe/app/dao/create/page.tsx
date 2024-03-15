"use client";
import { useContext } from "react";
import { CreateDaoContext } from "./layout";
import DaoInfo from "./(forms)/dao-info";
import TeamInfo from "./(forms)/team-info";

export default function CreateDao() {
  const page = useContext(CreateDaoContext);

  if (page === 1) return <TeamInfo />;
  return <DaoInfo />;
}
