import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssociatesModule } from './associates/associates.module';
import { DatabaseModule } from './database/database.module';
import configuration from './config/configurations';
import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces';
import { ConfigModule } from '@nestjs/config';
import { NiameModule } from './niame/niame.module';
import { CultivoModule } from './cultivo/cultivo.module';
import { AuthModule } from './auth/auth.module';
import { InsumosModule } from './insumos/insumos.module';
import { DiaControlModule } from './dia-control/dia-control.module';
import { CompraModule } from './compra/compra.module';
import { TransporteModule } from './transporte/transporte.module';
import { ReportesModule } from './reportes/reportes.module';
import { VentasModule } from './ventas/ventas.module';

const environment = process.env.NODE_ENV || 'development';

const configRoot: ConfigModuleOptions = {
  load: [configuration],
  envFilePath: `.env.${environment}`,
};

@Module({
  imports: [
    ConfigModule.forRoot(configRoot),
    AssociatesModule,
    DatabaseModule,
    NiameModule,
    CultivoModule,
    AuthModule,
    InsumosModule,
    DiaControlModule,
    CompraModule,
    TransporteModule,
    ReportesModule,
    VentasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
