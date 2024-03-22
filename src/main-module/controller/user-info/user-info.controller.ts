import { Controller } from '@nestjs/common';
import { UserInfoService } from '../../service/user-info/user-info.service';
import { BaseEntityController } from 'src/common-module/controller/base-entity/base-entity.controller';

@Controller('/api/v1/user-info')
export class UserInfoController extends BaseEntityController {
    constructor(public entityService: UserInfoService) {
        super(entityService)
    }
}
