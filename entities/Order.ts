// entities/User.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  party_name: string;

  @Column({ type: "varchar", length: 255 })
  ref_voucher_book: string;

  @Column({ type: "varchar", length: 255 })
  ref_voucher_code: string;

  @Column({ type: "varchar", length: 255 })
  voucher_num: string;

  @Column({ type: "date" })
  voucher_date: string;

  @Column({ type: "text" })
  remark: string;

  @Column({ type: "float" })
  total_amount: number;

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updatedAt!: Date;

  // Bidirectional relation to OrderDetail
  //   @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
  //   orderDetails: OrderDetail[];
}
