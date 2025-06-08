import TicketDescImage from "@/assets/images/ticket-desc.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { ArrowUp, ChevronDownIcon, ClockIcon } from "lucide-react";

const activities = [
  {
    user: "RFX David Nguyen",
    action: "Submitted to underwriting",
    createdAt: "2025-04-04 13:00:38",
  },
  {
    user: "ABC Lisa Rose",
    action: "approval",
    createdAt: "2025-04-04 11:10:38",
  },
  {
    user: "RFX David Nguyen",
    action: "Submitted to underwriting",
    createdAt: "2025-04-04 08:00:00",
  },
  {
    user: "ABC Lisa Rose",
    action: "create an issue",
    createdAt: "2025-04-03 17:10:38",
  },
];

const properties = [
  { label: "Status:", value: "In-Progress" },
  { label: "Priority:", value: "Critical" },
  { label: "Assignee:", value: "Trangntt" },
  { label: "Type", value: "Bug" },
  { label: "Stated date:", value: "2025-04-04" },
  { label: "Target date:", value: "2025-04-04" },
];

export default function Project() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 pr-4">
        <div>
          <div className="flex items-center py-1.5 gap-2 border-b border-gray-200">
            <img
              className="w-[18px] h-[18px]"
              src={TicketDescImage}
              alt="ticket-desc-image"
            />
            <span className="text-gray-600 text-base font-normal">
              Description
            </span>
          </div>
          <ul className="space-y-2 mt-2">
            {[1, 2].map((item) => (
              <li key={`${item}desc`} className="flex items-start">
                <span className="text-blue-500 text-xs mr-2 mt-1.5">○</span>
                <span className="text-gray-600 text-sm font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Button
              variant="ghost"
              className="font-normal text-sky-700 cursor-pointer"
            >
              + Add sub-tickets
            </Button>
          </div>
        </div>
        <div>
          <div className="flex items-center py-[5px] gap-2 border-b border-gray-200">
            <img
              className="w-[18px] h-[18px]"
              src={TicketDescImage}
              alt="ticket-desc-image"
            />
            <span className="text-gray-600 text-base16 font-normal">
              Activity
            </span>
          </div>
          <div className="mt-4">
            {activities.map((item, index) => (
              <div className="flex gap-2">
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "mt-1 w-3 h-3 rounded-full",
                      index % 2 === 0 ? "bg-green-600" : "bg-sky-700"
                    )}
                  />
                  {index < activities.length - 1 && (
                    <div className="flex-1 w-px bg-gray-500 mt-1" />
                  )}
                </div>
                <div className="flex gap-4 items-center pb-5 text-[#6f6f6f] text-sm">
                  <p className="font-normal">
                    {item.user} {item.action}
                  </p>
                  <ClockIcon size={16} />
                  <p className="font-normal">{item.createdAt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mt-6 w-full">
          <textarea
            className="w-full h-[90px] p-4 pl-7 pr-10 rounded-lg bg-muted text-[12px]  resize-none focus:outline-none"
            placeholder="Leave a comment ..."
          />

          <button className="absolute bottom-4 right-4 text-sky-700 hover:!text-blue-600 cursor-pointer">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      <div className="w-[280px] border-l text-[#6f6f6f]">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="properties"
        >
          <AccordionItem value="properties">
            <AccordionTrigger className="font-normal border-b rounded-none px-3 py-2">
              Properties
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-4 mt-4">
                {properties.map((property, index) => (
                  <div key={index} className="flex items-end gap-6 px-4">
                    <div className="w-[110px] font-body-small-regular text-gray-600">
                      {property.label}
                    </div>
                    <div className="flex items-center gap-2 px-1">
                      <ChevronDownIcon className="w-2.5 h-2.5" />
                      <p
                        className={cn(
                          property.label === "Status:" && "text-blue-500",
                          property.label === "Priority:" && "text-red-500"
                        )}
                      >
                        {property.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
