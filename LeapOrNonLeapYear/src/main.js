const { getUserInput: input, closeInput: close } = require("./readLine");

function checkIfLeapYear(year) {
  if (year % 4 === 0 && year % 100 != 0) {
    console.log(`Year: ${year} is a leap year`);
  } else if (year % 400 === 0) {
    console.log(`Year: ${year} is a leap year`);
  } else {
    console.log(`Year: ${year} is a non-leap year`);
  }
}

const main = async () => {
  console.log("Check whether entered year is leap or non-leap year");
  let year = await input("Enter a year : ");
  year = parseInt(year);
  close();

  if (isNaN(year) || year < 0) {
    console.log("Please enter a valid non-negative year for computation");
    return;
  }

  checkIfLeapYear(year);
};

main();
