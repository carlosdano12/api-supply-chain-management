import { IsOptional } from 'class-validator';

export class UpdateInsumoDto {
  @IsOptional()
  name: string;

  @IsOptional()
  disableAt: Date;
}
