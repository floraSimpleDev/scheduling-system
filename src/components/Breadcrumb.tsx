"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type BreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activClasses?: string;
  capitalizeLinks?: boolean;
};

const Breadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activClasses,
  capitalizeLinks,
}: BreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div>
      <ul className={containerClasses}>
        <li className={listClasses}>
          <Link href={"/"}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;

          let itemClasses =
            paths === href ? `${listClasses} ${activClasses}` : listClasses;

          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>

              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
