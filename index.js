const path = require('path');
const express = require('express');
const {engine} = require('express-handlebars');
const restaurantsRouter = require('./routes/restaurants');
const indexRouter = require('./routes');
const logger = require('./middleware/logger');

const app = express();

app.engine('hbs',engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended:false}));

app.use(logger);

app.use('/apis/restaurants', restaurantsRouter);

app.use('/', indexRouter);

app.listen(3000,()=>{
    console.log('listening on port 3000');
});