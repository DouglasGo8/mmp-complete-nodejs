import fs from "fs";

const getNotes = () => console.log("Notes,,,,");

const addNotes = (title, body) => {
  const content = { title, body };

  fs.writeFile("./file.json", JSON.stringify(content), () =>
    console.log("done")
  );
};

module.exports = { addNotes, getNotes };
