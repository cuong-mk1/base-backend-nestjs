import * as mongoose from 'mongoose';
import { mongooseAggregatePaginate, paginate } from '../../../common/helpers';

const GUEST_MODEL = 'guest';

const GuestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

GuestSchema.plugin(paginate);
GuestSchema.plugin(mongooseAggregatePaginate);

export { GuestSchema, GUEST_MODEL };
