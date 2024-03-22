import { Entity, Column, BeforeInsert, BeforeUpdate, BeforeRemove } from 'typeorm';
import { BaseEntity } from 'src/common-module/entity/base/base.entity';

@Entity({ name: 'tbl_source' })
export class Source extends BaseEntity {

    @Column()
    code: string
    
    @Column()
    name: string
}