import { Router } from 'express';

import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import CargoController from './app/controllers/CargoController';
import AvatarController from './app/controllers/AvatarController';

import authMiddleware from './app/middleware/auth';

import multerConfig from './app/middleware/config/multer';
const upload = multer(multerConfig);

const routes = new Router();

routes.get('/status', (req, res) => {
  return res.json('Serviço rodando na porta 3333');
});

routes.post('/usuarios', UserController.store);
routes.put('/usuarios', UserController.update);

routes.post('/sessions', SessionController.store);

routes.get('/cargos', CargoController.list);
routes.post('/avatar', upload.single('file'), AvatarController.store);

routes.use(authMiddleware);

routes.post('/cargos', CargoController.store);
routes.get('/usuarios', UserController.index);
routes.get('/usuarios', UserController.list);
routes.delete('/usuarios', UserController.delete);

routes.post('/uploads/', upload.single('file'), FileController.store);

routes.delete('/usuarios/:id', UserController.delete);

export default routes;
