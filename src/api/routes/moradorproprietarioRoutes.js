const express = require('express');
const router = express.Router();
const moradorproprietarioControllers = require('../controllers/moradorproprietarioControllers.js');

router.get('/moradorproprietario', moradorproprietarioControllers.index);

router.post('/moradorproprietario', moradorproprietarioControllers.store);

router.put('/moradorproprietario/:codigo', moradorproprietarioControllers.update);

router.delete('/moradorproprietario/:codigo', moradorproprietarioControllers.delete);

module.exports = router;