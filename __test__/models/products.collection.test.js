'use strict';

require('@code-fellows/supergoose');

const Model = require('../../src/lib/models/products/products.collection');

describe('server.js', () => {

  it('can get() all products', () => {
    let testObj = { name: 'test 1', category: 'test cat', description: 'test test 1 ', price: 2, inStock: 4 };
    return Model.creat(testObj)
      .then(() => {
        return Model.read()
          .then(data => {
            Object.keys(testObj).forEach(key => {
              expect(data[0][key]).toEqual(testObj[key]);
            });
          });
      });
  });

  it('can get() a products', () => {
    let testObj = { name: 'test 2', category: 'test cat', description: 'test test 2 ', price: 2, inStock: 4 };
    return Model.creat(testObj)
      .then(postedData => {
        return Model.read(postedData._id)
          .then(data => {
            Object.keys(testObj).forEach(key => {
              expect(data[0][key]).toEqual(testObj[key]);
            });
          });
      });
  });

  it('can post() a products', () => {
    let testObj = { name: 'test 3', category: 'test cat', description: 'test test 3 ', price: 2, inStock: 4 };
    return Model.creat(testObj)
      .then(data => {
        Object.keys(testObj).forEach(key => {
          expect(data[key]).toEqual(testObj[key]);
        });
      });
  });

  it('can put() a products', () => {
    let testObj = { name: 'test 4', category: 'test cat', description: 'test test 4 ', price: 2, inStock: 4 };
    let updateTestObj = { name: 'test 4 updated', category: 'test cat', description: 'test test 4 updated', price: 2, inStock: 4 };
    return Model.creat(testObj)
      .then(postedData => {
        return Model.update(postedData._id, updateTestObj)
          .then(data => {
            Object.keys(testObj).forEach(key => {
              expect(data[key]).toEqual(updateTestObj[key]);
            });
          });
      });
  });

  it('can delete() a products', () => {
    let testObj = { name: 'test 5', category: 'test cat 5 ', description: 'test test 5 ', price: 3, inStock: 8 };
    return Model.creat(testObj)
      .then(postedData => {
        return Model.delete(postedData._id)
          .then(() => {
            return Model.read()
              .then(data => {
                data.forEach(element => {
                  Object.keys(testObj).forEach(key => {
                    expect(element[key]).not.toEqual(testObj[key]);
                  });
                });
              });
          });
      });
  });
});
