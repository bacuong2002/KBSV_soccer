import { Controller, Get, HttpStatus, Query, Req, Res } from '@nestjs/common';
import { GameResultService } from '../../service/game-result/game-result.service';
import { BaseEntityController } from 'src/common-module/controller/base-entity/base-entity.controller';
import { plainToClass } from 'class-transformer';
import { DataTableFilter } from 'src/common-module/dto/data-table-filter.dto';
import { DataTableResponse } from 'src/common-module/dto/data-table-response.dto';
import { GeneralResponse, GeneralResponseErrorDetail } from 'src/common-module/dto/general-response.dto';
import { Request, Response } from 'express';

@Controller('/api/v1/game-result')
export class GameResultController extends BaseEntityController {
    constructor(public entityService: GameResultService) {
        super(entityService)
    }

    @Get(['/load-data-table', '/loadDataTable'])
    async loadDataTable(@Req() request: Request, @Res({ passthrough: true }) res: Response): Promise<any> {
        if (request.query.filters) {
            request.query.filters = JSON.parse(request.query.filters.toString())
        }
        let dataTableFilter = plainToClass(DataTableFilter, request.query, {
            enableImplicitConversion: true,
        })

        let loadDataTableMethod: Promise<[any[], number]>
        if (request.query['mt'] === 'qb') {
            loadDataTableMethod = this.entityService.loadDataTableUsingQueryBuilder(dataTableFilter)
        } else {
            loadDataTableMethod = this.entityService.loadDataTable(dataTableFilter, {
                relations: {
                    game: true,
                    userInfo: true
                }
            })
        }
        try {
            let data: any = await loadDataTableMethod
            let dataTableResponse = new DataTableResponse()
            dataTableResponse.first = dataTableFilter.first;
            dataTableResponse.rows = dataTableFilter.rows;
            dataTableResponse.items = data[0].map((item: any) => {
                return this.entityService.modifyData(item, this.__getExcludeKeys);
            });
            dataTableResponse.totalRows = data[1];
            return dataTableResponse;
        } catch (e) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR)
            return GeneralResponse.getInstance(GeneralResponseErrorDetail.EXECEPTION_ERROR, { message: e.message });
        }

        
    }

    @Get ('/rank-by-username')
        async getRank(@Query('gameCode')userInfoId:number,  gameCode: string, @Query('key') key: string){           
        return await this.entityService.getRank(userInfoId);
    }
}
