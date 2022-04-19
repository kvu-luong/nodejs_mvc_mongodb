const express = require('express');
const bodyParser = require('body-parser');
const homeRouter = require('./router/homeRouter');
const userRouter = require('./router/userRouter');
const googleRouter = require('./router/googleRouter');
const facebookRouter = require('./router/facebookRouter');
const passport = require('./services/facebookLogin');
const session = require('express-session');

require('./db/mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(session({
    secret: 'thisissecretkey'
}))
app.use(passport.initialize());
app.use(passport.session());

app.use('/', homeRouter);
app.use('/',userRouter);
app.use('/', googleRouter);
app.use('/', facebookRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is up to '+ port);
})