import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IConfigDatabase } from '../config/configurations';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      const databaseConfig = config.get<IConfigDatabase>('database');
      console.log({ ...databaseConfig, password: null });

      return {
        type: 'mysql' as const,
        host: databaseConfig.host,
        database: databaseConfig.name,
        username: databaseConfig.username,
        password: databaseConfig.password,
        entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        logging: true,
      };
    },
  }),
];
