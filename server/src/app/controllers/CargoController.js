import Cargo from '../../app/schema/Cargo';

class CargoController {
  async store(req, res) {
    try {
      const { name } = await Cargo.create(req.body);

      return res.json(name);
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  }

  async list(req, res) {
    try {
      const cargos = await Cargo.find()
        .select('name')
        .lean()
        .exec();

      return res.json(cargos);
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  }
}

export default new CargoController();
