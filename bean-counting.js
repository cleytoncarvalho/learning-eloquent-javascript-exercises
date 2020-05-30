/*
Write a function countBs that takes a string as its only argument and returns a number
that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a
second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to make use of this
new function.
*/

function countBs(string = "") {
  return countChar(string, "B");
}

function countChar(string = "", char) {
  if (!char) {
    throw "Expecting a second argument: char.";
  }

  let counter = 0;

  for (i = 0; i < string.length; i++) {
    counter += string[i] === char ? 1 : 0;
  }

  return counter;
}

console.log(countBs("Barbecue"));
console.log(countBs("BBC"));
console.log(countChar("Harry Potter", "t"));
