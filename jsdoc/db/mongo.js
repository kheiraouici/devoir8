const mongoose = require ('mongoose');
const clientOption ={
    useNewUrlParser : true,
    dbName : 'apinode'
} ;
exports.initClientDbConnection = async ()=>{
    try {
        await mongoose.connect(process.env.Url_MONGO,clientOptions)
        console.log('connected');
    } catch (error) {
        console.log(error);
        throw error;
    }
}