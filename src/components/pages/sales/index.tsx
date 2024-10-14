import PageHeader from "@/components/header/page-header";
import React from "react";
import SalesFirstContainer from "./sales-first-container";
import { Input } from "@/components/ui/input";
import SInput from "@/components/shared/SInput";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
      <div className="w-full border-[1px] py-4 mb-3 border-[#E2E8F0] rounded-lg shadow-sm bg-[#f8fafc]">
        <div className="grid grid-cols-12 gap-4 ">
          <div className="col-span-6 px-4">
            <div className="flex justify-between mb-1">
              <span>Party Name</span>
              <span>Curr. Bal. : 1000.00 Dr.</span>
            </div>
            <SInput
              placeholder="Search here..."
              hasBadge={<div className="absolute top-2 right-2 border-l-2">10 Days</div>}
              className="focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 active:outline-none pr-[70px]"
            />
          </div>

          <div className="col-span-6 px-4">
            <div className="w-[50%] ml-auto">
              <div className="mb-1">
                <span>Ref. Voucher Book</span>
              </div>
              <Input type="email" placeholder="Email" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 pt-3">
          <div className="col-span-6 px-4">
            <div className="flex justify-between mb-1">
              <span>Remark</span>
            </div>
            <SInput
              placeholder="Add remark"
              className="focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 active:outline-none pr-[70px]"
            />
          </div>

          <div className="col-span-6 px-4">
            <div className="w-[50%] ml-auto">
              <div className="mb-1">
                <span>Voucher Number & Date</span>
              </div>
              <Input type="email" placeholder="SI / 99999 / 23-24" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-[1px] border-[#E2E8F0] rounded-lg shadow-sm bg-[#f8fafc]">
        <SalesFirstContainer />
      </div>
      <div className="w-[40%] ml-auto mt-4 border-[1px] border-[#E2E8F0] rounded-lg shadow-sm bg-[#f8fafc]">
        <Table>
          <TableHeader>
            <TableRow className="border-b-1 border-[#E2E8F0]">
              <TableHead>Sundary Details</TableHead>
              <TableHead>%</TableHead>
              <TableHead className="text-right">₹ Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">This is description</TableCell>
              <TableCell>
                6
              </TableCell>
              <TableCell className="text-right">25</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <PageHeader
        rightSideComp={
          <div className="font-semibold mt-4">Bill Amount : 0.0</div>
        }
      />
    </div>
  );
};

export default SalesComp;
