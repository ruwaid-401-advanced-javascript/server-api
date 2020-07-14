'use strict';


/**
 * Schema for products
 * @module productsSchema 
 */
/**
 * @property {string} name -required
 * @property {string} category -required
 * @property {string} description -required
 * @property {Number} price -required
 * @property {Number} inStock -required
 */
const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Number, required: true },
  img: { type: String, required: false },
});

module.exports = mongoose.model('products', products);
