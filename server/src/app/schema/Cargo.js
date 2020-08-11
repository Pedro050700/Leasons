import { Schema, model } from 'mongoose';

const cargoSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      enum: [
        'Advogado',
        'Desenvolvedor',
        'Estagiário',
        'Secretária',
        'Analista Tributário',
        'Diretor',
      ],
    },
  },
  {
    timestamps: true,
  }
);

export default model('cargo', cargoSchema);
