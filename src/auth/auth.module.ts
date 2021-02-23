import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import constants from './auth.constants';
import { JwtStrategy, LocalStrategy } from './strategies';
import { AssociatesModule } from 'src/associates/associates.module';

@Module({
  imports: [
    JwtModule.register({
      secret: constants.jwtSecret,
      signOptions: { expiresIn: '40h' },
    }),
    AssociatesModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
