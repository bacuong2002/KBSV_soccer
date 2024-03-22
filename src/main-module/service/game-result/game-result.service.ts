import { Injectable} from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { GameResult } from '../../entity/game-result/game-result.entity';
import { BaseEntityService } from 'src/common-module/service/base-entity/base-entity.service';
import { JDBCTemplate } from 'src/common-module/utils/jdbc-template/jdbc-template';

@Injectable()
export class GameResultService extends BaseEntityService {
    constructor(@InjectRepository(GameResult) public entityRepository: Repository<GameResult>,
    @InjectDataSource()public dataSource:DataSource,
    ) {
        super(entityRepository);

    }
    async getRank(userInfoId: number): Promise<any> {
        const GET_Rank =`select r.user_info_id, r.point, r.user_rank
            from
            (
            SELECT
                user_info_id,point,
                RANK() OVER (ORDER BY point DESC,created_at ASC) as user_rank
            FROM
                tbl_game_result) as r
            where r.user_info_id = :user_info_id
            LIMIT 1`
            ;

        const rank = await JDBCTemplate.query({
            dataSource: this.dataSource,
            sqlCommand: GET_Rank,
            params: {   
                user_info_id: userInfoId 
            },
        });
        return rank;
    }
} 
