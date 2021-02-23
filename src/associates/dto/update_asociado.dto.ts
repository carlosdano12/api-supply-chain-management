import { Rol } from '../entities/associate_roles.entity';

export class UpdateAsociadoDto {
  nombre: string;

  apellido: string;

  id_documento: number;

  documento: string;

  telefono: string;

  roles: Rol[];
}
