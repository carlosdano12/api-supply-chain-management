import { Body, Get, HttpCode, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { NiameDto } from './dto/niame.dto';
import { Niame } from './entities/niame.entity';
import { NiameService } from './niame.service';

@ApiTags('Niame')
@ApiBearerAuth()
@Controller('niame')
export class NiameController {
  constructor(private readonly niameService: NiameService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createOne(@Body() dto: NiameDto) {
    return await this.niameService.createOne(dto.nombre);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getMany() {
    return await this.niameService.getMany();
  }

  @ApiOkResponse({
    description: 'Recupera un ñame por ID exitosamente',
    type: Niame,
  })
  @ApiNotFoundResponse({ description: 'No encontro el ñame por el ID' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getOne(@Param('id') id: string) {
    return await this.niameService.getOne(id);
  }

  @Put(':id')
  @HttpCode(204)
  @UseGuards(JwtAuthGuard)
  async editOne(@Param('id') id: string, @Body('nombre') nombre: string) {
    await this.niameService.editOne(id, nombre);
    return;
  }
}
