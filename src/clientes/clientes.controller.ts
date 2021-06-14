import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create_cliente.dto';
import { UpdateClienteDto } from './dto/update_cliente.dto';

@ApiTags('Clientes')
@ApiBearerAuth()
@Controller('clientes')
export class ClientesController {
  constructor(private readonly _clientesService: ClientesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getMany() {
    return await this._clientesService.getMany();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getOneAsociate(@Param('id') id: string) {
    return await this._clientesService.getOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createOne(@Body() dto: CreateClienteDto) {
    return await this._clientesService.createOne(dto);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateOneRequest(@Param('id') id: string, @Body() dto: UpdateClienteDto) {
    return await this._clientesService.editOne(id, dto);
  }
}
