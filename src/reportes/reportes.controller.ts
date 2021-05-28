import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReportesService } from './reportes.service';

@ApiTags('Reportes')
@Controller('reportes')
export class ReportesController {
  constructor(private readonly _reportesService: ReportesService) {}

  @Get()
  async getMany() {
    return await this._reportesService.getMany();
  }
}
