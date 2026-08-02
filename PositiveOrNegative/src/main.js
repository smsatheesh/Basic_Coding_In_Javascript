const { getUserInput: input, closeInput: close } = require("./readLine");

function checkIfNumberStateUsingConditional(number) {
  if (number < 0) {
    console.log(`Number ${number} is negative`);
  } else if (number > 0) {
    console.log(`Number ${number} is positive`);
  } else {
    console.log("The number is zero (0)");
  }
}

function checkIfNumberStateUsingTerminal(number) {
  if (number == 0) {
    console.log("The number is zero (0)");
    return;
  } else {
    console.log(`The number is ${number > 0 ? "positive" : "negative"}`);
  }
}

const main = async () => {
  console.log("Patterns Printing");
  let number = await input("Enter number for the checking state : ");
  number = parseInt(number, 10);
  closeInput();

  if (isNaN(number) || number < 0) {
    console.log(
      `Please enter a non-negative integer for checking state of a number`,
    );
    return;
  }

  console.log(`Number state check using conditional: `);
  checkIfNumberStateUsingConditional(number);

  console.log(`Number state check using ternary: `);
  checkIfNumberStateUsingTerminal(number);
};

main();
