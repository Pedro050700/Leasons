"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');


const useSchema = new (0, _mongoose.Schema)(
  {
    usuario: {
      type: String, 
      required: true,
      maxlength: 50, 
    },
    senha: {
      type: String,
      required: true,
      maxlength: 10,
    },
    email: {
      type: String,
      required: true,
      maxlength: 50,
    },
  },
  {
    timestamps: true, 
  }
);

exports. default = _mongoose.model.call(void 0, 'user', useSchema);
