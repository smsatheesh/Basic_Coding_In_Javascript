const { getUserInput, closeInput } = require("./readLine");

// ANSI color codes
const Reset = "\x1b[0m";
const Bright = "\x1b[1m";
const FgRed = "\x1b[31m";
const FgGreen = "\x1b[32m";
const FgYellow = "\x1b[33m";
const FgMagenta = "\x1b[35m";

const main = async () => {
  console.log(`${Bright}Week Day${Reset}`);
  const userInput = await getUserInput(
    `${Bright}${FgYellow}\nEnter number to print week day (1-7): ${Reset}`,
  );
  closeInput();

  if (
    isNaN(userInput) ||
    !Number.isInteger(Number(userInput)) ||
    userInput < 1 ||
    userInput > 7
  ) {
    console.log(
      `${Bright}${FgRed}Please enter an integer between 0 and 6${Reset}`,
    );
    return;
  }

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = weekDays[userInput - 1];
  const dayColor = userInput === 1 || userInput === 7 ? FgMagenta : FgGreen;

  console.log(
    `${Bright}${FgGreen}Entered number is${Reset} '${Bright}${FgYellow}${userInput}${Reset}' and respective week day is "${Bright}${dayColor}${day}${Reset}"`,
  );
};

main();
