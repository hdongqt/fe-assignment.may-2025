import React from "react";
import { ChevronRightIcon, List } from "lucide-react";
import { useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const breadcrumbItems = [
  {
    path: "/project",
    list: [
      { label: "Project", href: "#", current: false },
      { label: "UrapidLoan Project", href: "#", current: false },
      { label: "[ Ticket name ]", href: "#", current: true },
    ],
  },
  {
    path: "/estimator",
    list: [
      { label: "Estimator", href: "/estimator", current: false },
      {
        label: "Work Packages",
        href: "/estimator",
        current: true,
      },
    ],
  },
];

export default function AppBar() {
  const location = useLocation();
  const pathname = location.pathname;
  const breadcrumb = breadcrumbItems.find((item) =>
    item.path.includes(pathname)
  );
  return (
    <header className="w-full border-b flex items-center justify-between pr-4">
      <Breadcrumb className="flex items-center py-5">
        <BreadcrumbList className="flex items-center gap-4">
          {breadcrumb?.list.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <BreadcrumbSeparator>
                  <ChevronRightIcon className="h-4 w-4 text-gray-600" />
                </BreadcrumbSeparator>
              )}
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={item.href}
                  className={`font-medium ${
                    item.current ? "text-sky-700" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      {pathname === "/estimator" && (
        <button className="cursor-pointer bg-sky-800 hover:bg-sky-700 transition text-white px-4 py-2 rounded-full flex items-center gap-2">
          <List size={20} />
          <span>View Summary</span>
        </button>
      )}
    </header>
  );
}
