import { AppDataSource } from "../ormconfig";
import { Repository } from "typeorm";
import { OrderDetail } from "../entities/OrderDetail";

export class OrderDetailService {
  private orderDetailRepository: Repository<OrderDetail>;
  constructor() {
    this.orderDetailRepository = AppDataSource.getRepository(OrderDetail);
  }

  async createBulkOrderDetail(
    orderDetailBody: OrderDetail[]
  ): Promise<OrderDetail[]> {
    const orderDetail = this.orderDetailRepository.create(orderDetailBody);
    return await this.orderDetailRepository.save(orderDetail);
  }
}
