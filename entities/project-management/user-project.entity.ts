import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../base.entity";
import { ProjectEntity } from "./project.entity";

@Entity("user_project")
export class UserProjectEntity extends BaseEntity {
  @Column({
    type: "uuid",
    name: "user_id",
    nullable: false,
  })
  userId!: string;

  @ManyToOne(() => ProjectEntity, { cascade: true })
  @JoinColumn({ name: "project_id", referencedColumnName: "id" })
  project!: ProjectEntity;

  @Column({ name: "is_latest", type: "boolean", nullable: true })
  isLatest!: boolean;
}
