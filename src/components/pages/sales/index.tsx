import PageHeader from "@/components/header/page-header";
import React, { useState } from "react";
import SalesFirstContainer from "./sales-first-container";
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
} from "@/components/ui/table";
import InputSuffix from "./input-suffix";
import { CONSTANTS } from "@/lib/constants";
import { ComboboxDemo } from "@/components/ui/ComboboxDemo";
import Footer from "@/components/layout/footer";

const SalesComp = () => {
  const [lstProduct, setLstProduct] = useState([
    {
      itemName: "Lorem Ipsum",
      description: "Lorem Ipsum",
      qty: 0,
      gRate: 0,
      discount: 0,
      gnAmount: 0,
      tax: 0,
    },
  ]);
  const [singleParty, setSingleParty] = React.useState<string>("");
  const [ref, setRef] = React.useState<string>("");
  const [remark, setRemark] = React.useState<string>("");
  const [date, setDate] = React.useState<string>("");

  const getTotal = () => {
    return lstProduct?.reduce((total: number, item: any) => total + ((Number(item.qty) || 0) * (Number(item.gRate) || 0)), 0);
  }

  const onSave = () => {
    const data = {
      singleParty: singleParty,
      ref: ref,
      remark: remark,
      date: date,
      lstProduct: lstProduct
    }
    console.log('data: ', data);
  }
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
          <div className="col-span-6 px-4 pr-2">
            <div className="flex justify-between mb-1">
              <span className={CONSTANTS.titleClass}>Party Name</span>
              <span className={CONSTANTS.titleClass}>
                Curr. Bal. : 1000.00 Dr.
              </span>
            </div>
            <div className="flex w-full">
              <div className="w-full">
                <ComboboxDemo
                  setSingleParty={setSingleParty}
                  singleParty={singleParty}
                />
                {/* <SInput
                  placeholder="Search here..."
                  className="focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 active:outline-none rounded-r-none"
                /> */}
              </div>
              <InputSuffix body="10 Days" />
            </div>
          </div>

          <div className="col-span-6 px-4">
            <div className="w-[50%] ml-auto">
              <div className="mb-1">
                <span className={CONSTANTS.titleClass}>Ref. Voucher Book</span>
              </div>
              <div className="flex w-full">
                <SInput
                  type="text"
                  placeholder="TAX. Invoice Book"
                  className="rounded-r-none"
                  name="ref"
                  value={ref}
                  onChange={(e) => setRef(e.target.value)}
                />
                <InputSuffix
                  className="px-[37px] text-gray-500"
                  body="364001"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 pt-3">
          <div className="col-span-6 px-4">
            <div className="flex justify-between mb-1">
              <span className={CONSTANTS.titleClass}>Remark</span>
            </div>
            <SInput
              placeholder="Add remark"
              className="focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 active:outline-none"
              name="remark"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
            />
          </div>

          <div className="col-span-6 px-4">
            <div className="w-[50%] ml-auto">
              <div className="mb-1">
                <span className={CONSTANTS.titleClass}>
                  Voucher Number & Date
                </span>
              </div>
              <div className="flex w-full">
                <SInput
                  type="text"
                  placeholder="SI / 99999 / 23-24"
                  className="rounded-r-none"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <InputSuffix
                  className="px-[10px] text-gray-500"
                  body={
                    <div className="flex gap-1 justify-center items-center">
                      <span>21/03/2034</span>
                      <div>
                        <img src="/icons/date.svg" />
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[245px] border-[1px] border-[#E2E8F0] rounded-lg shadow-sm bg-[#f8fafc]">
        <SalesFirstContainer
          lstProduct={lstProduct}
          setLstProduct={setLstProduct}
        />
      </div>
      <div className="total-root w-[40%] ml-auto mt-4 border-[1px] border-[#E2E8F0] rounded-lg shadow-sm bg-[#f8fafc]">
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
              <TableCell className="font-medium">Discount</TableCell>
              <TableCell>6</TableCell>
              <TableCell className="text-right">25</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <PageHeader
        rightSideComp={
          <div className="font-semibold mt-4">Bill Amount :{getTotal()}</div>
        }
      />
      <Footer onSave={onSave} />
    </div>
  );
};

export default SalesComp;
