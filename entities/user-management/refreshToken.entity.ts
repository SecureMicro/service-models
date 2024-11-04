import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../base.entity";
import { UserEntity } from "./user.entity";

@Entity("refresh_token")
export class RefreshTokenEntity extends BaseEntity {
  @Column({ type: "varchar", length: 255, name: "refresh_token" })
  refreshToken!: string;

  @ManyToOne(() => UserEntity, (user) => user.refreshTokens, { nullable: true })
  @JoinColumn({ name: "user_id" })
  user!: UserEntity;
}
