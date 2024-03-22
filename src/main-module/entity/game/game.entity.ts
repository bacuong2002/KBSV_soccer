import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'src/common-module/entity/base/base.entity';

@Entity({ name: 'tbl_game' })
export class Game extends BaseEntity {
    @Column({unique: true})
    code: string

    @Column()
    name: string
    
}