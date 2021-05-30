import { IsNumberString, IsString } from 'class-validator';

export class RecibirNiame {
  @IsString()
  id: string;

  @IsString()
  niameIdNiame: string;

  @IsNumberString()
  recibido: number;
}
