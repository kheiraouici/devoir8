
const express = require ('express');
const cookieSession = require ('cookie-session');
const path = require  ('path');
const cookieParser =require ('cookie-parser');
const logger = require ('morgan');
const indexRouter = require ('.routes/index');
const usersRouter = require ('./routes/users');
const cors = require ('cors');
const mongodb = require ('./db/mongo');

mongodb.initClientDbConnection();


const app = express()
app.use(cors({
    exposedHeaders :['authorization'],
    origin : '*'
}))

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname,'upload')));



app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(cookieSession ( {
    name : 'session',
    keys :[/**secret key */],
    maxAge : 24 * 60 * 60 * 1000
}));
app.use(session ({
    secret : 'mysecret',
    resave : false,
    saveUninitialized : true ,
    cookie : {secure : true}
}));

app.set('views', path.join(__dirname , 'views'))
app.set('view engine','ejs');

let date = newDate(date.now()+ 86400000 );
date = date.toUTCSString();
document.cookie= 'user=jim; path=/, domaine=jim.com ; samesite=" strict" secure,expire=' + date ;
document.cookie = 'user =; path=/ ; expire = Thu , 1 janvier 1970 00:00:00 UTC';