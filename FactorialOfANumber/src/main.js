const { getUserInput: input, closeInput: close } = require("./readLine");

function printFactorialUsingIteration(num) {
  let factorial = 1;
  while (num > 0) {
    factorial *= num;
    --num;
  }

  return factorial;
}
function printFactorialUsingRecursion(num) {
  const factorial = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    }

    return n * factorial(n - 1);
  };

  return factorial(num);
}

const main = async () => {
  console.log("Factorial Calculator");
  let number = await input("Enter a non-negative integer: ");
  number = parseInt(number);
  close();

  if (isNaN(number) || number < 0) {
    console.log("Please enter a valid non-negative integer.");
    return;
  }

  console.log(
    `Factorial (using iteration): ${printFactorialUsingIteration(number)}`,
  );
  console.log(
    `Factorial (using recursion): ${printFactorialUsingRecursion(number)}`,
  );
};

main();
