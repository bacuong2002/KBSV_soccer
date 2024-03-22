import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInfo } from '../../entity/user-info/user-info.entity';
import { BaseEntityService } from 'src/common-module/service/base-entity/base-entity.service';

@Injectable()
export class UserInfoService extends BaseEntityService {
    constructor(@InjectRepository(UserInfo) public entityRepository: Repository<UserInfo>) {
        super(entityRepository);
    }
}
