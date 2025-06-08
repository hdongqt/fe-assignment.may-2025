import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Link } from "react-router-dom";
import homeIcon from "@/assets/images/home.svg";
import bellIcon from "@/assets/images/bell.svg";
import settingIcon from "@/assets/images/setting.svg";
import userProfileIcon from "@/assets/images/user-profile.svg";
import dropDownIcon from "@/assets/images/dropdown.svg";

export default function AppBar2() {
  return (
    <header className="w-full h-[60px] bg-[#294172] flex items-center justify-between px-[59px]">
      <div className="flex items-center">
        <Link
          to="/"
          className="font-normal text-green-600 hover:text-green-500 transition text-base whitespace-nowrap"
        >
          COMPANY LOGO XXX
        </Link>

        <div className="flex items-center gap-5 ml-[40px]">
          <Link to="/" className="hover:opacity-80 transition">
            <img
              className="w-[30px] h-[30px]"
              alt="Module icon"
              src={homeIcon}
            />
          </Link>
          <div className="flex flex-col items-start gap-1 px-5 py-1 bg-[#dae6ef] text-[#294172] rounded-[5px] h-auto">
            <div className="w-[67.76px] mt-[-1.00px] [text-shadow:0px_1px_4px_#ffffffb2] [font-family:'Inter',Helvetica] font-normal text-xs tracking-[0] leading-[normal]">
              Module
            </div>

            <div className="w-fit [text-shadow:0px_1px_4px_#ffffffb2] [font-family:'Inter',Helvetica] font-bold text-sm tracking-[0] leading-[normal]">
              USER MANAGEMENT
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="relative w-[30px] h-[30px]">
          <div className="relative w-[25px] h-7 left-[5px]">
            <img
              className="absolute top-0.5 left-0"
              alt="Notification bell"
              src={bellIcon}
            />

            <div className="absolute w-4 h-4 top-0 left-2 bg-red-500 rounded-[11px] flex items-center justify-center">
              <div className="font-medium text-white text-[10px] leading-[15px] tracking-[0] whitespace-nowrap">
                1
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer hover:opacity-80">
          <img className="w-[30px] h-[30px]" alt="Settings" src={settingIcon} />
        </button>

        <div className="flex items-center gap-5 px-2.5 py-[5px] rounded-[10px]">
          <Avatar className="w-[30px] h-[30px]">
            <AvatarFallback className="bg-transparent">
              <img
                className="w-full h-full"
                alt="User profile"
                src={userProfileIcon}
              />
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col items-start justify-center">
            <div className="[font-family:'Inter',Helvetica] font-bold text-white text-sm tracking-[0] leading-[26px] whitespace-nowrap">
              Mr. David Nguyen
            </div>

            <div className="-mt-1 [font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0] leading-6 whitespace-nowrap">
              Home Company
            </div>
          </div>

          <button className="hover:opacity-80 cursor-pointer">
            <img className="w-5 h-5 " alt="Dropdown icon" src={dropDownIcon} />
          </button>
        </div>
      </div>
    </header>
  );
}
