import { Column, Entity, Index } from "typeorm";
import { BaseEntity } from "../base.entity";
import { UserGender } from "../../enums";

@Entity("user")
@Index("user_phone_number_index", ["phoneNumber"], {
  unique: true,
  where: "deleted_at IS NULL",
})
@Index("user_email_index", ["email"], {
  unique: true,
  where: "deleted_at IS NULL",
})
export class UserEntity extends BaseEntity {
  @Column({
    type: "varchar",
    length: 255,
    name: "country_code",
  })
  countryCode!: string;

  @Column({
    type: "varchar",
    length: 255,
    name: "phone_number",
  })
  phoneNumber!: string;

  @Column({
    type: "varchar",
    length: 255,
    name: "full_name",
    nullable: false,
  })
  fullName!: string;

  @Column({
    type: "varchar",
    length: 255,
    name: "email",
    nullable: false,
  })
  email!: string;

  @Column({
    type: "varchar",
    length: 255,
    name: "password",
    nullable: false,
  })
  password!: string;

  @Column({
    type: "varchar",
    length: 255,
    nullable: true,
    name: "profile_image",
  })
  profileImage?: string;

  @Column({
    type: "json",
    nullable: true,
    name: "address",
  })
  address?: string;

  @Column({
    type: "enum",
    enum: UserGender,
    nullable: true,
  })
  gender?: string;

  @Column({
    type: "boolean",
    default: false,
    name: "is_details_added",
  })
  isDetailsAdded!: boolean;
}
