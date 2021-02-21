import { IsNotEmpty, IsString } from 'class-validator';

export class NiameDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}
