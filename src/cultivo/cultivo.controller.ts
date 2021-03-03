import { Body, Controller, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
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
  async createOne(@Request() req: any, @Body() dto: CultivoDto) {
    const { id } = req.user;
    return await this._cultivoService.createOne(dto, id);
  }

  @Get('/GetAllByAsociado')
  @UseGuards(JwtAuthGuard)
  async getManyB(@Request() req: any) {
    const { id } = req.user;
    return await this._cultivoService.getManyByAsociado(id);
  }

  @Get('/GetSiembraByAsociado/:cultivoId')
  @UseGuards(JwtAuthGuard)
  async getOne(@Request() req: any, @Param('cultivoId') cultivoId: string) {
    const { id } = req.user;
    return await this._cultivoService.getOne(id, cultivoId);
  }

  @Put('/UpdateSiembra/:cultivoId')
  @UseGuards(JwtAuthGuard)
  async editOne(@Request() req: any, @Param('cultivoId') cultivoId: string, @Body() dto: CultivoDto) {
    const { id } = req.user;
    return await this._cultivoService.editOne(id, cultivoId, dto);
  }
}
