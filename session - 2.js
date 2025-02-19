//? Day 2: Maths & Pattern Creation
//* Session Focus: Solving fundamental math problems and creating patterns.
//? Session Practice Questions:

//! Calculate the factorial of a number.
function factorial(n) {
  // if (n == 0) return 1;
  let fact = 1;
  for (let val = n; val > 1; val--) {
    fact = fact * val;
  }
  return fact;
}
console.log(factorial(3));

// n! => n * n-1 * n-2 * n-3 * ... * 3 * 2 * 1
// 5! => 5*4*3*2*1

// Test case function
function testFactorial() {
  const testCases = [
    { input: 0, expected: 1 },
    { input: 5, expected: 120 },
    { input: 7, expected: 5040 },
    { input: 12, expected: 479001600 },
  ];

  testCases.forEach((testCase, index) => {
    const result = factorial(testCase.input);
    if (result === testCase.expected) {
      console.log(`Test case ${index + 1} passed!`);
    } else {
      console.log(
        `Test case ${index + 1} failed: expected ${
          testCase.expected
        }, got ${result}`
      );
    }
  });
}

// Run the tests
// testFactorial();

//! Generate the Fibonacci sequence up to N terms.
function fibonacci(n) {
  let arr = [];
  if (n > 0) arr.push(0);
  if (n > 1) arr.push(1);
  for (let ind = 2; ind < n; ind++) {
    arr.push(arr[ind - 2] + arr[ind - 1]);
  }
  return arr;
}
const result = {
  //
  array: fibonacci(15), //If need to get n terms and its position together or based question we can edit this code  fro both
  length: fibonacci(15).length, //
};

console.log(result);
console.log(fibonacci(15));
console.log(fibonacci(3));
console.log(fibonacci(7));
console.log(fibonacci(1));
console.log(fibonacci(0));
//! Find the nth term of fibonacci series
function nthFibo(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  let n1 = 0,
    n2 = 1;
  for (let itr = 1; itr < n; itr++) {
    let sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }
  return n2;
}
console.log(nthFibo(5));
//! Check if a number is prime. (Time Complexity)
// prime number is a number which is only divisible 1 and itself, the total number of divisers for a prime numer is 2.

function isPrime(num) {
  for (let val = 2; val < num; val++) {
    if (num % val == 0) return false;
  }
  return true;
}
console.log(isPrime(999983));

function isPrime1(num) {
  if (num == 2) return true;
  if (num % 2 == 0) return false;
  for (let val = 3; val < num; val += 2) if (num % val == 0) return false;
  return true;
}

function isPrime2(num) {
  if (num == 2) return true;
  if (num % 2 == 0) return false;
  for (let val = 3; val < num / 2; val += 2) {
    if (num % val == 0) return false;
  }
  return true;
}

function isPrime3(num) {
  if (num < 2) return false;
  if (num == 2) return true;
  if (num % 2 == 0) return false;
  for (let val = 3; val * val <= num; val += 2)
    if (num % val == 0) return false;
  return true;
}
// Edge case testing
function runEdgeCaseTests() {
  const testCases = [
    { num: 2, expected: true }, // Smallest prime number
    { num: 3, expected: true }, // Smallest odd prime number
    { num: 4, expected: false }, // Smallest non-prime greater than 2
    { num: 999983, expected: true }, // A large prime number
    { num: 1000000, expected: false }, // A large non-prime number
    { num: 1, expected: false }, // Not a prime number
    { num: -5, expected: false }, // Negative number (not prime)
    { num: 9, expected: false }, // A small non-prime number
    { num: 11, expected: true }, // Another small prime number
  ];

  testCases.forEach((testCase, index) => {
    const { num, expected } = testCase;
    const result = isPrime3(num);
    if (result === expected) {
      console.log(`Test case ${index + 1} passed for num ${num}!`);
    } else {
      console.log(
        `Test case ${
          index + 1
        } failed for num ${num}: expected ${expected}, got ${result}`
      );
    }
  });
}

// Run the edge case tests
// runEdgeCaseTests();
//! Sum of digits in a number.
// 54321 => 5 + 4 + 3 + 2 + 1 => 15

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(sumOfDigits(31));

//! Check if a number is a palindrome.
function reverse(num) {
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    console.log(rev);    
    num = Math.floor(num / 10);
  }
  return rev;
}

console.log(reverse(123));

function isPalindrome(num) {
  let reversedNum = reverse(num);
  return num == reversedNum;
}
// console.log(isPalindrome(54345))
//! Print a right - angled triangle pattern of asterisks.
function printRightAngledTriangle(n) {
  for (let row = 0; row < n; row++) {
    let arr = [];
    for (let col = 0; col <= row; col++) {
      arr.push("*");
    }
    console.log(arr.join(""));
  }
}
printRightAngledTriangle(5)
//! Print a hollow square pattern.
function printHollowSquarePattern(n) {
  for (let row = 0; row < n; row++) {
    let arr = [];
    for (let col = 0; col < n; col++) {
      if (row == 0 || row == n - 1 || col == 0 || col == n - 1) {
        arr.push("*");
      } else {
        arr.push(" ");
      }
    }
    console.log(arr.join(""));
  }
}
printHollowSquarePattern(5);
module.exports = { factorial };
// todo Post - Session Practice Questions:
// todo Find the LCM of two numbers.

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(gcd(5,15));

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
console.log(lcm(5,15));

// todo Generate a pyramid pattern of numbers.

function printHollowPyramid(n) {
  for (let row = 0; row < n; row++) {
    let arr = [];
    for (let col = 0; col < 2 * n - 1; col++) {
      if (row === n - 1 || col === n - row - 1 || col === n + row - 1) {
        arr.push("*");
      } else {
        arr.push(" ");
      }
    }
    console.log(arr.join(""));
  }
}

printHollowPyramid(5);

// todo Calculate the GCD of two numbers.

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// todo Print an inverted triangle pattern of stars.

function printInvertedTriangle(n) {
  for (let row = 0; row < n; row++) {
    let arr = [];
    // For an inverted triangle, the number of stars in each row decreases
    for (let col = 0; col < n - row; col++) {
      arr.push("*");
    }
    console.log(arr.join(""));
  }
}

// todo Check if two numbers are coprime.

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(gcd(5,10));

function coprime(a, b) {
  if (gcd(a, b) === 1) {
    return true;
  } else {
    return false;
  }
}

console.log(coprime(5,10));

// todo Print a diamond pattern of stars.

function printDiamond(n) {
  if (n % 2 === 0) n++; // Ensure n is odd for symmetry

  // Upper half
  for (let i = 1; i <= n; i += 2) {
    console.log(" ".repeat((n - i) / 2) + "*".repeat(i));
  }

  // Lower half
  for (let i = n - 2; i > 0; i -= 2) {
    console.log(" ".repeat((n - i) / 2) + "*".repeat(i));
  }
}

// Set the size of the diamond
printDiamond(5);

// todo Print Pascal’s triangle up to N rows.
// todo Find all divisors of a number.

function findDivisiors(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(findDivisiors(25));

// todo Print a checkerboard pattern.
