import React from "react";
import SInput from "../shared/SInput";
import Image from "next/image";
import { Badge } from "../ui/badge";

const iconsPathArr: string[] = [
  "/icons/1st.svg",
  "/icons/2nd.svg",
  "/icons/3rd.svg",
  "/icons/4th.svg",
];

const Header = () => {
  return (
    <div className="grid grid-cols-3 gap-0.5 p-2 border-b-[1px] border-b-gray-200">
      <div></div>
      <div>
        <SInput
          placeholder="Search here..."
          hasBadge={<div className="absolute top-1 right-2">
            <Badge
              variant="outline"
              className="bg-[#F1F5F9] text-black !hover:bg-current text-[10px] font-normal"
            >
              Alt+F4
            </Badge>
          </div>}
          className="focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 active:outlin-none"
        />
      </div>
      <div className="flex justify-end gap-x-1.5">
        <img src="/icons/date_range.svg" alt="date_range" className="w-36" />
        <div className="flex gap-2">
          {iconsPathArr.map((iconPath, index) => (
            <Image
              key={index}
              src={iconPath}
              className="cursor-p"
              alt="icon"
              width={36}
              height={36}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
