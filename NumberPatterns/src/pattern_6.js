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
    for (let j = 1; j <= number; j++) {
      if (j <= i) {
        process.stdout.write(j + "");
      } else {
        process.stdout.write(" ");
      }
    }

    for (let k = number; k >= 1; --k) {
      if (k <= i) {
        process.stdout.write(k + "");
      } else {
        process.stdout.write(" ");
      }
    }

    console.log("\n");
  }
};

main();
