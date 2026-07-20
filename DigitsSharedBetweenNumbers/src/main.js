const { getMultipleInputs: input, closeInput: close } = require("./readLine");

function findSharedDigits(num1, num2) {
  const digits1 = new Set(num1.toString().split(""));
  const digits2 = new Set(num2.toString().split(""));
  const sharedDigits = [...digits1].filter((digit) => digits2.has(digit));
  return sharedDigits;
}

const main = async () => {
  console.log("Digits Shared Between Two Numbers");
  let number1 = await input("Enter the first number: ");
  let number2 = await input("Enter the second number: ");
  close();

  if (
    isNaN(number1) ||
    isNaN(number2) ||
    parseInt(number1, 10) < 0 ||
    parseInt(number2, 10) < 0
  ) {
    console.log("Please enter valid or non-negative numbers.");
  }

  const sharedDigits = findSharedDigits(number1, number2);
  if (sharedDigits.length > 0) {
    console.log(
      `Shared digits between ${number1} and ${number2}: ${sharedDigits.join(
        ", ",
      )}`,
    );
  } else {
    console.log(`No shared digits between ${number1} and ${number2}.`);
  }
};

main();
