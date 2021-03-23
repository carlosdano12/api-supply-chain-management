import { Controller, Get } from '@nestjs/common';
import { ReportesService } from './reportes.service';

@Controller('reportes')
export class ReportesController {
  constructor(private readonly _reportesService: ReportesService) {}

  @Get()
  async getMany() {
    return await this._reportesService.getMany();
  }
}
