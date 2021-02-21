import { Body, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NiameDto } from './dto/niame.dto';
import { NiameService } from './niame.service';

@ApiTags('Niame')
@Controller('niame')
export class NiameController {
  constructor(private readonly niameService: NiameService) {}

  @Post()
  //@UseGuards(JwtAuthGuard)
  async createOne(@Body() dto: NiameDto) {
    return await this.niameService.createOne(dto.nombre);
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  async getMany() {
    return await this.niameService.getMany();
  }

  @Get(':id')
  //@UseGuards(JwtAuthGuard)
  async getOne(@Param('id') id: string) {
    return await this.niameService.getOne(id);
  }

  @Put(':id')
  @HttpCode(204)
  //@UseGuards(JwtAuthGuard)
  async editOne(@Param('id') id: string, @Body('nombre') nombre: string) {
    await this.niameService.editOne(id, nombre);
    return;
  }
}
