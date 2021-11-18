import "core-js/stable";
import "regenerator-runtime/runtime";

import chalk from "chalk";
import yargs from "yargs";

const log = console.log;

//const greenMsg = chalk.blue.inverse.bold("Success!");

//log(greenMsg);

// get args from command line

//log(process.argv);

//log(process.argv[2]);

//const { title } = yargs.argv;

//log(title);

yargs.command({
  command: "add",
  describe: "Add a new module",
  builder: {
    describe: "Add a new module",
    demandOptions: true,
    type: "string",
  },
  handler: () => log("Adding a new module"),
});

log(yargs.argv);
