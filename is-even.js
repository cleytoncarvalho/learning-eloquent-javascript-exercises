/*
Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a whole number) and return a
Boolean.

Test it on 50 and 75.
*/

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-50));
console.log(isEven(-75));
console.log(isEven(0));

function isEven(number) {
  if (!Number.isInteger(number)) {
    return false;
  }

  return number % 2 === 0 ? true : false;
}
