// services/userService.ts
import { AppDataSource } from "../ormconfig";
import { Order } from "../entities/Order";
import { Repository } from "typeorm";

export class OrderService {
  private orderRepository: Repository<Order>;
  constructor() {
    this.orderRepository = AppDataSource.getRepository(Order);
  }

  async createOrder(orderBody: Order): Promise<Order> {
    const order = this.orderRepository.create(orderBody);
    return await this.orderRepository.save(order);
  }
}
