import { Rol } from '../entities/associate_roles.entity';

export class CreateAsociadoDto {
  nombre: string;

  apellido: string;

  id_documento: number;

  documento: string;

  contrasena: string;

  telefono: string;

  roles: Rol[];
}
