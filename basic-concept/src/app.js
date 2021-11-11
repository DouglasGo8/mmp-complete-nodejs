import "core-js/stable";
import "regenerator-runtime/runtime";

const myPromise = () =>
  new Promise((resolve) => {
    resolve("done");
  });

const myAsync = async () => {
  const myValue = await myPromise();

  console.log(myValue);
};

myAsync();
