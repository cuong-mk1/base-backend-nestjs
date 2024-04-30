/* istanbul ignore file */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GuestRepositoryInterface } from './interface/guest.repository.interface';
import { BaseAbstractRepository } from '../../base/base.abstract.repository';
import { GUEST_MODEL } from './schemas/guest.schema';
import { GuestDocument } from './interface/guest.schema.interface';

@Injectable()
export class GuestRepository
  extends BaseAbstractRepository<GuestDocument>
  implements GuestRepositoryInterface
{
  constructor(
    @InjectModel(GUEST_MODEL)
    private readonly guestModel: Model<GuestDocument>,
  ) {
    super(guestModel);
  }
}
