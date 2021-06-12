import { IsString } from 'class-validator';

export class UpdateAsociadoRequestDto {
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
