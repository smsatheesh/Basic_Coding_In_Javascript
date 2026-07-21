const { getUserInput: input, closeInput: close } = require("./readLine");

function printOutput(number, countMap) {
  console.log("\nDigit frequency in", number + ":");
  let hasDigits = false;
  for (let i = 0; i < 10; i++) {
    const count = countMap.get(i) || 0;
    if (count > 0) {
      console.log(
        `  Digit ${i} appears ${count} time${count === 1 ? "" : "s"}`,
      );
      hasDigits = true;
    }
  }

  if (!hasDigits && number !== 0) {
    console.log("  No digits found");
  }

  console.log();
}

function calculateFrequencyOfDigits(number) {
  let countMap = new Map();

  if (number === 0) {
    countMap.set(0, 1);
  } else {
    let n = number;
    while (n != 0) {
      const digit = n % 10;
      countMap.set(digit, (countMap.get(digit) || 0) + 1);
      n = Math.floor(n / 10);
    }
  }

  printOutput(number, countMap);
}

const main = async () => {
  console.log("Program to calculate frequency of digits in a number.");
  let number = await input("Enter a non-negative input: ");
  number = parseInt(number.trim(), 10);
  close();

  if (isNaN(number)) {
    console.log("Please enter a valid number");
    return;
  }
  if (number < 0) {
    console.log("Please enter a non-negative number");
    return;
  }

  calculateFrequencyOfDigits(number);
};

main();
