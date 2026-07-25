const { getUserInput: input, closeInput: close } = require("./readLine");

function countOfDigits(num) {
  let count = 0,
    temp = num;
  do {
    ++count;
    temp = Math.floor(temp / 10);
  } while (temp != 0);

  return count;
}
function swapDigitsUsingMath(num) {
  const digitCount = countOfDigits(num);

  if (digitCount === 1) {
    console.log(`The entered number has only one digit: ${num}`);
    return;
  }

  const power = Math.pow(10, digitCount - 1);

  const firstDigit = Math.floor(num / power);
  const lastDigit = num % 10;

  const middle = Math.floor((num % power) / 10);

  const result = lastDigit * power + middle * 10 + firstDigit;

  console.log(`Original Number : ${num}`);
  console.log(`First Digit     : ${firstDigit}`);
  console.log(`Last Digit      : ${lastDigit}`);
  console.log(`Middle Digits   : ${middle}`);
  console.log(`Swapped Number  : ${result}`);
}

const main = async () => {
  console.log("Swapping Digits");
  let number = await input("Enter number for swapping digits : ");
  number = parseInt(number, 10);
  close();

  if (isNaN(number) || number < 0) {
    console.log(
      `Please enter a non-negative integer for swapping a number position`,
    );
    return;
  }

  swapDigitsUsingMath(number);
};

main();
