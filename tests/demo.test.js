var assert = require('assert');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
      assert.equal([1, 2, 3].indexOf(10), -1);
      assert.equal([1, 2, 3].indexOf('a'), -1);
      assert.equal([1, 2, 3].indexOf(5), -1);
    });
  });
});
