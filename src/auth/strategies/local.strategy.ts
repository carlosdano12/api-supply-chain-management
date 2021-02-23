import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Asociado } from 'src/associates/entities/associates.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(documento: string, contrasena: string): Promise<Asociado> {
    const user = await this.authService.validateUser(documento, contrasena);

    if (!user) {
      throw new BadRequestException({ message: 'Email y/o contraseña no validos' });
    }

    return user;
  }
}
