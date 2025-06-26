var express = require('express');
var router = express.Router();
const userRoute = require('./users');

router.get('/', async (req,res) =>{
 /** res.status(200).json({name : process.env.APP_NAME,
    version:'1.0',
    status :200,
    message: 'bienvenue dans api'
  })**/
    res.sender('index',{title :' accueil'})
});

/* GET home page. */

router.use('/users', userRoute);
module.exports = router;