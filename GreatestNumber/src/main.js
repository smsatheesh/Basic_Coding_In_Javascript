const { getUserInput: input, closeInput: close } = require("./readLine");

function getGreatestNumberUsingBuiltIn(...numbers) {
  return Math.max(...numbers);
}

function getGreatestNumberUsingConditional(...numbers) {
  if (numbers.length === 0) return null;
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

const getValidNumber = async (prompt) => {
  while (true) {
    const inputStr = await input(prompt);
    const num = parseFloat(inputStr.trim());
    if (isNaN(num)) {
      console.log("Please enter a valid number");
    } else if (!isFinite(num)) {
      console.log("Please enter a finite number");
    } else {
      return num;
    }
  }
};

const getValidCount = async () => {
  while (true) {
    const inputStr = await input(
      "How many numbers would you like to compare? (minimum 2): ",
    );
    const count = parseInt(inputStr.trim(), 10);

    if (isNaN(count) || !Number.isInteger(count) || count < 2) {
      console.log("Please enter a valid integer greater than or equal to 2");
    } else {
      return count;
    }
  }
};

const main = async () => {
  console.log("🔢 GREATEST NUMBER FINDER 🔢");
  console.log("Find the maximum number from a set of numbers!\n");

  let shouldContinue = true;

  while (shouldContinue) {
    const count = await getValidCount();

    const numbers = [];
    console.log(`\nEnter ${count} numbers:`);
    for (let i = 0; i < count; i++) {
      const num = await getValidNumber(`Number ${i + 1}: `);
      numbers.push(num);
    }

    // Check if all numbers are equal
    const allEqual = numbers.every((num) => num === numbers[0]);
    if (allEqual) {
      console.log(`\nAll ${count} numbers are equal to ${numbers[0]}!`);
    } else {
      const greatestNumByBuiltIn = getGreatestNumberUsingBuiltIn(...numbers);
      console.log(
        `\nThe greatest number using built-in method is : ${greatestNumByBuiltIn}`,
      );

      const greatestNumByConditional = getGreatestNumberUsingConditional(
        ...numbers,
      );
      console.log(
        `The greatest number using conditional method is : ${greatestNumByConditional}`,
      );
    }

    const continueAnswer = await input(
      "\nWould you like to compare another set of numbers? (y/n): ",
    );
    shouldContinue =
      continueAnswer.toLowerCase().trim() === "y" ||
      continueAnswer.toLowerCase().trim() === "yes";

    if (shouldContinue) {
      console.log("\n" + "🔄".repeat(10) + "\n");
    }
  }

  close();
  console.log("\nThank you for using the Greatest Number Finder! Bye! 👋");
};

main();
