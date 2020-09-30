const todo = require("./todo");
describe("list task status ", () => {
    it("should return list status", () => {
      const result = todo.listStatus();

      const expected = [
        "### undone ###",
        "id: 2 task: test2",
        "id: 3 task: test2",
        "id: 450 task: test10",
        "id: 345 task: test50",
        "### done ###",
        "id: 780 task: hi",
        "id: 451 task: there",
        "id: 34 task: lilia",
      ];

      expect(result).toEqual(expected);
    });
  });