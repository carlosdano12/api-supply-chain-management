import { Body, Controller, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { VentaDto } from './dto/venta.dto';
import { VentasService } from './ventas.service';

@Controller('ventas')
export class VentasController {
  constructor(private readonly _ventasService: VentasService) {}

  @Post()
  //@UseGuards(JwtAuthGuard)
  async create(@Request() req: any, @Body() dto: VentaDto) {
    const { id } = req.user;
    return await this._ventasService.createOne(id, dto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getMany() {
    return await this._ventasService.getMany();
  }

  @Put(':ventaId')
  @UseGuards(JwtAuthGuard)
  async update(@Param('ventaId') ventaId: string, @Body() dto: VentaDto) {
    return await this._ventasService.editOne(ventaId, dto);
  }
}
