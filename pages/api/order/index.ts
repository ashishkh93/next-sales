import { OrderService } from "./../../../services/orderService";
import type { NextApiRequest, NextApiResponse } from "next";
import { getDataSource } from "../../../ormconfig";
import { Order } from "../../../entities/Order";
import { OrderDetailService } from "../../../services/orderDetailService";
import { IOrderBody } from "../../../types/common";
import { OrderDetail } from "../../../entities/OrderDetail";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    await getDataSource();
    const orderService = new OrderService();
    const orderDeatilsService = new OrderDetailService();

    const orderBody = req.body as IOrderBody;
    const newOrder = await orderService.createOrder(orderBody);

    if (newOrder) {
      let orderDetail: OrderDetail[] = orderBody.orderDetail;
      const orderId: Order["id"] = newOrder.id;
      orderDetail = orderDetail.map((order) => ({
        ...order,
        order_id: orderId,
      }));

      const newOrderDetail = await orderDeatilsService.createBulkOrderDetail(
        orderDetail
      );

      if (!newOrderDetail) {
        res.status(500).json({
          status: false,
          message: "Order detail creation failed",
          entity: null,
        });
      }

      return res.status(200).json({
        status: true,
        message: "Order created successfully",
        entity: { ...newOrder, orderDetails: newOrderDetail },
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: (error as Error).message || "Internal Server Error" });
  }
};

export default handler;
