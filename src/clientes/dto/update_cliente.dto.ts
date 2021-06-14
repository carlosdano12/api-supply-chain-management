import { IsString } from 'class-validator';

export class UpdateClienteDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsString()
  documento: string;

  @IsString()
  telefono: string;
}
