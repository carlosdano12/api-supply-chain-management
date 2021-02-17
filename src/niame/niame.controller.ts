import { Body, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { NiameService } from './niame.service';

@Controller('niame')
export class NiameController {
  constructor(private readonly niameService: NiameService) {}

  @Post()
  //@UseGuards(JwtAuthGuard)
  async createOne(@Body('nombre') nombre: string) {
    return await this.niameService.createOne(nombre);
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
