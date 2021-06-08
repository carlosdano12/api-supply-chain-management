import { IsNotEmpty } from 'class-validator';

export class CreateInsumoDto {
  @IsNotEmpty({ message: 'error' })
  nombre: string;
}
