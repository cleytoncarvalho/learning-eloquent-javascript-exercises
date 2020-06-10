/*
Objects, as generic blobs of values, can be used to build all sorts of data structures.
A common data structure is the list (not to be confused with array). A list is a nested
set of objects, with the first object holding a reference to the second, the second to
the third, and so on.

Write a function arrayToList that builds up a list structure like the one shown when
given [1, 2, 3] as argument. Also write a listToArray function that produces an array
from a list. Then add a helper function prepend, which takes an element and a list and
creates a new list that adds the element to the front of the input list, and nth, which
takes a list and a number and returns the element at the given position in the list
(with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
*/

console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(nth(arrayToList([10, 20, 30]), 1));

function arrayToList(array = []) {
  array.reverse();

  let list = null;

  array.forEach((item) => {
    list = { value: item, rest: list };
  });

  return list;
}

function listToArray(list = {}) {
  const array = [];

  addValueToArray(list);

  function addValueToArray(item = null) {
    array.push(item.value);

    if (item.rest) {
      addValueToArray(item.rest);
    }
  }

  return array;
}

function prepend() {
  //Could not understand this one. The example seems not to match the explanation.
}

function nth(list = {}, position = 0) {
  let positionCounter = 0;

  function getValueFromList(subList = {}) {
    if (!subList) {
      return undefined;
    }

    if (positionCounter === position) {
      return subList.value;
    }

    positionCounter++;
    return getValueFromList(subList.rest);
  }

  return getValueFromList(list);
}
