const { getUserInput: input, closeInput: close } = require("./readLine");

function computePower(number, power) {
  let count = 1,
    temp = number;
  do {
    number *= temp;
    ++count;
  } while (count < power);

  console.log(
    `Number : ${temp} for the power value of : ${power} is : ${number}`,
  );
}

const main = async () => {
  console.log("Patterns Printing");
  let number = await input("Enter number for the powering : ");
  number = parseInt(number, 10);

  let power = await input("Enter power for a number : ");
  power = parseInt(power, 10);
  close();

  if (isNaN(number) || isNaN(power) || number < 0 || power < 0) {
    console.log(`Please enter a non-negative integer for powering`);
    return;
  }

  computePower(number, power);
};

main();
