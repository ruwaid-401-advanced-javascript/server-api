'use strict';
require('@code-fellows/supergoose');
const users = require('../../src/auth/users');
// let res = {};
// let next = jest.fn(); //function;
// const jwt = require('jsonwebtoken');
process.env.SECRET = 'kkk';
process.env.EXPIRE = '1m';
describe('user model ', () => {

  it('should make a new instance ', () => {
    let testUser = { 'username': 'test', 'password': '5' };
    let user = new users(testUser);
    expect(user instanceof users).toBeTruthy();
  });

  it('should athenticate permission', () => {
    let testUser = { 'id': '1235488', 'username': 'test', 'password': '5', 'capabilities': 'user' };
    let result = users.athenticateRole(testUser, 'read');
    expect(result).toBeTruthy();
  });

  it('should generate token', () => {
    let testUser = { 'username': 'test', 'password': '5' };
    let user = new users(testUser);
    let result = users.generateToken(user);
    expect(result).toBeTruthy();
  });

  it('should verify token', () => {
    let testUser = { 'username': 'test', 'password': '5' };
    let user = new users(testUser);
    let result = users.generateToken(user);
    let verified = users.verifyToken(result);
    expect(verified).toBeTruthy();
  });

  it('should verify token with error', () => {
    let verified = users.verifyToken('oijlkmlkmlkjnkjxtrxd6651844515').then(() => { null; }).catch(() => {
      expect(verified).toBeTruthy();
    });
  });

  it('should verify token', () => {
    let testUser = { 'username': 'test', 'password': '5' };
    let user = new users(testUser);
    let result = users.generateToken(user);
    let verified = users.verifyToken('5487'+result).catch(()=>{
      expect(verified).toBeTruthy();
    });
  });

  it('should find users', () => {
    let data = users.findAll();
    expect(data).toBeTruthy();
  });

  it('should find the users', () => {
    let testUser = { 'username': 'test', 'password': '5' };
    let user = new users(testUser);
    let data = users.findOneByUser(user.username);
    expect(data).toBeTruthy();
  });
});

