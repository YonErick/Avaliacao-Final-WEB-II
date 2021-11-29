const express = require('express');
const router = express.Router();
const apartamentoControllers = require('../controllers/apartamentoControllers.js');

router.get('/apartamento', apartamentoControllers.index);

router.post('/apartamento', apartamentoControllers.store);

router.put('/apartamento/:codigo', apartamentoControllers.update);

router.delete('/apartamento/:codigo', apartamentoControllers.delete);

module.exports = router;