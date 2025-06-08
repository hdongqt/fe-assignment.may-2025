import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import { ChevronRight, List, MoveRight, SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import CartIcon from "@/assets/images/cart-icon.svg";

const categories = [
  "All Work Packages",
  "Architectural WPs",
  "Development WPs",
  "Operation WPs",
  "Basic",
  "Comprehensive",
  "Advanced",
];

const workPackages = [
  {
    title: "Work package 1",
    description:
      "Define system structure, technology stack, and integration flow. Includes do lorem is small content...",
  },
  {
    title: "Work package 2",
    description:
      "Build a modern single-page application (SPA) using SvelteKit, integrated with lorem is small content...",
  },
  {
    title: "Work package 3",
    description:
      "Set up continuous integration and deployment pipeline using GitHub acti lorem is small content...",
  },
  {
    title: "Work package 4",
    description:
      "Identify and document business processes, user roles, and key feature lorem is small content...",
  },
  {
    title: "Work package 5",
    description:
      "Define overall architecture, services layout, tech stack, and database strate lorem is small content...",
  },
  {
    title: "Work package 6",
    description:
      "Design complex data relationships, event flows (CQRS/Event Sourcing), and lorem is small content...",
  },
  {
    title: "Work package 7",
    description:
      "Deliver wireframes and high-fidelity designs for key screens using Figma lorem is small content...",
  },
  {
    title: "Work package 8",
    description:
      "Develop frontend using SvelteKit integrated with a CMS like Directus or lorem is small content...",
  },
  {
    title: "Work package 9",
    description:
      "Implement domain-driven backend API with authentication, user roles, and lorem is small content...",
  },
];

export default function Estimator() {
  return (
    <div className="ml-12 mr-20">
      <p className="text-xl text-gray-800 mt-4 mb-[38px]">Work Packages (WP)</p>
      <div className="flex gap-2">
        <div className="w-[200px]">
          <Tabs defaultValue="rfx">
            <TabsList>
              <TabsTrigger value="rfx">RFX WPs</TabsTrigger>
              <TabsTrigger value="customWPs">Custom WPs</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
          <div>
            <p className="text-lg mt-6 font-medium text-gray-800 mb-2.5">
              Categories
            </p>
            <div className="space-y-1 flex flex-col">
              {categories.map((category) => (
                <Link
                  to={`/estimator`}
                  className={cn(
                    "text-gray-500 hover:text-sky-700 text-sm font-normal border-b pb-2 border-gray-200",
                    category === "All Work Packages" && "text-sky-700"
                  )}
                >
                  <span>{category}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative border rounded px-2 py-1">
            <SearchIcon
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              size={16}
            />
            <input
              type="text"
              className="text-sm pl-7 text-gray-600 outline-none w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {workPackages.map((workPackage) => (
              <div className="p-3 flex flex-col gap-4 border border-gray-200 rounded">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{workPackage.title}</h3>
                  <ChevronRight size={20} className="text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 font-normal line-clamp-2">
                  {workPackage.description}
                </p>
                <div className="flex gap-[6px]">
                  <div className="p-0.5 border border-gray-200 bg-blue-50 text-gray-500">
                    <ChevronRight size={20} />
                  </div>
                  <div className="p-0.5 border border-gray-200 bg-blue-50 text-gray-500">
                    <ChevronRight size={20} />
                  </div>
                </div>
                <div className="flex justify-between">
                  <button className="rounded-lg cursor-pointer py-1.5 px-4 bg-gray-100  hover:bg-blue-100 font-medium text-sky-700 duration-500">
                    View Detail
                  </button>
                  <button className="cursor-pointer hover:opacity-80">
                    <img src={CartIcon} alt="CartIcon" className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-36 mb-4">
        <button className="cursor-pointer flex items-center gap-2 text-sky-800 hover:text-sky-600 transition">
          <List size={20} />
          <span className="text-sm italic font-medium">
            How to add custom WPs
          </span>
        </button>
        <button className="flex items-center gap-2 cursor-pointer py-1.5 px-4 border border-sky-700 rounded-lg hover:bg-blue-100 text-sky-700 duration-500">
          <span>Next</span>
          <MoveRight />
        </button>
      </div>
    </div>
  );
}
