const { getUserInput, closeInput } = require("./readLine");

const checkPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const main = async () => {
  console.log("Prime Number Checker");
  const input = await getUserInput("Enter a number: ");
  const number = parseInt(input);

  if (isNaN(number)) {
    console.log("Please enter a valid number.");
  } else {
    const isPrime = checkPrime(number);
    if (isPrime) {
      console.log(`${number} is a prime number.`);
    } else {
      console.log(`${number} is not a prime number.`);
    }
  }

  closeInput();
};

main();
