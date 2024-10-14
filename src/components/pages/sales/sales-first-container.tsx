import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const bodyLoop = [1, 2, 3, 4, 5, 6];

const SalesFirstContainer = () => {
  return (
    <div className="h-full flex flex-col">
      <Table className="flex-grow">
        <TableHeader className="sticky top-0 bg-primary">
          <TableRow>
            <TableHead className="w-[100px] text-muted">Sr.</TableHead>
            <TableHead className="text-muted">Item Name</TableHead>
            <TableHead className="text-muted">Description</TableHead>
            <TableHead className="text-right text-muted">Qty</TableHead>
            <TableHead className="text-right text-muted">G.Rate</TableHead>
            <TableHead className="text-right text-muted">Disc. (%)</TableHead>
            <TableHead className="text-right text-muted">G N Amt</TableHead>
            <TableHead className="text-right text-muted">Tax (%)</TableHead>
            <TableHead className="text-right text-muted">Amount</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody className="flex-grow overflow-y-auto">
          {bodyLoop.map((i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{i}</TableCell>
              <TableCell>
                <div>
                  <div className="text-md">Lorem Ipsum</div>
                  <div className="text-sm">This is description</div>
                </div>
              </TableCell>
              <TableCell>Lorem Ipsum</TableCell>
              <TableCell className="text-right">12 Pcs.</TableCell>
              <TableCell className="text-right">56</TableCell>
              <TableCell className="text-right">100.00</TableCell>
              <TableCell className="text-right">56</TableCell>
              <TableCell className="text-right">100.00</TableCell>
              <TableCell className="text-right">56</TableCell>
            </TableRow>
          ))}
        </TableBody>

        {/* Table Footer */}
        <TableFooter className="sticky bottom-0 bg-primary">
          <TableRow>
            <TableHead colSpan={2} className="text-black">
              Total : 0 Product
            </TableHead>
            <TableHead className="text-black	">120</TableHead>
            <TableHead className="text-right text-black">56</TableHead>
            <TableHead className="text-right text-black">56</TableHead>
            <TableHead className="text-right text-black	">56</TableHead>
            <TableHead className="text-right text-black	">56</TableHead>
            <TableHead className="text-right text-black	">56</TableHead>
            <TableHead className="text-right text-black	">icon</TableHead>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default SalesFirstContainer;
