import { Body, Controller, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RecibirNiame } from './dto/recibir-niame.dto';
import { TransporteDto } from './dto/transporte.dto';
import { TransporteService } from './transporte.service';

@ApiTags('Transportes')
@ApiBearerAuth()
@Controller('transporte')
export class TransporteController {
  constructor(private readonly _transporteService: TransporteService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() req: any, @Body() dto: TransporteDto) {
    const { id } = req.user;
    return await this._transporteService.createOne(id, dto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getMany(@Request() req: any) {
    const { id } = req.user;
    return await this._transporteService.getMany(id);
  }

  @Put(':transporteId')
  @UseGuards(JwtAuthGuard)
  async update(@Param('transporteId') transporteId: string, @Body() dto: TransporteDto) {
    return await this._transporteService.editOne(transporteId, dto);
  }

  @Get('solicitudes')
  async getSolicitudes() {
    return await this._transporteService.getSolicitudes();
  }

  @Put(':id/toggle-status')
  async toggleStatus(@Param('id') id: string) {
    return await this._transporteService.toggleSolitud(id);
  }

  @Put('recibir/confirmar')
  async recibirNiame(@Body() recibirNiame: RecibirNiame[]) {
    return await this._transporteService.recibirNiame(recibirNiame);
  }
}
