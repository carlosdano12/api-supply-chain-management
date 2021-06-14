import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesService } from './clientes.service';
import { Cliente } from './entities/cliente.entity';
import { ClientesController } from './clientes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  providers: [ClientesService],
  controllers: [ClientesController],
})
export class ClientesModule {}
