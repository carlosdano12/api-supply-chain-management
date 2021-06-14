import { IsString } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsString()
  documento: string;

  @IsString()
  telefono: string;
}
