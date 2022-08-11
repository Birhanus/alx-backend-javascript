const assert = require('chai').assert;
const calculateNumber = require('./0-calcul.js');

describe('0-calcul', function () {
  it('type of result should be integer', function () {
    const result = calculateNumber(1, 3);
    assert.typeOf(result, 'number');
  });
});
