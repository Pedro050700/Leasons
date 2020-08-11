"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

const authSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  senha: Yup.string().required(),
});

class AuthController {
  async store(req, res) {
    try {
      if (!(await authSchema.isValid(req.body))) {
        return res.status(401).json('Dados inválidos');
      }

      const user = await _User2.default.findOne({ email: req.body.email })
        .lean()
        .exec();

      if (!user) {
        return res.status(400).json('Usuário não cadastrado');
      }

      if (user.senha !== req.body.senha) {
        return res.status(400).json('Dados inválidos');
      }

      return res.json(user);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

exports. default = new AuthController();
