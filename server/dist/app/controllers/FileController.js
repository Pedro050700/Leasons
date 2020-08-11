"use strict";Object.defineProperty(exports, "__esModule", {value: true});class FileController {
  async store(req, res) {
    try {
      const { path, originalname, mimetype, filename } = req.file;

      return res.json({
        path,
        originalname,
        mimetype,
        filename,
      });
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  }
}

exports. default = new FileController();
