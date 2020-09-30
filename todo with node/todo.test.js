const todo = require('./todo');

describe('todo', () => {
    describe('test functions', () => {
        it('should return list status', () => {
            const result = todo.listStatus();

            const expected = [
                '### undone ###',
                'id: 2 task: test2',
                'id: 3 task: test2',
                '### done ###',
                'id: 1 task: test'
              ];

            expect(result).toEqual(expected);
        });

        
        it('should add new task', () => {
            const result = todo.addItem("new task");

            const expected = "[UPDATE] db";

            expect(result).toEqual(expected);
        });

        it('should delete task', () => {
            const result = todo.deleteItem("1");

            const expected = [ { id: '1', task: 'test' } ];

            expect(result).toEqual(expected);
        });

    });
});