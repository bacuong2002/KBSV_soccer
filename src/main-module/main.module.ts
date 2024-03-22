import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common-module/common.module';
import { Game } from './entity/game/game.entity';
import { GameResult } from './entity/game-result/game-result.entity';
import { UserInfo } from './entity/user-info/user-info.entity';
import { GameResultHis } from './entity/game-result-his/game-result-his.entity';
import { Source } from './entity/source/source.entity';
import { GameController } from './controller/game/game.controller';
import { GameResultHisController } from './controller/game-result-his/game-result-his.controller';
import { UserInfoController } from './controller/user-info/user-info.controller';
import { GameResultController } from './controller/game-result/game-result.controller';
import { SourceController } from './controller/source/source.controller';
import { GameService } from './service/game/game.service';
import { GameResultService } from './service/game-result/game-result.service';
import { UserInfoService } from './service/user-info/user-info.service';
import { GameResultHisService } from './service/game-result-his/game-result-his.service';
import { SourceService } from './service/source/source.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Game,
            GameResult,
            UserInfo,
            GameResultHis,
            Source
        ]),
        CommonModule,
        MainModule,
    ],
    controllers: [
        GameController,
        GameResultHisController,
        UserInfoController,
        GameResultController,
        SourceController
    ],
    providers: [
        GameService,
        GameResultService,
        UserInfoService,
        GameResultHisService,
        SourceService
    ],
    exports: [TypeOrmModule]
})
export class MainModule {
}
