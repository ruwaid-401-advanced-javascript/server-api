'use strict';

const Model = require('../mongo');
const schema = require('./cart.schema');

class cart extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = new cart();