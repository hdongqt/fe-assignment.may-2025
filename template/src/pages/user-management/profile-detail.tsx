import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import BookIcon from "@/assets/images/book.svg";
import PercentIcon from "@/assets/images/percent.svg";
import PasteIcon from "@/assets/images/patse.svg";
import RelatedIcon from "@/assets/images/related.svg";
import ArrowSquareIcon from "@/assets/images/arrow-square.svg";
import ArrowSquareDisabledIcon from "@/assets/images/arrow-square-disabled.svg";
import PerformanceIcon from "@/assets/images/performance.svg";
import ActionIcon from "@/assets/images/action.svg";
import TodoIcon from "@/assets/images/todo.svg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const loanDocuments = [
  {
    index: "01",
    borrowerName: "Ms. Hang Nguyen",
    loanId: "#LA00001",
    lender: "AD Mortgage",
    interestRate: "6% (6.168% APR)",
    progress: 68,
    status: "IN PROGRESS",
  },
  {
    index: "02",
    borrowerName: "Ms. Hang Nguyen",
    loanId: "#LA00001",
    lender: "AD Mortgage",
    interestRate: "6% (6.168% APR)",
    progress: 68,
    status: "IN PROGRESS",
  },
];

const relatedTable = () => (
  <div className="mt-2 w-full max-w-full overflow-x-hidden">
    <Table>
      <TableHeader className="bg-[#d9e6ee] border border-solid border-[#d9d9d9]">
        <TableRow>
          <TableHead className="w-[70px] font-medium text-sm leading-[26px]">
            Index
          </TableHead>
          <TableHead className="w-[152px]">
            <div className="flex flex-col">
              <span className="font-medium text-sm leading-[26px]">
                Borrower Name
              </span>
              <span className="font-medium text-sm leading-[26px] -mt-1">
                Loan ID
              </span>
            </div>
          </TableHead>
          <TableHead className="w-[169px]">
            <div className="flex flex-col">
              <span className="font-medium text-sm leading-[26px] whitespace-nowrap">
                Lender
              </span>
              <span className="font-medium text-sm leading-[26px] whitespace-nowrap -mt-1">
                Interest Rate
              </span>
            </div>
          </TableHead>
          <TableHead className="w-[155px]">
            <span className="font-medium text-sm leading-[26px] whitespace-nowrap">
              Process
            </span>
          </TableHead>
          <TableHead className="w-[136px] font-medium text-sm leading-[26px]">
            Status
          </TableHead>
          <TableHead className="w-[104px] font-medium text-sm leading-[26px]">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loanDocuments.map((loan, index) => (
          <TableRow
            key={index + loan.borrowerName}
            className="!border border-solid border-[#d9d9d9]"
          >
            <TableCell className="font-normal text-sm">{loan.index}</TableCell>
            <TableCell>
              <div className="flex flex-col">
                <div className="whitespace-nowrap">{loan.borrowerName}</div>
                <div className="text-[#637381] whitespace-nowrap">
                  {loan.loanId}
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <div className="whitespace-nowrap">{loan.lender}</div>
                <div className="font-body-small-regular text-[#637381] whitespace-nowrap">
                  {loan.interestRate}
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2.5">
                <div className="relative w-[73px]">
                  <Progress
                    value={loan.progress}
                    className="w-full h-[5px] bg-white rounded-sm border border-[#294172] [&>div]:bg-[#294172] [&>div]:rounded-full"
                  />
                </div>
                <div className="text-[#294172] text-sm text-center whitespace-nowrap font-normal">
                  {loan.progress}%
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge className="bg-[#e6f7ff] text-[#2979ff] font-medium text-xs rounded px-2.5 py-1">
                {loan.status}
              </Badge>
            </TableCell>
            <TableCell>
              <button className="cursor-pointer">
                <img className="w-4 h-4" alt="Action" src={ActionIcon} />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default function ProfileDetail() {
  return (
    <>
      <div className="flex items-center gap-3 py-4.5 border-b">
        <img src={BookIcon} alt="Book icon" className="w-6 h-6" />
        <p className="text-gray-500 font-medium">GENERAL INFORMATION</p>
      </div>
      <div className="mt-4">
        {[1, 2].map((item) => (
          <div className="grid grid-cols-4" key={`${item}general`}>
            <div className="flex flex-col gap-3  pb-3">
              <span className="text-text-overlay font-semibold text-sm">
                First Name
              </span>
              <span className="text-gray-normal font-normal text-sm">
                David
              </span>
            </div>
            <div className="flex flex-col gap-3  pb-3">
              <span className="text-text-overlay font-semibold text-sm">
                Last Name
              </span>
              <span className="text-gray-normal font-normal text-sm">
                Nguyen
              </span>
            </div>
            <div className="flex flex-col gap-3  pb-3">
              <span className="text-text-overlay font-semibold text-sm">
                Experience
              </span>
              <span className="text-gray-normal font-normal text-sm">
                5 years
              </span>
            </div>
            <div className="flex flex-col gap-3  pb-3">
              <span className="text-text-overlay font-semibold text-sm">
                Personal Website
              </span>
              <span className="text-gray-normal font-normal text-sm">
                david.com
              </span>
            </div>
          </div>
        ))}
      </div>
      <Accordion
        className="w-full"
        defaultValue="related"
        type="single"
        collapsible
      >
        <AccordionItem value="commission">
          <div className="flex items-center justify-between border-b">
            <AccordionTrigger className="justify-start py-2 hover:no-underline items-center">
              <p className="flex items-center gap-2">
                <img className="w-6 h-6" src={PercentIcon} alt="Book icon" />
                COMMISSION STRUCTURES
              </p>
            </AccordionTrigger>
            <Tooltip>
              <TooltipTrigger asChild>
                <img
                  src={ArrowSquareDisabledIcon}
                  alt="External link"
                  className="w-5 h-5 opa"
                />
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>You don't have permission to open this link</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </AccordionItem>
        <AccordionItem value="recruitment">
          <div className="flex items-center justify-between border-b">
            <AccordionTrigger className="justify-start py-2 hover:no-underline items-center">
              <p className="flex items-center gap-2">
                <img className="w-6 h-6" src={PasteIcon} alt="Book icon" />
                RECRUITMENT DOCUMENTS
              </p>
            </AccordionTrigger>
            <Link to="/user-management" className="cursor-pointer">
              <img
                src={ArrowSquareIcon}
                alt="External link"
                className="w-5 h-5"
              />
            </Link>
          </div>
        </AccordionItem>
        <AccordionItem value="related">
          <AccordionTrigger className="justify-start py-2 hover:no-underline items-center">
            <p className="flex items-center gap-2">
              <img className="w-6 h-6" src={RelatedIcon} alt="RelatedIcon" />
              RELATED CLIENTS & LOAN DOCUMENTS
            </p>
          </AccordionTrigger>
          <AccordionContent>{relatedTable()}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="performance">
          <AccordionTrigger className="hover:no-underline items-center justify-start py-2">
            <p className="flex items-center gap-2">
              <img
                className="w-6 h-6"
                src={PerformanceIcon}
                alt="PerformanceIcon"
              />
              PERFORMANCE
            </p>
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>
      <div className="space-y-2">
        <div className="py-2 border-y">
          <p className="flex items-center gap-2">
            <img className="w-6 h-6" src={TodoIcon} alt="TodoIcon" />
            <span className="font-semibold text-sm">TO-DO</span>
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Checkbox id="review" />
            <Label htmlFor="review" className="text-base">
              Review Loan Applications
              <Link to="/user-management" className="cursor-pointer">
                <img
                  src={ArrowSquareIcon}
                  alt="External link"
                  className="w-5 h-5"
                />
              </Link>
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="contact" />
            <Label htmlFor="contact" className="text-base">
              Contact to Borrower{" "}
              <Link to="/user-management" className="cursor-pointer">
                <img
                  src={ArrowSquareIcon}
                  alt="External link"
                  className="w-5 h-5"
                />
              </Link>
            </Label>
          </div>
          <div className="flex items-center gap-3 pb-20">
            <Checkbox id="new-todo" disabled />
            <Label htmlFor="new-todo" className="text-base">
              Click to add new todo
            </Label>
          </div>
        </div>
      </div>
    </>
  );
}
