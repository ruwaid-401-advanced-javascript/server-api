'use strict';

/**
 * Schema for cart
 * @module cartSchema 
 */

/**
 * @property  {string} UserName -required
 * @property {string} description -required
 */
const mongoose = require('mongoose');

const cart = mongoose.Schema({
  userName: { type: String, required: false },
  userID: { type: String, required: false },
  cart: { type: Array, required: false },
});

module.exports = mongoose.model('cart', cart);
