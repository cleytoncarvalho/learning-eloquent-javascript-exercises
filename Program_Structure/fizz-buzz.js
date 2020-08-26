/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for
numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are
divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only
one of those).
*/

printFizzBuzz();

function printFizzBuzz() {
  for (i = 0; i < 100; i++) {
    let number = i + 1;
    let elementToPrint = number;
    let isDivisibleBy3 = isDivisibleBy(number, 3);
    let isDivisibleBy5 = isDivisibleBy(number, 5);

    if (isDivisibleBy3 && isDivisibleBy5) {
      elementToPrint = "FizzBuzz";
    } else if (isDivisibleBy3) {
      elementToPrint = "Fizz";
    } else if (isDivisibleBy5) {
      elementToPrint = "Buzz";
    }

    console.log(elementToPrint);
  }
}

function isDivisibleBy(number, divider) {
  return number % divider === 0;
}
