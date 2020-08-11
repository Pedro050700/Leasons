import { Schema, model, VirtualType } from 'mongoose';
import { boolean } from 'yup';

const useSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      maxlength: 50,
    },
    senha: {
      type: String,
      required: true,
      maxlength: 10,
    },
    cargo: {
      type: String,
      required: true,
    },
    admin: {
      type: Boolean,
      required: true,
      default: false,
    },
    avatar_id: {
      type: Schema.Types.ObjectId,
      ref: 'Avatar',
    },
  },
  {
    timestamps: true,
  }
);

export default model('user', useSchema);
