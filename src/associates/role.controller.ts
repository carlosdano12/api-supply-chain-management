import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleService } from './role.service';

@ApiTags('Roles')
@ApiBearerAuth()
@Controller('roles')
export class RolesController {
  constructor(private readonly _roleService: RoleService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getMany() {
    return await this._roleService.getMany();
  }
}
