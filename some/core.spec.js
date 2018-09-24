var core = require("./core");

describe("some", function() {
  describe("#anyGreaterThan10()", () => {
    it("anyGreaterThan10([9, 10, 11]) should return true", function() {
      var goodInput = [9, 10, 11];
      expect(core.anyGreaterThan10(goodInput)).toEqual(true);
    });

    it("anyGreaterThan10([1, 2, 3]) should return false", function() {
      var badInput = [1, 2, 3];
      expect(core.anyGreaterThan10(badInput)).toEqual(false);
    });
  });

  describe("#longWord()", () => {
    it("longWord(['abc', '12345678901']) should return true", function() {
      var goodInput = ["abc", "12345678901"];
      expect(core.longWord(goodInput)).toEqual(true);
    });

    it("longWord(['abc', 'def']) should return false", function() {
      var badInput = ["abc", "def"];
      expect(core.longWord(badInput)).toEqual(false);
    });
  });

  describe("#containsTrue()", () => {
    it("containsTrue([[false, false], [false, true]]) should return true", function() {
      var goodInput = [[false, false], [false, true]];
      expect(core.containsTrue(goodInput)).toEqual(true);
    });

    it("containsTrue([[false, false], [false, false]]) should return false", function() {
      var badInput = [[false, false], [false, false]];
      expect(core.containsTrue(badInput)).toEqual(false);
    });
  });

  describe("#containsCarcosa()", () => {
    it("containsCarcosa should return true when the array contains 'Carcosa' somewhere", function() {
      var goodInput = [
        "Strange is the night where black stars rise,",
        "And strange moons circle through the skies,",
        "But stranger still is",
        "In Carcosa."
      ];
      expect(core.containsCarcosa(goodInput)).toEqual(true);
    });

    it("containsCarcosa should return false when the array doesn't contain 'Carcosa' anywhere", function() {
      var badInput = [
        "Along the shore the cloud waves break,",
        "The twin suns sink behind the lake,",
        "The shadows lengthen",
        "In Bahamas."
      ];
      expect(core.containsCarcosa(badInput)).toEqual(false);
    });
  });
});
