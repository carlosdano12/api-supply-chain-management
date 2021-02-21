import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const options = new DocumentBuilder()
    .setTitle('SISCOO API')
    .setDescription(
      'Esta API esta contiene EndPoints para la gestion de la cadena de suministros de una Asociacion productora de ñiame',
    )
    .setVersion('0.1')
    .build();

  app.setGlobalPrefix('api/v1');

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api/v1/documentation', app, document, {
    explorer: true,
    swaggerOptions: { filter: true, showRequestDuration: true },
  });

  const configService: ConfigService = app.get(ConfigService);

  const port = configService.get<number>('port');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      disableErrorMessages: false,
    }),
  );

  await app.listen(port);

  Logger.log(`Listen in port ${port} in ${process.env.NODE_ENV}`);
}
bootstrap();
