import { IsNotEmpty } from 'class-validator';

export class CreateInsumoDto {
  @IsNotEmpty({ message: 'error' })
  name: string;

  disableAt: Date;
}
