var express = require('express');
var router = express.Router();

const service = require('../services/data');

const private = require('../middlewares/private');

router.get('/artisan', private.checkJWT, service.getAll);

router.get('/artisan/:id_nom', private.checkJWT, service.getById);

router.post('/artisan/:id/nom', private.checkJWT, service.add);

router.patch('/artisan:id/nom/:id_nom', private.checkJWT, service.update);

router.delete('/artisan/:id/nom/:id_nom', private.checkJWT, service.delete);



module.exports = router;