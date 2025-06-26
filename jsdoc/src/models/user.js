const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**on import le module bcrypt qui permet de hacher des expressions */
const bcrypt = require('bcrypt');

const User = new Schema ({
    name : {
        type : String,
        trim : true,
        required : [true , 'le nom est requis']
    },
    firstanme :{
        type : String,
        trim : true
    },
    email :{
        type : String ,
        trim : true ,
        required : [ true , 'Lemail est requis'],
        unique : true , //index unique
        lowercase : true 
    },
    password:{
        type : String,
        trim : true
    }
},{
    //ajoute deux temps au document createdAt
    timestanp : true
});
//hash le mot de passe
User.pre('save', function(next){
    if(!this.isModified('password')){
        return next()
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
})
module.exports = mongoose.model('User', User);