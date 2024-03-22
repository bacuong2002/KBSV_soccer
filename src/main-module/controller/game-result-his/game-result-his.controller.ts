import { Controller } from '@nestjs/common';
import { GameResultHisService } from '../../service/game-result-his/game-result-his.service';
import { BaseEntityController } from 'src/common-module/controller/base-entity/base-entity.controller';

@Controller('/api/v1/game-result-his')
export class GameResultHisController extends BaseEntityController {
    constructor(public entityService: GameResultHisService,
    ) {
        super(entityService)
    }

}
