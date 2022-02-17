import "core-js/stable";
import "regenerator-runtime/runtime";
import express from "express";

const app = express();

const log = console.log;

app.get("", (req, resp) => {
  resp.send("<h1>Balloon Yep</h1>");
});

app.get("/help", (req, resp) => {
  resp.send([
    {
      name: "Douglas",
      age: 42,
    },
    {
      name: "Ketty",
      age: 40,
    },
  ]);
});

app.get("/about", (req, resp) => {
  resp.send("<h1>About</h1>");
});

app.get("/weather", (req, resp) => {
  resp.send({
    forecast: "Snow",
    location: "Philadelphia",
  });
});

//log("NodeJs Rocks!!!");

app.listen(3000, () => {
  log("Server running");
});
