import Avatar from '../schema/Avatar';

class AvatarController {
  async store(req, res) {
    try {
      const { path, filename } = req.file;

      const { _doc } = await Avatar.create({
        name: filename,
      });

      return res.json(_doc);
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  }
}

export default new AvatarController();
