const { getUserInput: input, closeInput: close } = require("./readLine");

function checkDaysInMonth(monthNumber) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  switch (monthNumber) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log(
        `Entered month number is ${monthNumber} and respective month is ${months[monthNumber - 1]} and has days of ${31}`,
      );
      break;

    case 2:
      console.log(
        `Entered month number is ${monthNumber} and respective month is ${months[monthNumber - 1]} and has days of 28/29 based on leap or non-leap year`,
      );
      break;
    default:
      console.log(
        `Entered month is ${monthNumber} and respective month is ${months[monthNumber - 1]} and has days of 30`,
      );
      break;
  }
}

const main = async () => {
  console.log("Print number of days in month");
  let monthNumber = await input("Enter a month number : ");
  monthNumber = parseInt(monthNumber);
  close();

  if (isNaN(monthNumber) || monthNumber <= 0 || monthNumber >= 13) {
    console.log(
      "Please enter a valid non-negative number respective to month number",
    );
    return;
  }

  checkDaysInMonth(monthNumber);
};

main();
