var core = require("./core");

describe("Map", function() {
  describe("#multiplyBy10()", function() {
    it("multiplies all elements in an array by 10", function() {
      var input = [45, 1, -10, 11, 250];
      var expected = [450, 10, -100, 110, 2500];
      var actual = core.multiplyBy10(input);

      expect(actual).toEqual(expected);
    });
  });

  describe("#onlyVowels()", function() {
    it("removes any non-vowel character from words in an array", function() {
      var input = ["average", "exceptional", "amazing"];
      var expected = ["aeae", "eeioa", "aai"];
      var actual = core.onlyVowels(input);

      expect(actual).toEqual(expected);
    });
  });

  describe("#multiplyBy2()", function() {
    it("multiplyBy2([1,2,3]) should return [2,4,6]", function() {
      expect(core.multiplyBy2([1, 2, 3])).toEqual([2, 4, 6]);
    });

    it("multiplyBy2([10,20,30]) should return [20,40,60]", function() {
      expect(core.multiplyBy2([10, 20, 30])).toEqual([20, 40, 60]);
    });
  });

  describe("#doubleMatrix()", function() {
    it("doubles the numbers in the matrix, maintaining the same structure", function() {
      var input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
      var expected = [[2, 4, 6], [8, 10, 12], [14, 16, 18]];
      var actual = core.doubleMatrix(input);

      expect(actual).toEqual(expected);
    });
  });

  describe("#onlyNames()", function() {
    it("returns only the names as a list", function() {
      var input = [
        {
          name: "homer",
          role: "dad",
          favorite: "donuts"
        },
        {
          name: "marge",
          role: "mom",
          favorite: "family"
        },
        {
          name: "lisa",
          role: "daughter",
          favorite: "school"
        }
      ];
      var expected = ["homer", "marge", "lisa"];
      var actual = core.onlyNames(input);

      expect(actual).toEqual(expected);
    });
  });
});
