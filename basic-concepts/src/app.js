import "core-js/stable";
import "regenerator-runtime/runtime";

// #

//import fs from "fs";
//import add from "./utils";
import chalk from "chalk";

//import validator from "validator";


const log = console.log;

/*const myPromise = () =>
  new Promise((resolve) => {
    resolve("done");
  });

const myAsync = async () => {
  const myValue = await myPromise();

  console.log(myValue);
};

const writeAFile = () => {
  fs.writeFile("./note.txt", "MyText", () => {
    console.log("done");
  });
};*/

// myAsync();
// writeAFile();
//console.log(add(4, 3));
//console.log(validator.isEmail('example@mail.com'));


log(chalk.magenta.inverse.bold('Success!'));
