const todo = require("./todo");

describe("todo", () => {
  describe("to do options", () => {
    it("should add new task", () => {
      const result = todo.addItem("new task");

      const expected = "[UPDATE] db";

      expect(result).toEqual(expected);
    });

    it("should delete task with id", () => {
      const result = todo.deleteItem("780");

      const expected = [{ id: "780", task: "hi" }];

      expect(result).toEqual(expected);
    });

    it("should delete task with task name", () => {
      const result = todo.deleteItem("test2");

      const expected = [{ id: "2", task: "test2" }];

      expect(result).toEqual(expected);
    });

    it("should mark as done task", () => {
      const result = todo.markAsDone("450");

      const expected = { id: "450", task: "test10" };

      expect(result).toEqual(expected);
    });

    it("should not found the task", () => {
      const result = todo.markAsDone("9999");

      const expected = -1;

      expect(result).toEqual(expected);
    });

  });
});
