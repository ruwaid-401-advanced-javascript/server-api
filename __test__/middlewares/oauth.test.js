'use strict';

const oauth = require('../../src/auth/middleware/oauth');
let res = {};
let req = { query: { code: '4587662596258' } };
let next = jest.fn(); //function;

describe('oAuth  ', () => {

  it('should respond with error', async () => {
    await oauth(req, res, next);
    expect(next).toHaveBeenCalledWith('erroOoOoOoOr');
  });
});

