import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GuestService } from './guest.service';
import { GUEST_MODEL, GuestSchema } from './schemas/guest.schema';
import { GuestRepository } from './guest.repository';
import { GuestController } from './guest.controller';
import { PermissionsModule } from '../permissions/permissions.module';
import { UserModule } from '../user/user.module';

@Module({
  providers: [GuestService, GuestRepository],
  controllers: [GuestController],
  imports: [
    MongooseModule.forFeature([
      { name: GUEST_MODEL, schema: GuestSchema },
    ]),
    PermissionsModule,
    forwardRef(() => UserModule),
  ],
  exports: [GuestService],
})
export class GuestModule {}
