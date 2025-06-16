const axios = require('axios');
const { expect } = require('chai');
const sinon = require('sinon');

describe('User API Tests', () => {
  let sandbox;
  let axiosPostStub;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    axiosPostStub = sandbox.stub(axios, 'post');
  });

  afterEach(() => {
    sandbox.restore();
  });

});
