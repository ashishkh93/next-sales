import React from 'react'
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

const SalesFirstContainer = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Sr.</TableHead>
            <TableHead>Item Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Qty</TableHead>
            <TableHead className="text-right">G.Rate</TableHead>
            <TableHead className="text-right">Disc. (%)</TableHead>
            <TableHead className="text-right">G N Amt</TableHead>
            <TableHead className="text-right">Tax (%)</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>
              <div>
                <div>
                  Lorem Ipsum
                </div>
                <div>
                  This is description
                </div>
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
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableHead colSpan={2} className='text-black'>Total : 0 Product</TableHead>
            <TableHead className='text-black	'>120</TableHead>
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
  )
}

export default SalesFirstContainer