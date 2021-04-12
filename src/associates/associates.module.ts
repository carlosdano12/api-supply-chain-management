import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssociatesController } from './associates.controller';
import { AssociatesService } from './associates.service';
import { AssociatesRequestService } from './associate_request.service';
import { Asociado } from './entities/associates.entity';
import { AsociadoRequest } from './entities/associate_request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asociado]), TypeOrmModule.forFeature([AsociadoRequest])],
  controllers: [AssociatesController],
  providers: [AssociatesService, AssociatesRequestService],
  exports: [AssociatesService, AssociatesRequestService],
})
export class AssociatesModule {}
