const { readFile } = require("fs");

readFile("../sources/doc/sample.txt", "utf8", (error, text) => {
  if (error) throw error;
  console.log("The file contains:", text);
});
