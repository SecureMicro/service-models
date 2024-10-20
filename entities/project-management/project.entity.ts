import { Column, Entity, Index } from "typeorm";
import { BaseEntity } from "../base.entity";

@Entity('project')
@Index('project_id_index', ['projectId'], { unique: true, where: 'deleted_at IS NULL'})
export class ProjectEntity extends BaseEntity {
    @Column({
        type: 'varchar',
        name: 'project_id',
        unique: true,
        nullable: false,
    })
    projectId!: string;

    @Column({
        type: 'varchar',
        length: 255,
    })
    name!: string;

    @Column({
        type: 'uuid',
        name: 'user_id',
        nullable: false,
    })
    userId!: string;
}