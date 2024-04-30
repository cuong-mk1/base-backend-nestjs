import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PermissionActions } from '../../common/common.constants';
import { Permission } from '../../common/permissions.decorator';
import { AuthenticationGuard } from '../auth/guards/auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { GuestService } from './guest.service';
import { GuestDto } from './dto/guest.dto';
import { CreateGuestDto } from './dto/create-guest.dto';

@ApiTags('Guest')
@Controller('guest')
export class GuestController {
  constructor(private readonly guestService: GuestService) {}

  @Get('/list')
  @ApiOkResponse({
    type: GuestDto,
  })
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @UseGuards(AuthenticationGuard, RolesGuard)
  @Permission({
    action: PermissionActions.VIEW_USER_LIST,
    description: PermissionActions.VIEW_USER_LIST,
  })
  getListGuest() {
    return this.guestService.getListGuest();
  }
  @Post('/create-guest')
  @ApiOkResponse({
    type: GuestDto,
  })
  @HttpCode(HttpStatus.OK)
  createGuest(@Body() createGuestDto: CreateGuestDto,) {
    return this.guestService.createGuest(createGuestDto);
  }
}
