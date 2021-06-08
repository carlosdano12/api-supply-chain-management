import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateInsumoDto } from './dto/create-insumo.dto';
import { UpdateInsumoDto } from './dto/update-insumo.dto';
import { InsumosService } from './insumos.service';

@ApiTags('Insumos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('insumos')
export class InsumosController {
  constructor(private readonly insumoService: InsumosService) {}

  @Get()
  async getMany() {
    return await this.insumoService.getMany();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.insumoService.getOne(id);
  }

  @Post()
  async create(@Body() dto: CreateInsumoDto) {
    await this.insumoService.create(dto);
  }

  @Put(':id')
  @HttpCode(204)
  async update(@Param('id') id: string, @Body() dto: UpdateInsumoDto) {
    this.insumoService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.insumoService.delete(id);
  }
}
