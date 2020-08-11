"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

const userSchema = Yup.object().shape({
  usuario: Yup.string()
    .required()
    .max(50),
  senha: Yup.string()
    .required()
    .max(10),
  email: Yup.string()
    .email()
    .required(50),
});

class UserControler {
  async store(req, res) {
    try {
      if (!(await userSchema.isValid(req.body))) {
        return res
          .status(401)
          .json({ error: 'Erro ao validar as informações' });
      }

      const userExists = await _User2.default.findOne({ email: req.body.email })
        .lean()
        .exec();

      if (userExists) {
        return res
          .status(400)
          .json({ error: 'Esse e-mail já está cadastrado' });
      }

      const user = await _User2.default.create(req.body);

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async list(req, res) {
    try {
      const users = await _User2.default.find({})
        .limit(10)
        .lean()
        .exec();

      return res.json(users);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async index(req, res) {
    try {
      const user = await _User2.default.findById(req.params.id);

      if (!user) {
        return res.json(400).json({ error: 'Usuário não encontrado' });
      }

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const userExists = await _User2.default.findById(req.params.id);

      if (!userExists) {
        return res.json(400).json({ error: 'Usuário não encontrado' });
      }

      const user = await userExists
        .update(req.body)
        .lean()
        .exec();

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const userExists = await _User2.default.findById(req.params.id);

      if (!userExists) {
        return res.json(400).json({ error: 'Usuário não encontrado' });
      }

      await _User2.default.deleteMany({ _id: req.params.id });

      return res.json('Usuário deletado com sucesso');
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

exports. default = new UserControler();
