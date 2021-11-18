import "core-js/stable";
import "regenerator-runtime/runtime";

import request from "request";

//
const log = console.log;

const url = "https://api.agify.io/?name=bella";

request({ url: url }, (error, response) => {
  const json = JSON.parse(response.body);
  log(json);
});
