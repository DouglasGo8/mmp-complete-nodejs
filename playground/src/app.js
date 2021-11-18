import "core-js/stable";
import "regenerator-runtime/runtime";

import { addNotes } from "./notes";

// const log = console.log;

/*const book = {
  isbn: "987755418884",
  title: "Apache Camel Core Concepts",
  author: "Douglas Batista",
};*/

// core Javascript (stringify)
//const json = JSON.stringify(book);

//log(json); // title here is undefined because the content is a string representation
//log(JSON.parse(json).title);

/*fs.writeFile("./file.json", json, () => {
  log("done");
});*/

//const content = fs.readFileSync("./file.json");

//log(JSON.parse(content.toString()).title);

addNotes("bla", "bla 2");
