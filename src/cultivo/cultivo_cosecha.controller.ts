import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CultivoCosechaService } from './cultivo_cosecha.service';
import { CultivoCosechaDto } from './dto/cultivo_cosecha.dto';

@ApiTags('Cultivo Cosecha')
@Controller('cultivo_cosecha')
export class CultivoCosechaController {
  constructor(private readonly _cultivoCosechaService: CultivoCosechaService) {}

  @Post()
  //@UseGuards(JwtAuthGuard)
  async createOne(@Body() dto: CultivoCosechaDto) {
    return await this._cultivoCosechaService.createOne(dto);
  }

  @Get('/GetAllByCultivo/:cultivoId')
  // @UseGuards(JwtAuthGuard)
  async getManyB(@Param('cultivoId') cultivoId: string) {
    return await this._cultivoCosechaService.getManyByCultivo(cultivoId);
  }

  @Get('/GetCosecha/:cosechaId')
  //@UseGuards(JwtAuthGuard)
  async getOne(@Param('cosechaId') cosechaId: string) {
    return await this._cultivoCosechaService.getOne(cosechaId);
  }

  @Put('/UpdateCosecha/:cosechaId')
  //@UseGuards(JwtAuthGuard)
  async editOne(@Param('cosechaId') cosechaId: string, @Body() dto: CultivoCosechaDto) {
    return await this._cultivoCosechaService.editOne(cosechaId, dto);
  }
}
