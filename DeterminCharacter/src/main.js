const { getUserInput: input, closeInput: close } = require("./readLine");

function determineCharacter(character) {
  if (
    (character >= "A" && character <= "Z") ||
    (character >= "a" && character <= "z")
  ) {
    console.log("Entered character is an alphabet.");
    return;
  } else if (character >= "0" && character <= "9") {
    console.log("Entered character is a number");
    return;
  } else {
    console.log("Entered character is a special character");
    return;
  }
}

const main = async () => {
  console.log("Determine Entered Character");
  const character = await input("Enter a valid character : ");
  close();

  if (character.length > 1) {
    console.log("Please enter a character for type check");
    return;
  }

  determineCharacter(character);
};

main();
