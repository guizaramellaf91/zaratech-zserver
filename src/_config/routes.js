const express = require('express');
const router = express.Router();
const usuarioController = require('../features/usuario/controller');
const clienteController = require('../features/cliente/controller');

router.post('/usuario/auth/:id', usuarioController.auth);
router.post('/usuario', usuarioController.create);
router.get('/usuarios', usuarioController.all);
router.get('/usuario/:id', usuarioController.details);
router.put('/usuario/:id', usuarioController.update);
router.delete('/usuario/:id', usuarioController.delete);

router.post('/cliente/auth/:id', clienteController.auth);
router.post('/cliente', clienteController.create);
router.get('/clientes', clienteController.all);
router.get('/cliente/:id', clienteController.details);
router.put('/cliente/:id', clienteController.update);
router.delete('/cliente/:id', clienteController.delete);

module.exports = router;