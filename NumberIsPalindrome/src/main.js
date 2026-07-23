const { getUserInput: input, closeInput: close } = require("./readLine");

function checkIfPalindrome(number) {
  let temp = number,
    sum = 0;

  while (temp != 0) {
    sum = sum * 10 + Math.floor(temp % 10);
    temp = Math.floor(temp / 10);
  }

  if (sum === number) {
    console.log(`Entered number ${number} is a palindrome`);
  } else {
    console.log(`Entered number ${number} is not a palindrome`);
  }
}

const main = async () => {
  console.log("Palindrom of Number");
  let number = await input("Enter number to check if it's Palindrome : ");
  number = parseInt(number);
  close();

  if (isNaN(number) || number < 0) {
    console.log("Please enter a non-negative to number for a check");
    return;
  }

  checkIfPalindrome(number);
};

main();
