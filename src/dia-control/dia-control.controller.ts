import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { DiaControlService } from './dia-control.service';
import { DiaControlDto } from './dtos/dia_control.dto';

@ApiTags('Dia Control')
@ApiBearerAuth()
@Controller('dia-control')
export class DiaControlController {
  constructor(private readonly _diaControlService: DiaControlService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() dto: DiaControlDto) {
    return await this._diaControlService.createOne(dto);
  }

  @Get(':cultivoId')
  @UseGuards(JwtAuthGuard)
  async getMany(@Param('cultivoId') cultivoId: string) {
    return await this._diaControlService.getMany(cultivoId);
  }

  @Put(':diaControlId')
  @UseGuards(JwtAuthGuard)
  async update(@Param('diaControlId') diaControlId: string, @Body() dto: DiaControlDto) {
    return await this._diaControlService.editOne(diaControlId, dto);
  }
}
