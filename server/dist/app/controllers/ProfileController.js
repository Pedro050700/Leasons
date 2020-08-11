"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class Profile {
  async index(req, res) {
    try {
      const user = await _User2.default.findOne({ email: req.query.email })
        .lean()
        .exec();

      if (user) {
        return res.json({ exists: true });
      }

      return res.json({ exists: false });
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

exports. default = new Profile();
