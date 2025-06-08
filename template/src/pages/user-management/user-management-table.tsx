import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDownIcon } from "lucide-react";
import userPicImage from "@/assets/images/userpic.png";
import userPic1Image from "@/assets/images/userpic-1.png";
import userPic2Image from "@/assets/images/userpic-2.png";
import userPic3Image from "@/assets/images/userpic-3.png";
import userPic4Image from "@/assets/images/userpic-4.png";

const users = [
  {
    id: "LO00001",
    name: "Mr. David Nguyen",
    avatar: userPicImage,
    phone: "(322) 243-3452",
    email: "david.nguyen@gmail.com",
    type: "Loan Officer",
    experience: "5 years",
    status: "ACTIVE",
  },
  {
    id: "UW00001",
    name: "Ms. Jennie Pink",
    avatar: userPic1Image,
    phone: "(322) 243-3452",
    email: "jenniepink@gmail.com",
    type: "Underwriter",
    experience: "5 years",
    status: "ACTIVE",
  },
  {
    id: "LP00001",
    name: "Mr. Pep Guardiola",
    avatar: userPic2Image,
    phone: "(322) 243-3452",
    email: "pepguardiola@gmail.com",
    type: "Loan Processor",
    experience: "5 years",
    status: "ACTIVE",
  },
  {
    id: "AD00001",
    name: "Mr. Bruno Mar",
    avatar: userPic3Image,
    phone: "(322) 243-3452",
    email: "brunomors@gmail.com",
    type: "Admin",
    experience: "5 years",
    status: "ACTIVE",
  },
  {
    id: "ME00001",
    name: "Mr. David Beckham",
    avatar: userPic4Image,
    phone: "(322) 243-3452",
    email: "davidbeckham@gmail.com",
    type: "Member",
    experience: "5 years",
    status: "ACTIVE",
  },
];
export default function UserManagementTable() {
  return (
    <div className="flex flex-col justify-between flex-1">
      <div>
        <Table className="h-full min-w-max">
          <TableHeader className="bg-[#d9e6ee] border border-solid border-[#d9d9d9]">
            <TableRow>
              <TableCell className="min-w-[36px] py-[7px] text-center">
                <Checkbox className="w-4 h-4 bg-white" />
              </TableCell>
              <TableCell className="py-[7px]">
                <div className="flex flex-col">
                  <span className="font-medium text-sm leading-[26px]">
                    User Name
                  </span>
                  <span className="font-medium text-sm leading-[26px] -mt-1">
                    User ID
                  </span>
                </div>
              </TableCell>
              <TableCell className="py-[7px]">
                <span className="font-medium text-sm leading-[26px]">
                  Contact Info
                </span>
              </TableCell>
              <TableCell className="py-[7px]">
                <span className="font-medium text-sm leading-[26px]">Type</span>
              </TableCell>
              <TableCell className="py-[7px]">
                <span className="font-medium text-sm leading-[26px]">
                  Experience
                </span>
              </TableCell>
              <TableCell className="py-[7px]">
                <span className="font-medium text-sm leading-[26px]">
                  Status
                </span>
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="border-b border-[#d9d9d9]">
                <TableCell className="py-2.5 text-center">
                  <Checkbox className="w-4 h-4" />
                </TableCell>
                <TableCell className="py-2.5">
                  <div className="flex items-center gap-[18px]">
                    <Avatar className="w-[35px] h-[35px] rounded-full overflow-hidden">
                      <AvatarImage
                        src={user.avatar}
                        alt={user.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-medium">{user.name}</span>
                      <span className="text-gray-600">{user.id}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-2.5">
                  <div className="flex flex-col">
                    <span className="font-normal text-sm leading-[22px]">
                      {user.phone}
                    </span>
                    <span className="font-normal text-sm leading-[22px]">
                      {user.email}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-2.5">
                  <span className="font-normal text-sm leading-[22px]">
                    {user.type}
                  </span>
                </TableCell>
                <TableCell className="py-2.5">
                  <span className="font-normal text-sm leading-[22px]">
                    {user.experience}
                  </span>
                </TableCell>
                <TableCell className="py-2.5">
                  <Badge className="bg-[#f6ffed] text-[#43a047] font-medium text-xs rounded px-2.5 py-1">
                    {user.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex w-full items-center justify-between px-4 py-[13px] bg-white border border-l-0 border-r-0 border-solid border-[#d9d9d9]">
        <Pagination className="mx-0 justify-start">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious className="!px-2.5 rounded-md border border-solid border-[#edeff1]"></PaginationPrevious>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                isActive
                className="px-3.5 py-2 bg-[#e6eff3] rounded-md border border-solid"
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="px-[15px] py-2 rounded-md border border-solid border-[#edeff1]">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="px-[15px] py-2 rounded-md border border-solid border-[#edeff1]">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis className="py-2 rounded-md border border-solid border-[#edeff1]" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="px-[15px] py-2 rounded-md border border-solid border-[#edeff1]">
                10
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext className="!px-2.5 rounded-md border border-solid border-[#edeff1]"></PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <Button
          variant="outline"
          className="h-9 px-[15px] py-2 rounded-md border border-solid border-[#edeff1]"
        >
          <span className="text-primary-text-color text-base leading-[18px] font-normal">
            05 items
          </span>
          <ChevronDownIcon className="w-[17px] h-[17px] ml-2.5" />
        </Button>
      </div>
    </div>
  );
}
