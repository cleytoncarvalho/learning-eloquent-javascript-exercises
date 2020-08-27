const { writeFile } = require("fs");

writeFile(
  "../sources/docs/sample_write.txt",
  "This is a sample file written by Node.",
  (error) => {
    if (error) throw error;
    console.log("File written.");
  }
);
