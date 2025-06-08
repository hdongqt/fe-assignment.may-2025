import UserFilter from "@/pages/user-management/user-filter";
import RefreshIcon from "@/assets/images/refresh-icon.svg";
import { Button } from "@/components/ui/button";
import ProfileDetail from "@/pages/user-management/profile-detail";
import UserManagementTable from "@/pages/user-management/user-management-table";

export default function UserManagement() {
  return (
    <div className="flex flex-col lg:flex-row h-full flex-1">
      <UserFilter />
      <div className="flex-1 flex">
        <div className="flex-1 flex flex-col">
          <div className="flex items-center px-3 py-3">
            <p className="text-blue-900 text-xl font-bold">43 USERS</p>
            <Button variant="ghost" className="px-1 ml-1 cursor-pointer">
              <img className="w-6 h-6" src={RefreshIcon} alt="RefreshIcon" />
            </Button>
          </div>
          <UserManagementTable />
        </div>
        <div className="flex-1 px-4 border-l">
          <ProfileDetail />
        </div>
      </div>
    </div>
  );
}
