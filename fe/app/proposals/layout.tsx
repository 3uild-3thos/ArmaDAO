"use client";

import Bokeh from "@/components/ui/bokeh";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment, ReactNode } from "react";

const MothershipProposalsLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean); // Removes empty segments

  const breadcrumbLinks = pathSegments.map((segment, index, array) => {
    const href = "/" + array.slice(0, index + 1).join("/");
    let name = segment;

    if (segment === "proposals") {
      name = "proposals";
    }

    return { name, href };
  });

  const backHref =
    breadcrumbLinks.length > 1
      ? breadcrumbLinks[breadcrumbLinks.length - 2].href
      : "/";

  return (
    <div className="relative z-10 flex flex-col h-full min-h-screen px-8 py-32 overflow-hidden overflow-x-hidden font-gordita md:px-16 lg:px-32 2xl:px-64">
      <Bokeh className="m-auto bottom-[-25%] right-[-50%] opacity-5 from-magenta" />
      <Bokeh className="m-auto top-[-50%] left-[-70%] opacity-5 from-cyan" />
      <div className="flex flex-col gap-16">
        {/* Breadcrumbs */}
        <Breadcrumb>
          <BreadcrumbList className="flex items-center">
            {breadcrumbLinks.length > 0 && (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={backHref}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft size={"14"} />
                    Back
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>|</BreadcrumbSeparator>
              </>
            )}
            {breadcrumbLinks.map((breadcrumb, index) => (
              <Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={breadcrumb.href} className="capitalize">
                    {breadcrumb.name}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index < breadcrumbLinks.length - 1 && <BreadcrumbSeparator />}
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        {children}
      </div>
    </div>
  );
};

export default MothershipProposalsLayout;
