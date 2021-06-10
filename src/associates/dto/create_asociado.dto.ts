import { IsString } from 'class-validator';

export class CreateAsociadoDto {
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
