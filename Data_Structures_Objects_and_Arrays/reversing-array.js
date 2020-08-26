/*
Arrays have a reverse method that changes the array by inverting the order in which its
elements appear. For this exercise, write two functions, reverseArray and
reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a
new array that has the same elements in the inverse order. The second,
reverseArrayInPlace, does what the reverse method does: it modifies the array given as
argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter,
which variant do you expect to be useful in more situations? Which one runs faster?
*/

console.time("reverseArray");
console.log(reverseArray([1, 2, 3, 4, 5]));
console.timeEnd("reverseArray");

console.time("reverseArrayInPlace");
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace();
console.log(arrayValue);
console.timeEnd("reverseArrayInPlace");

function reverseArray(arrayReverse = []) {
  let startKey = 0;
  let endKey = arrayReverse.length - 1;

  while (startKey < endKey) {
    const valueFromStartKey = arrayReverse[startKey];
    const valueFromEndKey = arrayReverse[endKey];

    arrayReverse[startKey] = valueFromEndKey;
    arrayReverse[endKey] = valueFromStartKey;

    startKey++;
    endKey--;
  }

  return arrayReverse;
}

function reverseArrayInPlace() {
  let startKey = 0;
  let endKey = arrayValue.length - 1;

  while (startKey < endKey) {
    const valueFromStartKey = arrayValue[startKey];
    const valueFromEndKey = arrayValue[endKey];

    arrayValue[startKey] = valueFromEndKey;
    arrayValue[endKey] = valueFromStartKey;

    startKey++;
    endKey--;
  }
}
