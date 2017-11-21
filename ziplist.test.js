/* eslint-env mocha, chai */
/* global zipList, zipListTheSimpleWay, chai */

describe('ziplist', function () {
  const letters = ['a', 'b', 'c'];
  const numbers = [1, 2, 3];
  describe('zipList()', function () {
    it('should return [\'a\', 1, \'b\', 2, \'c\', 3] for zipList', function () {
      chai.expect(zipList(letters, numbers)).to.deep.equal(['a', 1, 'b', 2, 'c', 3]);
    });
  });
  describe('zipListTheSimpleWay()', function () {
    it('should return [\'a\', 1, \'b\', 2, \'c\', 3] for zipListTheSimpleWay', function () {
      chai.expect(zipListTheSimpleWay(letters, numbers)).to.deep.equal(['a', 1, 'b', 2, 'c', 3]);
    });
  });
});
