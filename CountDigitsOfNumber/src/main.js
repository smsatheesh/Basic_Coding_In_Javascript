const { getUserInput: input, closeInput: close } = require("./readLine");

function countDigits(num) {
  let count = 0;

  while (num > 0) {
    ++count;
    num = Math.floor(num / 10);
  }
  return count;
}

const main = async () => {
  let userInput = await input("Enter a number to count digits: ");
  userInput = parseInt(userInput.trim(), 10);
  close();

  if (isNaN(userInput) || userInput < 0) {
    console.log("Please enter a valid or non-negative integer.");
    return;
  }

  console.log("Number of digits in", userInput, "is:", countDigits(userInput));
};

main();
