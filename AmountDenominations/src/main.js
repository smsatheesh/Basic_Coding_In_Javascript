const { getUserInput: input, closeInput: close } = require("./readLine");

var rs1k, rs500, rs100, rs50, rs20, rs10, rs5, rs2, rs1;

function printDenomination() {
  let hasDenominations = false;

  console.log("\nDenomination Breakdown:");
  console.log("------------------------");

  if (rs1k > 0) {
    console.log(`1000: ${rs1k} x 1000 = ${rs1k * 1000}`);
    hasDenominations = true;
  }
  if (rs500 > 0) {
    console.log(`500:  ${rs500} x 500  = ${rs500 * 500}`);
    hasDenominations = true;
  }
  if (rs100 > 0) {
    console.log(`100:  ${rs100} x 100  = ${rs100 * 100}`);
    hasDenominations = true;
  }
  if (rs50 > 0) {
    console.log(`50:   ${rs50} x 50    = ${rs50 * 50}`);
    hasDenominations = true;
  }
  if (rs20 > 0) {
    console.log(`20:   ${rs20} x 20    = ${rs20 * 20}`);
    hasDenominations = true;
  }
  if (rs10 > 0) {
    console.log(`10:   ${rs10} x 10    = ${rs10 * 10}`);
    hasDenominations = true;
  }
  if (rs5 > 0) {
    console.log(`5:    ${rs5} x 5      = ${rs5 * 5}`);
    hasDenominations = true;
  }
  if (rs2 > 0) {
    console.log(`2:    ${rs2} x 2      = ${rs2 * 2}`);
    hasDenominations = true;
  }
  if (rs1 > 0) {
    console.log(`1:    ${rs1} x 1      = ${rs1 * 1}`);
    hasDenominations = true;
  }

  if (!hasDenominations) {
    console.log("No denominations (amount is 0)");
  }

  console.log("------------------------");
  console.log(
    `TOTAL: ${rs1k * 1000 + rs500 * 500 + rs100 * 100 + rs50 * 50 + rs20 * 20 + rs10 * 10 + rs5 * 5 + rs2 * 2 + rs1}`,
  );
  console.log("------------------------\n");
}

function checkDenomination(amount) {
  // Initialize all denomination counters
  rs1k = rs500 = rs100 = rs50 = rs20 = rs10 = rs5 = rs2 = rs1 = 0;

  if (amount >= 1000) {
    rs1k = Math.floor(amount / 1000);
    amount %= 1000;
  }
  if (amount >= 500) {
    rs500 = Math.floor(amount / 500);
    amount %= 500;
  }
  if (amount >= 100) {
    rs100 = Math.floor(amount / 100);
    amount %= 100;
  }
  if (amount >= 50) {
    rs50 = Math.floor(amount / 50);
    amount %= 50;
  }
  if (amount >= 20) {
    rs20 = Math.floor(amount / 20);
    amount %= 20;
  }
  if (amount >= 10) {
    rs10 = Math.floor(amount / 10);
    amount %= 10;
  }
  if (amount >= 5) {
    rs5 = Math.floor(amount / 5);
    amount %= 5;
  }
  if (amount >= 2) {
    rs2 = Math.floor(amount / 2);
    amount %= 2;
  }
  if (amount >= 1) {
    rs1 = Math.floor(amount / 1);
    amount %= 1;
  }
}

const main = async () => {
  const amountToBeDenominated = await input("Enter amount: ");
  close();

  const amount = parseInt(amountToBeDenominated, 10);
  if (isNaN(amount) || amount < 0) {
    console.log("Please enter a valid non-negative number.");
    return;
  }

  checkDenomination(parseInt(amountToBeDenominated));
  printDenomination();
};

main();
