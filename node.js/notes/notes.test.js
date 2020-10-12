const notes = require("./notes");
const chalk = require('chalk');

describe("add notes", () => {
  it("should add a new note", () => {
    console.log = jest.fn();
    console.log(notes.addNote("title","this is a body"));
    expect(console.log).toHaveBeenCalledWith(chalk.green.inverse('New note added!'));
  });

  it("should not add duplicated note", () => {
    console.log = jest.fn();
    console.log(notes.addNote("title","this is a body"));
    expect(console.log).toHaveBeenCalledWith(chalk.red.inverse('Note title taken!'));
  });
});


describe("remove note", () => {
  it("should remove a note", () => {
    console.log = jest.fn();
    console.log(notes.removeNote("title"));
    expect(console.log).toHaveBeenCalledWith(chalk.green.inverse('Note removed!'));
  });

  it("shoud not found the note", () => {
    console.log = jest.fn();
    console.log(notes.removeNote("none"));
    expect(console.log).toHaveBeenCalledWith(chalk.red.inverse('No note found!'));
  });
});

describe("read list", () => {
  it("should add a new note", () => {
    //add this new note to show it in the next test
    console.log = jest.fn();
    console.log(notes.addNote("title1","this is a body"));
    expect(console.log).toHaveBeenCalledWith(chalk.green.inverse('New note added!'));
  });

  it("should return the list of notes", () => {
    console.log = jest.fn();
    console.log(notes.listNotes());
    expect(console.log).toHaveBeenCalledWith(chalk.inverse(`Your notes`));
  });
  it("should return the list of notes", () => {
    console.log = jest.fn();
    console.log(notes.listNotes());
    expect(console.log).toHaveBeenCalledWith(chalk.inverse(`Your notes`));
  });
});

//not work
describe("load note", () => {
  it("should bring all notes", () => {
    //add this new note to show it in the next test

    const result = notes.readNote('title');
    console.log(result);
    const expected = '[test]';
    expect(result).toEqual(expected);
    
  });

});