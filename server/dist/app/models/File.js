"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const fileSchema = new (0, _mongoose.Schema)(
  {},
  {
    timestamps: true,
  }
);

exports. default = _mongoose.model.call(void 0, 'file', fileSchema);
