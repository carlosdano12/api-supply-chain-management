import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AssociatesService } from './associates.service';
import { AssociatesRequestService } from './associate_request.service';
import { CreateAsociadoDto } from './dto/create_asociado.dto';
import { CreateAsociadoRequestDto } from './dto/create_asociado_request.dto';

@ApiTags('Asociados')
@ApiBearerAuth()
@Controller('associates')
export class AssociatesController {
  constructor(
    private readonly _associateRequestService: AssociatesRequestService,
    private readonly _associateService: AssociatesService,
  ) {}

  @Get('request/:id')
  @UseGuards(JwtAuthGuard)
  async getOne(@Param('id') id: string) {
    return await this._associateRequestService.getOne(id);
  }

  @Get('request')
  @UseGuards(JwtAuthGuard)
  async getMany() {
    return await this._associateRequestService.getMany();
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getManyAsociates() {
    return await this._associateService.getMany();
  }

  @Get('registrado/:id')
  @UseGuards(JwtAuthGuard)
  async getOneAsociate(@Param('id') id: string) {
    return await this._associateService.getOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createOne(@Body() dto: CreateAsociadoDto) {
    return await this._associateService.createOne(dto);
  }

  @Post('request')
  @UseGuards(JwtAuthGuard)
  async createOneRequest(@Body() dto: CreateAsociadoRequestDto) {
    return await this._associateRequestService.createOne(dto);
  }
}
