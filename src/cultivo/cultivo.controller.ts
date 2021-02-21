import { Body, Controller, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CultivoService } from './cultivo.service';

@ApiTags('Cultivo Siembra')
@Controller('cultivo')
export class CultivoController {
  constructor(private readonly _cultivoService: CultivoService) {}

  @Post()
  //@UseGuards(JwtAuthGuard)
  async createOne() {
    console.log('algo');
  }

  @Get('/GetAllByAsociado/:asociadId')
  // @UseGuards(JwtAuthGuard)
  async getManyB(@Param('asociadId') asociadId: string) {
    return await this._cultivoService.getManyByAsociado(asociadId);
  }

  @Get('/GetSiembraByAsociado/:asociadId/:cultivoId')
  //@UseGuards(JwtAuthGuard)
  async getOne(@Param('asociadId') asociadId: string, @Param('cultivoId') cultivoId: string) {
    console.log(`Asociado id: ${asociadId} cultivo id: ${cultivoId}`);
  }

  @Put(':id')
  @HttpCode(204)
  //@UseGuards(JwtAuthGuard)
  async editOne(@Param('id') id: string) {
    console.log('gert');
    return;
  }
}
