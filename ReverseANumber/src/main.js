const { getUserInput: input, closeInput: close } = require("./readLine");

function reverseNumber(num) {
  let temp = num,
    reversedNum = 0;
  while (temp != 0) {
    reversedNum = Math.floor(reversedNum * 10) + Math.floor(temp % 10);
    temp = Math.floor(temp / 10);
  }

  console.log(
    `Given number is ${num} and respective reverse number is ${reversedNum}`,
  );
}

const main = async () => {
  console.log("Patterns Printing");
  let number = await input("Enter number for reversing : ");
  number = parseInt(number, 10);
  closeInput();

  if (isNaN(number) || number < 0) {
    console.log(`Please enter a non-negative integer for reversing a number`);
    return;
  }

  reverseNumber(number);
};

main();
