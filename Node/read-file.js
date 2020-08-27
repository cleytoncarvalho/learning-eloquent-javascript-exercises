const { readFile } = require("fs");

readFile("../sources/docs/sample.txt", "utf8", (error, text) => {
  if (error) throw error;
  console.log("The file contains:", text);
});
