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

const SalesFirstContainer = ({ lstProduct, setLstProduct }: any) => {
  const onAddNew = () => {
    setLstProduct([
      ...lstProduct,
      {
        item_name: "Lorem Ipsum",
        item_desc: "Lorem Ipsum",
        qty: 0,
        g_rate: 0,
        discount: 0,
        net_amount: 0,
        tax: 0,
      },
    ]);
  };
  const onDelete = (index: number) => {
    setLstProduct([...lstProduct].filter((_, ind) => ind !== index));
  };

  const onChangeProduct = (value: any, key: string, index: number) => {
    setLstProduct(
      [...lstProduct].map((obj, ind) => {
        if (ind === index) {
          return { ...obj, [key]: value };
        } else {
          return obj;
        }
      })
    );
  };

  const getTotalByKey = (key: string) => {
    return lstProduct?.reduce(
      (total: number, item: any) => total + (Number(item[key]) || 0),
      0
    );
  };

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
            <TableHead
              className="text-right text-muted cursor-pointer"
              onClick={() => onAddNew()}
            >
              +
            </TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody className="flex-grow overflow-y-auto w-[100vw]">
          {lstProduct?.length > 0 &&
            lstProduct.map((objProduct: any, index: number) => (
              <TableRow key={index + 1} className="h-[35px]">
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  <div>
                    <SInput
                      placeholder="Item"
                      className="z-0 focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 active:outline-none"
                      onChange={(e) =>
                        onChangeProduct(e.target.value, "item_name", index)
                      }
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
                    onChange={(e) =>
                      onChangeProduct(e.target.value, "qty", index)
                    }
                  />
                </TableCell>
                <TableCell className="text-right">
                  <SInput
                    className="focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 active:outline-none"
                    placeholder="G.Rate"
                    type="number"
                    name="g_rate"
                    value={objProduct.g_rate}
                    onChange={(e) =>
                      onChangeProduct(e.target.value, "g_rate", index)
                    }
                  />
                </TableCell>
                <TableCell className="text-right">
                  <SInput
                    className="focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 active:outline-none"
                    placeholder="Disc. (%)"
                    type="number"
                    name="discount"
                    value={objProduct.discount}
                    onChange={(e) =>
                      onChangeProduct(e.target.value, "discount", index)
                    }
                  />
                </TableCell>
                <TableCell className="text-right">
                  <SInput
                    className="focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 active:outline-none"
                    placeholder="G N Amt"
                    type="number"
                    name="net_amount"
                    value={objProduct.net_amount}
                    onChange={(e) =>
                      onChangeProduct(e.target.value, "net_amount", index)
                    }
                  />
                </TableCell>
                <TableCell className="text-right">
                  <SInput
                    className="focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 active:outline-none"
                    placeholder="Tax (%)"
                    type="number"
                    name="tax"
                    value={objProduct.tax}
                    onChange={(e) =>
                      onChangeProduct(e.target.value, "tax", index)
                    }
                  />
                </TableCell>
                <TableCell className="text-right">
                  <SInput
                    className="focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 active:outline-none"
                    placeholder="Amount"
                    type="number"
                    name="tax"
                    value={objProduct.qty * objProduct.g_rate}
                    disabled
                  />
                </TableCell>
                <TableCell className="text-right">
                  <div className="mt-[10px]">
                    <Image
                      key={index}
                      src={"/icons/delete.svg"}
                      className="cursor-p"
                      alt="icon"
                      width={16}
                      height={16}
                      onClick={() => onDelete(index)}
                    />
                  </div>
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
            <TableHead className="text-right text-black">
              {getTotalByKey("qty")}
            </TableHead>
            <TableHead className="text-right text-black">
              {getTotalByKey("g_rate")}
            </TableHead>
            <TableHead className="text-right text-black	">
              {getTotalByKey("discount")}
            </TableHead>
            <TableHead className="text-right text-black	">
              {getTotalByKey("net_amount")}
            </TableHead>
            <TableHead className="text-right text-black	">
              {getTotalByKey("tax")}
            </TableHead>
            <TableHead className="text-right text-black	">icon</TableHead>
            <TableHead className="text-right text-black	"></TableHead>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default SalesFirstContainer;
