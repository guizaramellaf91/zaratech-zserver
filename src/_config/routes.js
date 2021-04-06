const express = require('express');
const router = express.Router();
const usuarioController = require('../features/usuario/controller');


router.post('/usuario/auth/:id', usuarioController.auth);
router.post('/usuario', usuarioController.create);
router.get('/usuarios', usuarioController.all);
router.get('/usuario/:id', usuarioController.details);
router.put('/usuario/:id', usuarioController.update);
router.delete('/usuario/:id', usuarioController.delete);

module.exports = router;