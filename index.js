const express = require('express');
const bodyParser = require('body-parser');
const homeRouter = require('./router/homeRouter');
const userRouter = require('./router/userRouter');
const googleRouter = require('./router/googleRouter');
require('./db/mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/', homeRouter);
app.use('/',userRouter);
app.use('/', googleRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is up to '+ port);
})