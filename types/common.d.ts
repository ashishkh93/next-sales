import { Order } from "../entities/Order";
import { OrderDetail } from "../entities/OrderDetail";

interface ApiResponse<T> {
  status: boolean;
  message: string;
  entity: T;
}

interface IOrderBody extends Order {
  orderDetail: OrderDetail[];
}
