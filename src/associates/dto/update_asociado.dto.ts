import { IsArray, IsString } from 'class-validator';
import { Rol } from '../entities/associate_roles.entity';
export class UpdateAsociadoDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsString()
  documento: string;

  @IsString()
  contrasena: string;

  @IsString()
  telefono: string;
}

export class UpdateRolesDto {
  @IsArray()
  roles: Rol[];
}
