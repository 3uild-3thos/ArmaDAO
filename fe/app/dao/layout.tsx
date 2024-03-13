"use client";

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

const DAOLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean); // Removes empty segments

  const breadcrumbLinks = pathSegments.map((segment, index, array) => {
    // Basic mapping of segment to URL path
    const href = "/" + array.slice(0, index + 1).join("/");
    // Here, you can add logic to replace segment with meaningful names, if needed
    let name = segment;

    // Example of custom naming (you might have more complex logic)
    if (segment === "dao") {
      name = "DAO"; // Static rename for simplicity
    }

    return { name, href };
  });

  const backHref =
    breadcrumbLinks.length > 1
      ? breadcrumbLinks[breadcrumbLinks.length - 2].href
      : "/";

  return (
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
  );
};

export default DAOLayout;
