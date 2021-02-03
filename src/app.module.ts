import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssociatesModule } from './associates/associates.module';

@Module({
  imports: [AssociatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
