import * as Yup from 'yup';
import User from '../schema/User';

const userSchema = Yup.object().shape({
  nome: Yup.string()
    .required()
    .max(50),
  email: Yup.string()
    .email()
    .required(),
  cargo: Yup.string().required(),
  senha: Yup.string()
    .required()
    .min(6)
    .max(10),
  confirmarSenha: Yup.string()
    .required()
    .min(6)
    .max(10),
});

class UserControler {
  async store(req, res) {
    try {
      if (!(await userSchema.isValid(req.body))) {
        return res
          .status(401)
          .json({ error: 'Erro ao validar as informações' });
      }

      const userExists = await User.findOne({ email: req.body.email })
        .lean()
        .exec();

      if (userExists) {
        return res
          .status(400)
          .json({ error: 'Esse e-mail já está cadastrado' });
      }

      const user = await User.create(req.body);

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async list(req, res) {
    try {
      const users = await User.find({})
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
      const user = await User.findById(req.params.id);

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
      const { userId } = req;

      const userExists = await User.findById(userId)
        .lean()
        .exec();

      if (!userExists) {
        return res.json(400).json({ error: 'Usuário não encontrado' });
      }

      if (req.body.senhaAntiga && req.body.senhaNova) {
        if (req.body.senhaNova !== req.body.confirmarSenha) {
          return res.json(401).json({ error: 'As senhas não combinam' });
        }

        await userExists.update(req.body);

        return res.json('Senha atualizada com sucesso');
      }

      await User.updateOne({ _id: userId }, req.body)
        .lean()
        .exec();

      const { _id, nome, email, admin, cargo, avatar_id } = await User.findById(
        req.userId
      )
        .lean()
        .exec();

      return res.json({
        user: {
          _id,
          nome,
          email,
          admin,
          cargo,
          avatar_id,
        },
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const { userId } = req;

      const userExists = await User.findById(userId);

      if (!userExists) {
        return res.json(400).json({ error: 'Usuário não encontrado' });
      }

      await User.deleteMany({ _id: userId });

      return res.json('Usuário deletado com sucesso');
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export default new UserControler();
