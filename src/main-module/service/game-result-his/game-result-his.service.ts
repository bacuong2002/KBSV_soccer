import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameResultHis } from '../../entity/game-result-his/game-result-his.entity';
import { BaseEntityService } from 'src/common-module/service/base-entity/base-entity.service';

@Injectable()
export class GameResultHisService extends BaseEntityService {
    constructor(@InjectRepository(GameResultHis) public entityRepository: Repository<GameResultHis>) {
        super(entityRepository);
    }
}
