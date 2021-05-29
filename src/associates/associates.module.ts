import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssociatesController } from './associates.controller';
import { AssociatesService } from './associates.service';
import { AssociatesRequestService } from './associate_request.service';
import { Asociado } from './entities/associates.entity';
import { AsociadoRequest } from './entities/associate_request.entity';
import { Rol } from './entities/associate_roles.entity';
import { RolesController } from './role.controller';
import { RoleService } from './role.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Asociado]),
    TypeOrmModule.forFeature([AsociadoRequest]),
    TypeOrmModule.forFeature([Rol]),
  ],
  controllers: [AssociatesController, RolesController],
  providers: [AssociatesService, AssociatesRequestService, RoleService],
  exports: [AssociatesService, AssociatesRequestService],
})
export class AssociatesModule {}
