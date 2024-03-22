import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from '../../entity/game/game.entity';
import { BaseEntityService } from 'src/common-module/service/base-entity/base-entity.service';

@Injectable()
export class GameService extends BaseEntityService {
    constructor(@InjectRepository(Game) public entityRepository: Repository<Game>) {
        super(entityRepository);
    }
}
