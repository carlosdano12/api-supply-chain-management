import { IsString } from 'class-validator';

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
