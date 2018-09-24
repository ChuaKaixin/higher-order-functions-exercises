var core = require("./core");

describe("Filter", function() {
  describe("#onlyEven()", function() {
    it("returns only those numbers that are even", function() {
      var input = [10, 15, 20, 25, 30, 35];
      var expected = [10, 20, 30];
      var actual = core.onlyEven(input);

      expect(actual).toEqual(expected);
    });
  });

  describe("#onlySingleWord()", function() {
    it("returns only those strings with a single word (no spaces)", function() {
      var input = ["return", "phrases", "with one word"];
      var expected = ["return", "phrases"];
      var actual = core.onlySingleWord(input);

      expect(actual).toEqual(expected);
    });
  });

  describe("#positiveRowsOnly()", function() {
    it("return only the rows in the matrix that have all positive integers", function() {
      var input = [[1, 10, -100], [2, -20, 200], [3, 30, 300]];
      var expected = [[3, 30, 300]];
      var actual = core.positiveRowsOnly(input);

      expect(actual).toEqual(expected);
    });
  });

  describe("#truthyValuesOnly()", function() {
    it("return only values which are truthy (i.e. not  false, 0, '', null or undefined", function() {
      var input = ["racecar", "", false, null, 1, 0, undefined];
      var expected = ["racecar", 1];
      var actual = core.truthyValuesOnly(input);

      expect(actual).toEqual(expected);
    });
  });
});
