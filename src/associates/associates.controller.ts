import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AssociatesRequestService } from './associate_request.service';

@ApiTags('Asociados')
@ApiBearerAuth()
@Controller('associates')
export class AssociatesController {
  constructor(private readonly _associateRequestService: AssociatesRequestService) {}

  @Get('request/:id')
  @UseGuards(JwtAuthGuard)
  async getOne(@Param('id') id: string) {
    return await this._associateRequestService.getOne(id);
  }
  @Get('request')
  @UseGuards(JwtAuthGuard)
  async getMany() {
    return await this._associateRequestService.getMany();
  }
}
