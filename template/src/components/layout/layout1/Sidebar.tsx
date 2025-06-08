import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { AlignLeft, AlignRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

import LogoSmall from "@/assets/images/logo-small.svg";

import avatar from "@/assets/images/avatar1.svg";
import overviewIcon from "@/assets/images/overview.svg";
import inquiriesIcon from "@/assets/images/inquiries.svg";
import estimatorIcon from "@/assets/images/estimator.svg";
import projectsIcon from "@/assets/images/project.svg";
import administrationsIcon from "@/assets/images/administration.svg";
import documentationIcon from "@/assets/images/documentation.svg";
import logoRiver from "@/assets/images/logo-river.svg";
import externalLinkIcon from "@/assets/images/arrow-square.svg";

const mainNavItems = [
  {
    name: "Overview",
    icon: overviewIcon,
    url: "/overview",
  },
  {
    name: "Inquiries",
    icon: inquiriesIcon,
    url: "/inquiries",
  },
  {
    name: "Estimator",
    icon: estimatorIcon,
    url: "/estimator",
  },
  {
    name: "Projects",
    icon: projectsIcon,
    url: "/project",
  },
];

const bottomNavItems = [
  {
    name: "Administrations",
    icon: administrationsIcon,
    url: "/administration",
  },
  {
    name: "Documentation",
    icon: documentationIcon,
    url: "/documentation",
  },
];

export default function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside
      className={`bg-muted border-r flex flex-col transition-all duration-200 z-10 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div
        className={cn(
          "p-4 flex justify-center items-center gap-2",
          collapsed ? "flex-col" : "flex-row"
        )}
      >
        <div className="flex items-center gap-2">
          <Avatar className="rounded-none w-12 h-12">
            <img
              src={avatar}
              alt="Company logo"
              className="w-full h-full object-cover"
            />
          </Avatar>
          {!collapsed && (
            <div>
              <div className="font-bold">ABC Company</div>
              <div className="text-xs text-muted-foreground">Lisa Rose</div>
            </div>
          )}
        </div>
        <button
          className="p-1 rounded hover:text-sky-700 cursor-pointer"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <AlignLeft size={22} className="-ml-2.5" />
          ) : (
            <AlignRight size={22} className="ml-1" />
          )}
        </button>
      </div>
      <nav className="flex-1 p-4 flex flex-col justify-between">
        <ul className="space-y-2">
          {mainNavItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.url || "/"}
                className={cn(
                  "flex items-center gap-2 group hover:text-sky-700 rounded-md p-2 text-sm font-medium leading-6 text-muted-foreground hover:bg-muted",
                  pathname === item.url && "bg-muted text-sky-700"
                )}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-5 h-5 group-hover:filter group-hover:sepia group-hover:brightness-50 group-hover:hue-rotate-80"
                />
                <span className={collapsed ? "invisible" : ""}>
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className={collapsed ? "flex flex-col items-center" : ""}>
          <ul className="space-y-2">
            {bottomNavItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.url || "/"}
                  className="flex items-center gap-2 rounded-md p-2 text-sm font-medium leading-6 text-muted-foreground hover:bg-muted"
                >
                  <img src={item.icon} alt={item.name} className="w-5 h-5" />
                  {!collapsed && item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/">
            {!collapsed ? (
              <div className="flex items-center gap-5 px-2 py-4">
                <img
                  className="w-[134px] h-8"
                  alt="River Flow Solutions Logo"
                  src={logoRiver}
                />
                <img
                  src={externalLinkIcon}
                  alt="External Link"
                  className="w-5 h-5"
                />
              </div>
            ) : (
              <img
                alt="River Flow Solutions Logo"
                src={LogoSmall}
                className="mt-5"
              />
            )}
          </Link>
        </div>
      </nav>
    </aside>
  );
}
