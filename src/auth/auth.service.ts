import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AssociatesService } from 'src/associates/associates.service';
import { Asociado } from 'src/associates/entities/associates.entity';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService, private readonly associateService: AssociatesService) {}

  async validateUser(documento: string, contrasena: string): Promise<Asociado> {
    try {
      const user = await this.associateService.validateLogin(documento, contrasena);

      if (user?.documento) {
        return user;
      }

      return null;
    } catch (e) {
      Logger.log(e);
      throw e;
    }
  }

  async login(user: Asociado) {
    const payload = {
      roles: user.roles,
      sub: user.id_asociado,
      nombre: user.nombre,
      apellido: user.apellido,
    };

    return {
      nombre: user.nombre,
      apellido: user.apellido,
      roles: user.roles,
      accessToken: this.jwtService.sign(payload),
    };
  }

  validateToken(jwt: string) {
    return this.jwtService.verify(jwt);
  }
}
