import { Body, Controller, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CompraService } from './compra.service';
import { CompraDto } from './dto/compra.dto';
import { CompraHechoDto } from './dto/compraHecho.dto';

@ApiTags('Compras')
@ApiBearerAuth()
@Controller('compra')
export class CompraController {
  constructor(private readonly _compraService: CompraService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() req: any, @Body() dto: CompraDto) {
    const { id } = req.user;
    return await this._compraService.create(id, dto);
  }

  @Post('hechas')
  @UseGuards(JwtAuthGuard)
  async createOne(@Request() req: any, @Body() dto: CompraHechoDto) {
    const { id } = req.user;
    return await this._compraService.createOne(id, dto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getMany(@Request() req: any) {
    const { id } = req.user;
    return await this._compraService.getMany(id);
  }

  @Get('hechas')
  @UseGuards(JwtAuthGuard)
  async getManyHechas() {
    return await this._compraService.getManyHechas();
  }

  @Get('solicitudes')
  @UseGuards(JwtAuthGuard)
  async getManySolicitudes() {
    return await this._compraService.getManySolicitudes();
  }

  @Put(':compraId')
  @UseGuards(JwtAuthGuard)
  async update(@Param('compraId') compraId: string, @Body() dto: CompraDto) {
    return await this._compraService.editOne(compraId, dto);
  }
}
