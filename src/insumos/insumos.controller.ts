import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { InsumosService } from './insumos.service';

@ApiTags('Insumos')
@ApiBearerAuth()
@Controller('insumos')
export class InsumosController {
  constructor(private readonly insumoService: InsumosService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getMany() {
    return await this.insumoService.getMany();
  }
}
