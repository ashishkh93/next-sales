// entities/User.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Order } from "./Order";

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn()
  id: number;

  // Link the order_id to the Order's primary key (id)
  @ManyToOne(() => Order, { onDelete: "CASCADE" })
  @JoinColumn({ name: "order_id" })
  order: Order;

  @Column({ type: "varchar", length: 255 })
  item_name: string;

  @Column({ type: "text" })
  item_desc: string;

  @Column({ type: "int" })
  qty: number;

  @Column({ type: "float" })
  g_rate: number;

  @Column({ type: "float" })
  discount: number;

  @Column({ type: "float" })
  net_amount: number;

  @Column({ type: "float" })
  tax: number;

  @Column({ type: "float" })
  total_amount: number;

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updatedAt!: Date;
}
