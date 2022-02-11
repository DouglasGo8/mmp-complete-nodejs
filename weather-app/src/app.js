import "core-js/stable";
import "regenerator-runtime/runtime";

import request from "request";

//
const log = console.log;

// const url = "https://api.agify.io/?name=bella";

/*request({ url: url }, (error, response) => {
  if (error) {
    console.error(error);
  } else if (response.body.error) {
    console.warn("Fail happens");
  } else {
    const json = JSON.parse(response.body);
    log(json);
  }
});*/

const geoCode = (name, callBack) => {
  const url = `https://api.agify.io/?name=${name}`;
  request(url, callBack);
};

const myFunc = (p, callback) => {
  callback(p);
};


const myFunc2 = (p1, callback) => {

  const obj = {a:1, b:2, c: p1}

  callback(obj);
  
}

geoCode("bella", (err, data) => {
  //console.log(data.body);

  myFunc(data.body, (r) => {
    console.log("The result ==>" + r);


    myFunc2(3, ({a,b,c})=>{
      console.log(a)
    })

  });
});
