import { Controller } from '@nestjs/common';
import { SourceService } from '../../service/source/source.service';
import { BaseEntityController } from 'src/common-module/controller/base-entity/base-entity.controller';

@Controller('/api/v1/source')
export class SourceController extends BaseEntityController {
    constructor(public entityService: SourceService) {
        super(entityService)
    }
}
