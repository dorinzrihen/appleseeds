const yargs = require("yargs");

const addCalc = (numberOne, numberTwo) => {
  console.log(numberOne + numberTwo);
};

const subCalc = (numberOne, numberTwo) => {
  console.log(numberOne - numberTwo);
};

const multCalc = (numberOne, numberTwo) => {
  console.log(numberOne * numberTwo);
};

const powCalc = (numberOne) => {
  console.log(Math.pow(numberOne, 2));
};

// Create read command
yargs.command({
  command: "add",
  describe: "add",
  builder: {
    one: {
      describe: "number one",
      demandOption: true,
      type: "integer",
    },
    two: {
      describe: "number two",
      demandOption: true,
      type: "integer",
    },
  },
  handler(argv) {
    addCalc(argv.one, argv.two);
  },
});

yargs.command({
  command: "sub",
  describe: "sub",
  builder: {
    one: {
      describe: "number one",
      demandOption: true,
      type: "integer",
    },
    two: {
      describe: "number two",
      demandOption: true,
      type: "integer",
    },
  },
  handler(argv) {
    subCalc(argv.one, argv.two);
  },
});

yargs.command({
  command: "mult",
  describe: "mult",
  builder: {
    one: {
      describe: "number one",
      demandOption: true,
      type: "integer",
    },
    two: {
      describe: "number two",
      demandOption: true,
      type: "integer",
    },
  },
  handler(argv) {
    multCalc(argv.one, argv.two);
  },
});

yargs.command({
    command: "pow",
    describe: "pow",
    builder: {
      one: {
        describe: "number one",
        demandOption: true,
        type: "integer",
      },
    },
    handler(argv) {
      powCalc(argv.one);
    },
  });

yargs.parse();
