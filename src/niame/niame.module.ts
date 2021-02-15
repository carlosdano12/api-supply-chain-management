import { Module } from '@nestjs/common';
import { NiameRepository } from './niame.repository';
import { NiameService } from './niame.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NiameController } from './niame.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NiameRepository])],
  providers: [NiameService],
  controllers: [NiameController],
})
export class NiameModule {}
