var express = require('express');
var router = express.Router();

const userRoute = require('../routes/users');
const dataRoute = require('../routes/data');



router.use('/users', userRoute);
router.use('/data', dataRoute);



module.exports = router;