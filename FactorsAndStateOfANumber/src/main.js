const { getUserInput: input, closeInput: close } = require("./readLine");

function printFactorsOfANumberAndItsState(number) {
  if (number === 0) {
    console.log(`Enter number is: ${number}, is neither prime nor composite`);
  } else if (number === 1) {
    console.log(`Enter number is: ${number} and has no factors`);
  } else {
    let count = 0;
    let factors = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        factors.push(i);
        count++;
      }
    }

    // Factors
    if (count === 0) {
      console.log(`Enter number is: ${number} and has no factors`);
    } else {
      console.log(
        `Enter number is: ${number} and its factors are: ${factors.join(", ")}`,
      );
    }

    // State (Prime or Composite)
    if (count > 2) {
      console.log(`It is a composite number.`);
    } else {
      console.log(`It is a prime number.`);
    }
  }
}

const main = async () => {
  console.log("Factors of a number and state");
  let number = await input("Enter a non-negative integer: ");
  number = parseInt(number);
  close();

  if (isNaN(number) || number < 0) {
    console.log("Please enter a valid or non-negative number");
    return;
  }

  printFactorsOfANumberAndItsState(number);
};

main();
