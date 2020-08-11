"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

require('dotenv/config');

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.connection = _mongoose2.default
      .connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      })
      .then(() => console.log(' ===> MONGODB conectado com sucesso <===  :)'))
      .catch(() =>
        console.log('===> ERRO ao conectar ao banco de dados <=== :( ')
      );
  }
}

exports. default = new Database();
