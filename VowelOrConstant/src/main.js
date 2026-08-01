const { getUserInput, closeInput } = require("./readLine");

const main = async () => {
  console.log("Check If Entered Character is Vowel or Constant");
  const userInput = await getUserInput("\nEnter character to check : ");
  closeInput();

  if (userInput.length !== 1 || !/[a-zA-Z]/.test(userInput)) {
    console.log("Please enter a single alphabetic character.");
    return;
  }

  const vowelList = ["A", "E", "I", "O", "U"];
  if (vowelList.indexOf(userInput.toUpperCase()) !== -1) {
    console.log(`Entered character '${userInput}' is vowel`);
  } else {
    console.log(`Entered character '${userInput}' is constant`);
  }
};

main();
