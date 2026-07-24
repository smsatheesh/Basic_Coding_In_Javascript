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

  for (let i = number; i >= 1; --i) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j + " ");
    }

    console.log("\n");
  }
};

main();
