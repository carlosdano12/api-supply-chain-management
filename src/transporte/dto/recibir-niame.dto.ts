import { IsNumberString, IsString } from 'class-validator';

export class RecibirNiame {
  @IsString()
  idDetalle: string;

  @IsString()
  idNiame: string;

  @IsNumberString()
  cantidad: number;
}
