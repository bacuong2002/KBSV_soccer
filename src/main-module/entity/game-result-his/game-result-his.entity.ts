import { Entity, Column, BeforeInsert, BeforeUpdate, BeforeRemove, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/common-module/entity/base/base.entity';
import { Game } from '../game/game.entity';
import { UserInfo } from '../user-info/user-info.entity';

@Entity({ name: 'tbl_game_result_his' })
export class GameResultHis extends BaseEntity {
    @Column()
    point: number

    @ManyToOne(() => Game)
    @JoinColumn({ name: 'game_id', referencedColumnName: 'id' })
    game: Game;

    @ManyToOne(() => UserInfo)
    @JoinColumn({ name: 'user_info_id', referencedColumnName: 'id' })
    userInfo: UserInfo;
}