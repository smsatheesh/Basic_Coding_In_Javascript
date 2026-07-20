const { getUserInput: input, closeInput: close } = require("./readLine");

function getCountOfDigits(num) {
  let count = 0;
  while (num > 0) {
    ++count;
    num = Math.floor(num / 10);
  }
  return count;
}

function isArmstrongNumber(num) {
  const power = getCountOfDigits(num);
  let sum = 0;
  let temp = num;
  while (temp > 0) {
    const digit = temp % 10;
    sum += Math.floor(Math.pow(digit, power));
    temp = Math.floor(temp / 10);
  }

  return sum === num;
}

const main = async () => {
  const numberToCheck = await input(
    "Enter a number to check if it is an Armstrong number: ",
  );
  close();

  const num = parseInt(numberToCheck, 10);
  if (isNaN(num) || num < 0) {
    console.log("Please enter a valid number.");
    return;
  }

  if (isArmstrongNumber(num)) {
    console.log(`${num} is an Armstrong number.`);
  } else {
    console.log(`${num} is not an Armstrong number.`);
  }
};

main();
