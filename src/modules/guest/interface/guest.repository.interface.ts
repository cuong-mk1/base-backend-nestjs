import { BaseInterfaceRepository } from '../../../base/base.interface.repository';
import { GuestDocument } from './guest.schema.interface';
export interface GuestRepositoryInterface
  extends BaseInterfaceRepository<GuestDocument> {}
