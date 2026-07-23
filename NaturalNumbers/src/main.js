const { getUserInput: input, closeInput: close } = require("./readLine");

function printNaturalNumbers(start, end) {
  if (start < end) {
    for (let i = start; i <= end; i++) {
      console.log(i);
    }
  } else {
    for (let i = start; i >= end; i--) {
      console.log(i);
    }
  }
}

const main = async () => {
  console.log("Print Natural Numbers");
  let start = await input("Enter start range : ");
  let end = await input("Enter end range : ");
  start = parseInt(start);
  end = parseInt(end);
  close();

  if (isNaN(start) || isNaN(end) || start < 0 || end < 0) {
    console.log("Please enter a non-negative input ranges");
    return;
  }

  printNaturalNumbers(start, end);
};

main();
