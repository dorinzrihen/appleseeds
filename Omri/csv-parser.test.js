const csvParser = require("./csv-parser");

describe("csv-parser", () => {
  describe("csv problems option", () => {
    it("should not read from the CSV", () => {
      const result = csvParser.makeJason("nothing.txt");
      const expected = -1;
      expect(result).toEqual(expected);
    });
  });
});
