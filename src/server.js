'use strict';
const express = require('express');

const morgan = require('morgan');

// const router = require('./auth/router');
// const apiRouts = require('./routes/api-v1');

const error404 = require('./middleware/404');
const error500 = require('./middleware/500');

const app = express();
app.use(express.json());
app.use('/docs', express.static('./docs'));
app.use('/login', express.static('./public'));
app.use(morgan('dev'));
app.get('/', (req, res) => res.status(200).send('hiii  go to --->> /login  route to try github OAuth'));


app.get('/error500',fakeError);

// app.use('/api/v1',apiRouts);
// app.use(router);

function fakeError(req,res,next){
  next('wooow there is an error');
}
app.use(error404);
app.use(error500);


module.exports = {
  server: app,
  start:  (portNumber) => app.listen(portNumber, () => console.log(`Listnening to PORT ${portNumber}`)),
};
