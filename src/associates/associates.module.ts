import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssociatesController } from './associates.controller';
import { AssociatesService } from './associates.service';
import { Asociado } from './entities/associates.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asociado])],
  controllers: [AssociatesController],
  providers: [AssociatesService],
  exports: [AssociatesService],
})
export class AssociatesModule {}
