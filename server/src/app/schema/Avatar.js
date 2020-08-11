import 'dotenv/config';

import { Schema, model, VirtualType } from 'mongoose';
import { resolve, join } from 'path';

const avatarSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    avatar_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

avatarSchema.virtual('path').get(() => {
  const basePath = `${process.env.URL}:${process.env.PORT}/files/`;
  return join(basePath, this.name);
});

export default model('avatar', avatarSchema);
