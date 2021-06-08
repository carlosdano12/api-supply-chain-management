import { IsOptional } from 'class-validator';

export class UpdateInsumoDto {
  @IsOptional()
  nombre: string;
}
