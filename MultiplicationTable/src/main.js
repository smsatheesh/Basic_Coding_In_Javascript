const { getUserInput: input, closeInput: close } = require("./readLine");

function printTables(tableNumber, range) {
  for (let i = 0; i <= range; i++) {
    console.log(`${i} * ${tableNumber} = ${i * tableNumber}`);
  }
}

const main = async () => {
  console.log("Mutiplication of Table");
  let tableNumber = await input("Enter table number to compute : ");
  let rangeOfTable = await input("Enter range to print: ");
  close();

  tableNumber = parseInt(tableNumber);
  rangeOfTable = parseInt(rangeOfTable);

  if (isNaN(tableNumber) || tableNumber <= 0) {
    console.log("Please enter a valid non-negative table number");
    return;
  }

  if (isNaN(rangeOfTable) || rangeOfTable <= 0) {
    console.log("Please enter a valid non-negative range number");
    return;
  }

  printTables(tableNumber, rangeOfTable);
};

main();
