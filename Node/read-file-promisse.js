const path = require("path");
const { readFile } = require("fs").promises;

readFile(path.join(__dirname, "..", "/sources/docs/sample.txt"), "utf8")
  .then((text) => console.log("The file contains: ", text))
  .catch((error) => {
    throw error;
  });
