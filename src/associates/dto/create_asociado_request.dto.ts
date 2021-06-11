import { IsString } from 'class-validator';

export class CreateAsociadoRequestDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsString()
  documento: string;

  @IsString()
  descripcion: string;

  @IsString()
  telefono: string;
}
