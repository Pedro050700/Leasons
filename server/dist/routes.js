"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _ProfileController = require('./app/controllers/ProfileController'); var _ProfileController2 = _interopRequireDefault(_ProfileController);
var _AuthController = require('./app/controllers/AuthController'); var _AuthController2 = _interopRequireDefault(_AuthController);
var _FileController = require('./app/controllers/FileController'); var _FileController2 = _interopRequireDefault(_FileController);

var _multer3 = require('../src/config/multer'); var _multer4 = _interopRequireDefault(_multer3);
const upload = _multer2.default.call(void 0, _multer4.default);

const routes = new (0, _express.Router)();

routes.get('/', (req, res) => res.json({ message: 'CRUD D.S & ADV' }));

routes.get('/usuario/:id', _UserController2.default.index);
routes.get('/usuario', _UserController2.default.list);
routes.post('/usuario', _UserController2.default.store);
routes.put('/usuario/:id', _UserController2.default.update);
routes.delete('/usuario/:id', _UserController2.default.delete);

routes.post('/uploads/', upload.single('file'), _FileController2.default.store);

routes.get('/profile', _ProfileController2.default.index);

routes.post('/auth', _AuthController2.default.store);

exports. default = routes;
