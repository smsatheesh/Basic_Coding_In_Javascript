const { getUserInput: input, closeInput: close } = require("./readLine");

function countOfOddOrEvenNumbers(arr, type) {
  let count = 0;
  for (const num of arr) {
    if (type === "odd" && num % 2 !== 0) {
      ++count;
    } else if (type === "even" && num % 2 === 0) {
      ++count;
    }
  }

  return count;
}

const parseNumbers = (input) => {
  if (input.trim() === "") {
    return [];
  }

  return input
    .split(",")
    .map((value) => value.trim())
    .filter((value) => value !== "")
    .map(Number)
    .filter(Number.isFinite);
};

const main = async () => {
  const userInput = await input(
    "Enter an array of numbers (comma-separated): ",
  );
  console.log("You entered:", userInput);
  close();

  const numbers = parseNumbers(userInput);

  console.log("Count of odd numbers:", countOfOddOrEvenNumbers(numbers, "odd"));
  console.log(
    "Count of even numbers:",
    countOfOddOrEvenNumbers(numbers, "even"),
  );
};

main();
