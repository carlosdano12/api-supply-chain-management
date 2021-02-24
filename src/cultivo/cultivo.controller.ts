import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CultivoService } from './cultivo.service';
import { CultivoDto } from './dto/cultivo.dto';

@ApiTags('Cultivo Siembra')
@Controller('cultivo')
export class CultivoController {
  constructor(private readonly _cultivoService: CultivoService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createOne(@Body() dto: CultivoDto) {
    return await this._cultivoService.createOne(dto);
  }

  @Get('/GetAllByAsociado/:asociadId')
  @UseGuards(JwtAuthGuard)
  async getManyB(@Param('asociadId') asociadId: string) {
    return await this._cultivoService.getManyByAsociado(asociadId);
  }

  @Get('/GetSiembraByAsociado/:asociadId/:cultivoId')
  @UseGuards(JwtAuthGuard)
  async getOne(@Param('asociadId') asociadId: string, @Param('cultivoId') cultivoId: string) {
    return await this._cultivoService.getOne(asociadId, cultivoId);
  }

  @Put('/UpdateSiembra/:asociadId/:cultivoId')
  @UseGuards(JwtAuthGuard)
  async editOne(@Param('asociadId') asociadId: string, @Param('cultivoId') cultivoId: string, @Body() dto: CultivoDto) {
    return await this._cultivoService.editOne(asociadId, cultivoId, dto);
  }
}
