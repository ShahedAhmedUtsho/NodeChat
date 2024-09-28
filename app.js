// root import 

const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const path = require('path')
const port = process.env.PORT || 3000
const cookieParser = require('cookie-parser')


// internal import 

const {
    notFoundMiddleWare, errorHandler
} = require('./middlewares/common/errorhandler')


const loginRouter = require('./router/loginRouter');
// const userRouter = require('./router/loginRouter');
const inboxRouter = require('./router/inboxRouter')





// create app 

const app = express();
app.use(express.json());
// app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', "ejs")


app.use(express.urlencoded({ extended: true }))
app.use(cookieParser(process.env.COOKIE_SECRET))


// mongodb connect 
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.swwr6sg.mongodb.net/${process.env.DB_USER}?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(mongoURI)
    .then(res => {
        console.log('mongodb connected successfully')

    })
    .catch(err => {
        console.log(err)
    })

//middleware


// routeing 
app.get("/", loginRouter)
// app.get("/users", userRouter)
app.get("/inbox", inboxRouter)


app.use(notFoundMiddleWare);
app.use(errorHandler)
// error handle 

app.listen(port, () => {
    console.log(`server is running`)
})
