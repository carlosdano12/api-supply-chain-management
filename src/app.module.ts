import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssociatesModule } from './associates/associates.module';
import { DatabaseModule } from './database/database.module';
import configuration from './config/configurations';
import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces';
import { ConfigModule } from '@nestjs/config';
import { NiameModule } from './niame/niame.module';

const environment = process.env.NODE_ENV || 'development';

const configRoot: ConfigModuleOptions = {
  load: [configuration],
  envFilePath: `.env.${environment}`,
};

@Module({
  imports: [ConfigModule.forRoot(configRoot), AssociatesModule, DatabaseModule, NiameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
