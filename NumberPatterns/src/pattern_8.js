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

  for (let i = 1; i <= number; i++) {
    for (let j = 0; j <= number; j++) {
      if (i == j || i == number - j) {
        process.stdout.write(i + " ");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log("\n");
  }
};

main();
