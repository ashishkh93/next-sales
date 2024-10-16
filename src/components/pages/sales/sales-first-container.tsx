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
import SInput from "@/components/shared/SInput";
import Image from "next/image";

const bodyLoop = [1, 2, 3, 4, 5, 6];

const SalesFirstContainer = ({ lstProduct, setLstProduct }: any) => {

  const onAddNew = () => {
    setLstProduct([
      ...lstProduct,
      {
        itemName: 'Lorem Ipsum',
        description: 'Lorem Ipsum',
        qty: 0,
        gRate: 0,
        discount: 0,
        gnAmount: 0,
        tax: 0,
      }
    ])
  }
  const onDelete = (index: number) => {
    setLstProduct([...lstProduct].filter((_, ind) => ind !== index))
  }

  const onChangeProduct = (value: any, key: string, index: number) => {
    setLstProduct([...lstProduct].map((obj, ind) => {
      if (ind === index) {
        return { ...obj, [key]: value }
      } else {
        return obj
      }
    }))
  }

  const getTotalByKey = (key: string) => {
    return lstProduct?.reduce((total: number, item: any) => total + (Number(item[key]) || 0), 0);
  }

  return (
    <div className="h-full flex flex-col">
      <Table className="flex-grow">
        <TableHeader className="sticky top-0 bg-primary z-10">
          <TableRow className="z-20">
            <TableHead className="w-[100px] text-muted">Sr.</TableHead>
            <TableHead className="text-muted">Item Name</TableHead>
            <TableHead className="text-muted">Description</TableHead>
            <TableHead className="text-right text-muted">Qty</TableHead>
            <TableHead className="text-right text-muted">G.Rate</TableHead>
            <TableHead className="text-right text-muted">Disc. (%)</TableHead>
            <TableHead className="text-right text-muted">G N Amt</TableHead>
            <TableHead className="text-right text-muted">Tax (%)</TableHead>
            <TableHead className="text-right text-muted">Amount</TableHead>
            <TableHead className="text-right text-muted" onClick={() => onAddNew()}>+</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody className="flex-grow overflow-y-auto w-[100vw]">
          {lstProduct?.length > 0 && lstProduct.map((objProduct: any, index: number) => (
            <TableRow key={index + 1} className="h-[35px]">
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <div>
                  <SInput
                    placeholder="Item"
                    className="z-0 focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 active:outline-none"
                  />
                  {/* <div className="text-md">Lorem Ipsum</div>
                  <div className="text-sm">This is description</div> */}
                </div>
              </TableCell>
              <TableCell>Lorem Ipsum</TableCell>
              <TableCell className="text-right">
                <SInput
                  className="focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 active:outline-none"
                  type="number"
                  placeholder="Qty"
                  name="qty"
                  value={objProduct.qty}
                  onChange={(e) => onChangeProduct(e.target.value, 'qty', index)}
                />
              </TableCell>
              <TableCell className="text-right">
                <SInput
                  className="focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 active:outline-none"
                  placeholder="G.Rate"
                  type="number"
                  name="gRate"
                  value={objProduct.gRate}
                  onChange={(e) => onChangeProduct(e.target.value, 'gRate', index)}
                />
              </TableCell>
              <TableCell className="text-right">
                <SInput
                  className="focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 active:outline-none"
                  placeholder="Disc. (%)"
                  type="number"
                  name="discount"
                  value={objProduct.discount}
                  onChange={(e) => onChangeProduct(e.target.value, 'discount', index)}
                />
              </TableCell>
              <TableCell className="text-right">
                <SInput
                  className="focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 active:outline-none"
                  placeholder="G N Amt"
                  type="number"
                  name="gnAmount"
                  value={objProduct.gnAmount}
                  onChange={(e) => onChangeProduct(e.target.value, 'gnAmount', index)}
                />
              </TableCell>
              <TableCell className="text-right">
                <SInput
                  className="focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 active:outline-none"
                  placeholder="Tax (%)"
                  type="number"
                  name="tax"
                  value={objProduct.tax}
                  onChange={(e) => onChangeProduct(e.target.value, 'tax', index)}
                />
              </TableCell>
              <TableCell className="text-right">
                <SInput
                  className="focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 active:outline-none"
                  placeholder="Amount"
                  type="number"
                  name="tax"
                  value={objProduct.qty * objProduct.gRate}
                // onChange={(e) => onChangeProduct(e.target.value, 'tax', index)}
                />
              </TableCell>
              <TableCell className="text-right" onClick={() => onDelete(index)}>
                <Image
                  key={index}
                  src={"/icons/delete.svg"}
                  className="cursor-p"
                  alt="icon"
                  width={16}
                  height={16}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        {/* Table Footer */}
        <TableFooter className="sticky bottom-0 bg-primary">
          <TableRow>
            <TableHead colSpan={2} className="text-black">
              Total : {lstProduct?.length} Product
            </TableHead>
            <TableHead className="text-black"></TableHead>
            <TableHead className="text-right text-black">{getTotalByKey('qty')}</TableHead>
            <TableHead className="text-right text-black">{getTotalByKey('gRate')}</TableHead>
            <TableHead className="text-right text-black	">{getTotalByKey('discount')}</TableHead>
            <TableHead className="text-right text-black	">{getTotalByKey('gnAmount')}</TableHead>
            <TableHead className="text-right text-black	">{getTotalByKey('tax')}</TableHead>
            <TableHead className="text-right text-black	">icon</TableHead>
            <TableHead className="text-right text-black	"></TableHead>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default SalesFirstContainer;
