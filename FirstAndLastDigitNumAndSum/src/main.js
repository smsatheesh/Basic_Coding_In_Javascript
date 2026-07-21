const { getUserInput: input, closeInput: close } = require("./readLine");

function computeDigitAndSumOfIt(number) {
  const lastDigit = number % 10;
  let firstDigit = number;
  while (firstDigit >= 10) {
    firstDigit = Math.floor(firstDigit / 10);
  }

  if (firstDigit === number) {
    console.log(`The enter digit is single digit: ${number}`);
    return;
  }

  console.log(
    `The first digit is ${firstDigit} and last digit is ${lastDigit} and sum of it's: ${firstDigit + lastDigit}`,
  );
}

const main = async () => {
  console.log("First and Last Digit of Number and Its Sum");
  let number = await input("Enter a non-negative integer: ");
  number = parseInt(number.trim(), 10);
  close();

  if (isNaN(number) || number < 0) {
    console.log("Please enter a valid non-negative integer");
    return;
  }

  computeDigitAndSumOfIt(number);
};

main();
