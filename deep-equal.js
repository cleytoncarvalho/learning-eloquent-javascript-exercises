/*
The == operator compares objects by identity. But sometimes you’d prefer to compare the
values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the
same value or are objects with the same properties, where the values of the properties
are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or
have their properties compared, you can use the typeof operator. If it produces "object"
for both values, you should do a deep comparison. But you have to take one silly
exception into account: because of a historical accident, typeof null also produces
"object".

The Object.keys function will be useful when you need to go over the properties of
objects to compare them.
*/

function deepEqual(value1, value2) {
  if (isObject(value1) && isObject(value2)) {
    if (Object.keys(value1).length === 0 && Object.keys(value2).length === 0) {
      return true;
    }
    if (Object.keys(value1).length === 0 || Object.keys(value2).length === 0) {
      return false;
    }

    return Object.keys(value1).every((property) => {
      return deepEqual(value1[property], value2[property]);
    });
  }

  if (value1 === value2) {
    return true;
  }

  return false;
}

function isObject(value) {
  return typeof value === "object" && value !== null;
}

let obj = { here: { is: "an" } };
let obj2 = { here: { is: "an" } };

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, obj2));
console.log(deepEqual({}, obj));
console.log(deepEqual(obj, {}));
console.log(deepEqual({}, {}));
