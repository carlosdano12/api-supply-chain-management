import { IsNotEmpty, IsNumber, IsNumberString, IsString } from 'class-validator';

export class NiameDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  @IsNumber()
  cantidad: number;

  @IsNotEmpty()
  @IsNumber()
  precio: number;
}
