'use strict';
const express = require('express');
const app = express();
app.use(express.json());
// 3rd party lib
require('dotenv').config();

// internal modules

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.status(200).send('hiii  go to --->> /login  route to try github OAuth'));


app.listen(PORT, () =>console.log(`Listnening to PORT ${PORT}`));

