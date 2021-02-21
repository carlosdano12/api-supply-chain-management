import { Body, Controller, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cultivo Siembra')
@Controller('cultivo')
export class CultivoController {
  constructor() {}

  @Post()
  //@UseGuards(JwtAuthGuard)
  async createOne() {
    console.log('algo');
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  async getMany() {
    console.log('gert');
  }

  @Get(':id')
  //@UseGuards(JwtAuthGuard)
  async getOne(@Param('id') id: string) {
    console.log('gert');
  }

  @Put(':id')
  @HttpCode(204)
  //@UseGuards(JwtAuthGuard)
  async editOne(@Param('id') id: string) {
    console.log('gert');
    return;
  }
}
