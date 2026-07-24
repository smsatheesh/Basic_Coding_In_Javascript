const { getUserInput: input, closeInput: close } = require("./readLine");

const main = async () => {
  console.log("Patterns Printing");
  let number = await input("Enter number for the pattern : ");
  number = parseInt(number, 10);
  close();

  if (isNaN(number) || number < 0) {
    console.log("Please enter a non-negative integer");
    return;
  }

  let count = 1;
  for (let i = 1; i <= number * 2 - 1; i++) {
    for (let j = 0; j <= number * 2 - 1; j++) {
      if (i == j || i + j == 2 * number) {
        process.stdout.write(count + " ");
      } else {
        process.stdout.write(" ");
      }
    }

    if (i < number) {
      ++count;
    } else {
      --count;
    }
    console.log("\n");
  }
};

main();
