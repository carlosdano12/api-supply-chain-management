import { Module } from '@nestjs/common';
import { AssociatesController } from './associates.controller';
import { AssociatesService } from './associates.service';

@Module({
  controllers: [AssociatesController],
  providers: [AssociatesService],
})
export class AssociatesModule {}
