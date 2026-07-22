const { getUserInput: input, closeInput: close } = require("./readLine");

function hcfOfNumbers(num1, num2) {
  let hcf = 1;
  for (let i = 2; i <= num1 || i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      hcf = i;
    }
  }

  return hcf;
}

const main = async () => {
  console.log("HCF and LCM of numbers");
  let num1 = await input("Enter a non-negative integer (number 1) : ");
  let num2 = await input("Enter a non-negative integer (number 2) : ");
  num1 = parseInt(num1, 10);
  num2 = parseInt(num2, 10);
  close();

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter a valid numbers");
    return;
  }

  if (num1 < 0 || num2 < 0) {
    console.log("Please enter a valid non-negative numbers");
    return;
  }

  const hcf = hcfOfNumbers(num1, num2);
  console.log(`HCF of numbers ${num1} and ${num2} is : ${hcf}`);

  const lcm = (num1 * num2) / hcf;
  console.log(`LCM of numbers ${num1} and ${num2} is : ${lcm}`);
};

main();
