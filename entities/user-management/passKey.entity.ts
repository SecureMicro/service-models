import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../base.entity";
import { UserEntity } from "./user.entity";

@Entity("pass_key")
export class PassKeyEntity extends BaseEntity {
  @Column({
    type: "varchar",
    length: 255,
    name: "public key",
    nullable: false,
  })
  publicKey!: string;

  @ManyToOne(() => UserEntity, (user) => user.passKeys, { nullable: false })
  @JoinColumn({ name: "user_id" })
  user!: UserEntity;

  @Column({
    type: "varchar",
    length: 255,
    name: "challenge",
    nullable: false,
  })
  challenge!: string;

  @Column({
    type: "varchar",
    length: 255,
    name: "webauthn_user_id",
    nullable: false,
  })
  webauthnUserId!: string;

  @Column({
    type: "int",
    nullable: false,
  })
  counter!: number;

  @Column({
    type: "bool",
    name: "backup_eligible",
  })
  backupEligible!: boolean;

  @Column({
    type: "bool",
    name: "backup_status",
  })
  backupStatus!: boolean;

  @Column({
    type: "varchar",
    length: 255,
  })
  transports!: string;

  @Column({
    type: "timestamp with time zone",
    name: "last_used",
  })
  lastUsed!: Date;
}
