import { Controller } from '@nestjs/common';
import { GameService } from '../../service/game/game.service';
import { BaseEntityController } from 'src/common-module/controller/base-entity/base-entity.controller';

@Controller('/api/v1/game')
export class GameController extends BaseEntityController {
    constructor(public entityService: GameService) {
        super(entityService)
    }
}
