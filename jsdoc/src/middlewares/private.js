const jwt = require ('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY ;


exports.checkJWT = async (req,res,next)=>{
    let token = req.headers['x-acces-token'] || req.headers['authorization'];
    if(!!token && token.startsWith ( 'Bearer')){
       token  = token.Slice (7, token.length );
    }
    if(token){
       jwt.verify( token , SECRET_KEY ,(err ,decoded)=>{
        if (err){
            return res.status(401).json('token_not_valid')
        }else{
            req.decoded = decoded ;
             const expiresIN = 24 * 60 * 60 ;
             const newtoken = jwt.sign({
                user : decoded.user
             },
             SECRET_KEY ,
             {
               expiresIn : expiresIn 
             }
            );
            res.headers ( 'authorization', 'Beares' + newToken);
            next();
        }
       });
    }
    else{
       return res.status(401).json('token_required')
    }
}