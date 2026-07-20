const { getUserInput: input, closeInput: close } = require("./readLine");

function printFibonacciUsingIterative(number) {
  let first = 0;
  let second = 1;

  if (number === 0) {
    return;
  }
  process.stdout.write(`${first}`);

  if (number > 1) {
    process.stdout.write(` ${second}`);
  }

  for (let i = 0; i < number - 2; i++) {
    let next = first + second;
    process.stdout.write(` ${next}`);

    first = second;
    second = next;
  }
  console.log();
}

function printFibonacciUsingRecursion(count) {
  const fibo = (n) => {
    if (n <= 1) {
      return n;
    }

    return fibo(n - 1) + fibo(n - 2);
  };

  for (let i = 0; i < count; i++) {
    process.stdout.write(`${fibo(i)} `);
  }

  console.log();
}
const main = async () => {
  process.stdout.write("Fibonacci Series");
  let number = await input("Enter a non-negative integer: ");
  number = parseInt(number, 10);
  close();

  if (isNaN(number) || number < 0) {
    process.stdout.write("Please enter a valid or non-negative number");
    return;
  }

  printFibonacciUsingIterative(number);
  printFibonacciUsingRecursion(number);
};

main();
