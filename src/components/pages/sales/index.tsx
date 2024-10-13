import PageHeader from "@/components/header/page-header";
import React from "react";
import SalesFirstContainer from "./sales-first-container";

const SalesComp = () => {
  return (
    <div>
      <div className="mb-[14px]">
        <PageHeader
          title="Sales Bill"
          backIcon={<img src="/icons/back-icon.svg" alt="backIcon" />}
          rightSideComp={
            <div className="font-semibold">Bill Amount: $1000.56</div>
          }
        />
      </div>
      <div className="w-full h-[172px] border-[1px] border-[#E2E8F0] rounded-lg shadow-sm bg-[#f8fafc]">
        <SalesFirstContainer />
      </div>
    </div>
  );
};

export default SalesComp;
