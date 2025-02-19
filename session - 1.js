// ? Day 1: Problem Statements & Systematic Approaches
// * Session Focus: Interpreting problem statements, breaking down problems systematically.
// ? Session Practice Questions:
// ! Determine if a number is positive or negative.
function transactionType(transaction_amount) {
  if (transaction_amount > 0) {
    return "credit";
  } else if (transaction_amount < 0) {
    return "debit";
  } else {
    return "no transaction";
  }
}

// ! Find the sum of two integers.
function findSum(num1, num2) {
  return num1 + num2;
}
// ! Identify the max, mid and min of three numbers.
const findMin = (num1, num2) => (num1 < num2 ? num1 : num2);
const findMax = (num1, num2) => (num1 < num2 ? num2 : num1);

function minMaxAndMid(num1, num2, num3) {
  let min = findMin(findMin(num1, num2), num3);
  let max = findMax(findMax(num1, num2), num3);
  let mid = num1 + num2 + num3 - min - max;
  return [max, mid, min];
}

// ! Count the number of digits in a number.

function countDigits(num) {
  if (num < 0) num = -num;
  if (num == 0) return 1;
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

// ! Check if a string contains only alphabets.
function onlyAlpha(str) {
  for (let ind = 0; ind < str.length; ind++) {
    const char = str[ind];
    if (!((char <= "z" && char >= "a") || (char <= "Z" && char >= "A")))
      return false;
  }
  return true;
}
// ! Calculate the area of a circle with a given radius.
function calculateArea(radius) {
  return (Math.PI * radius * radius).toFixed(2);
}
// console.log(calculateArea(100000000000000000000));
// ! Check if a character is a vowel.
function isVowel(char) {
  // return "aeiouAEIOU".indexOf(char) !== -1;
  return (
    char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
  );
}

// todo Post - Session Practice Questions:
// todo Calculate the difference between two integers.
function findDifference(num1, num2) {
  return num1 - num2;
}

// todo Check if a number is even or odd.

function EvenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
// todo Calculate the perimeter of a rectangle.

function perimeter(num1, num2) {
  let perimeter = 2 * (num1 + num2);
  return perimeter;
}

// todo Find the largest of four numbers.
const findLarge = (A, B) => (A > B ? A : B);
function findTheLargest(A, B, C, D) {
  let large = findLarge(findLarge(A, B), findLarge(C, D));
  return large;
}

// todo Calculate the average of three numbers.

function average(num1, num2, num3) {
  return parseFloat((num1 + num2 + num3) / 3).toFixed(2);
}

// todo Count the number of vowels in a string.

// function countVowels(str) {
//   let count = 0;
//   for (let i = 0; i > str.length; i++) {

//     if (
//       str == "a" ||
//       str == "e" ||
//       str == "i" ||
//       str == "o" ||
//       str == "u" ||
//       str == "A" ||
//       str == "E" ||
//       str == "I" ||
//       str == "O" ||
//       str == "U"
//     )
//       count++;
//   }
//   return count;
// }

function countVowels(str) {
  let count = 0;
  let vowels = new Set(["a", "e", "i", "o", "u"]);

  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i].toLowerCase())) 
      
      {
      count++;
    }
  }

  return count;
}
console.log(countVowels("hi how are you")
);

// todo Determine if a character is uppercase.

// function heckUppercase(char) {
//   if (char <= "Z" && char >= "A") {
//     return true;
//   } else {
//     return false;
//   }
// }

// The above logic is good but make direct result istead of if else condition

function checkUppercase(char) {
  return char >= "A" && char <= "Z";
}
// todo Print the reverse of a string.

function reverse(str) {
  var temp = [];
  for (var i = str.length - 1; i >= 0; i--) {
    temp.push(str[i]);
  }
  return temp.join(""); // Move join() outside the loop
}

function reverse(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i]; // Append characters one by one
  }
  return res;
}

function reverse(str) {
  let res = [];
  for (let i = str.length - 1; i >= 0; i--) {
    res.push(str[i]);
  }
  return res.join(""); // Convert array to string in O(n) time
}

// todo Find the square of a number.

function square(num) {
  return num * num;
}


module.exports = {
  transactionType,
  findSum,
  minMaxAndMid,
  onlyAlpha,
  findDifference,
  EvenOrOdd,
};
