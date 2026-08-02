const { getUserInput: input, closeInput: close } = require("./readLine");

function getCountOfDigits(num) {
  let count = 0;

  while (num != 0) {
    ++count;
    num = Math.floor(num / 10);
  }

  return count;
}

function getSumCheckIsEqualToNum7(num) {
  let sum = 0,
    temp = num;

  while (temp != 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }

  if (getCountOfDigits(sum) === 1) {
    return 7 === sum;
  } else {
    return getSumCheckIsEqualToNum7(sum);
  }
}

function checkIfOddDigitsAreSame(num) {
  const arr = Array.from(String(num), Number);

  if (arr.length < 2) {
    return true;
  }

  const oddDigit = arr[1];

  for (let i = 3; i < arr.length; i += 2) {
    if (arr[i] !== oddDigit) {
      return false;
    }
  }

  return true;
}

function checkIfNumbersAreInUpFace(num) {
  const arrOfNumbers = Array.from(String(num), Number);

  if (arrOfNumbers.length < 3) {
    return true;
  }

  for (let i = 0; i <= arrOfNumbers.length - 3; i += 2) {
    if (arrOfNumbers[i] >= arrOfNumbers[i + 2]) {
      return false;
    }
  }

  return true;
}

const main = async () => {
  console.log("Vechile Fancy Number");
  let startRange = await input("Enter start range numbers : ");
  let endRange = await input("Enter end range numbers : ");
  startRange = parseInt(startRange);
  endRange = parseInt(endRange);

  if (isNaN(startRange) || isNaN(endRange) || startRange < 0 || endRange < 0) {
    console.log(
      "Enter valid non-negative numbers for range for vehcile registration numbers",
    );
    return;
  }

  if (startRange > endRange) {
    console.log("Starting range is greater than end range, Please check!");
    return;
  }

  console.log("\nFancy Numbers:");

  let found = false;

  for (let i = startRange; i <= endRange; i++) {
    if (
      getSumCheckIsEqualToNum7(i) &&
      checkIfOddDigitsAreSame(i) &&
      checkIfNumbersAreInUpFace(i)
    ) {
      console.log(i);
      found = true;
    }
  }

  if (!found) {
    console.log("No fancy numbers found in the given range.");
  }

  closeInput();
};

main();
