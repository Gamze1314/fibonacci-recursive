function fibonacci(n) {
  // Base cases
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  // Recursive case: sum of the two preceding Fibonacci numbers
  return fibonacci(n - 1) + fibonacci(n - 2);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// base cases
// 0, 1, 1, 2, 3
// if n is 0, or 1 (if n < 2)
// fibo[0], fibo[1] => return values

// if n >= 2
// the value => the sum of the two preceeding values.
// sum = values[0] + values[1] => values[1](next fibo number)

// what needs to happen after?
// to create the fibonacci series recursively, i need to write my base cases first, After that i need to check if the case n > 2, matches then i return the nextt value which is the sum of preceding values and push it to the 'lastTwo' array.
// return the nth value => recusive calls until n - 1.

// And a written explanation of your solution
