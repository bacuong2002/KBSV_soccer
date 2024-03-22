import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Source } from '../../entity/source/source.entity';
import { BaseEntityService } from 'src/common-module/service/base-entity/base-entity.service';

@Injectable()
export class SourceService extends BaseEntityService {
    constructor(@InjectRepository(Source) public entityRepository: Repository<Source>) {
        super(entityRepository);
    }
}
