import { Entity, Column, BeforeInsert, BeforeUpdate, BeforeRemove } from 'typeorm';
import { BaseEntity } from 'src/common-module/entity/base/base.entity';

@Entity({ name: 'tbl_user_info' })
export class UserInfo extends BaseEntity {
    @Column()
    key: string

    @Column()
    source: string

    @Column()
    fullName: string

    @Column()
    avatarLink: string

    @Column()
    code: string
    
    @Column()
    name: string
}