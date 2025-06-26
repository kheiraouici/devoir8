var express = require('express');
var router = express.Router();
const service = require("../services/users")
const private = require('../middlewares/private');
/**route pour lire */
router.get('/:id', private.checkJWT,service.getById);
/**route ajout uitlisateur */
router.put('/add',service.add);
/**ROUTE MODFIFIE UTILISATEUR */
router.patch('/update',private.checkJWT , service.update);
/***route pour supprimer */
router.delete('/delete', private.checkJWT, service.delete)
/* GET users listing. */

/***ajout de la route authenticate */
router.post ('/authenticate', service.authenticate);

module.exports = router;