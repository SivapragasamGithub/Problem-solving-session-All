const { transactionType, findSum, findDifference } = require("./session - 1");

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  //   let transaction_amount = parseInt(userInput[0]);
  //   console.log(transactionType(transaction_amount));

//   console.log(findDifference(...userInput[0].split(" ").map(Number)));


  //end-here
});
