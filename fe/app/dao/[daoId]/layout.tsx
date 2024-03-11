"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ReactNode } from "react";
import DAOInfoComponent from "./dao-info";
import DAOStatsComponent from "./dao-stats";

const DAODetailLayout = ({ children }: { children: ReactNode }) => {
  const params = useParams();
  const daoId = params?.daoId ?? "";

  return (
    <div className="flex flex-col gap-16">
      {/* Breadcrumbs */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="flex items-center gap-2">
              <ChevronLeft size={"16"} />
              Back
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>|</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">DAO</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{daoId}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>Proposals</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* DAO Banner */}
      <Image
        src={"https://placehold.co/1920x1080?text=DAO+Banner"}
        alt={"DAO Banner"}
        width={1920}
        height={1080}
        className="object-cover max-h-[20rem] rounded-2xl shadow-2xl"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* DAO Info (Left) */}
        <DAOInfoComponent className="sm:pr-8" />

        {/* Divider */}

        {/* DAO Stats (Right) */}
        <DAOStatsComponent className="sm:pl-8 border-t sm:border-t-0 sm:border-l border-gray-200/20" />
      </div>

      {/* DAO Page Tabs */}

      {/* DAO Detail Pages */}
      {children}
    </div>
  );
};

export default DAODetailLayout;
