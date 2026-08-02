const { getUserInput: input, closeInput: close } = require("./readLine");

let determinant, a, b, c;
let root1 = 0.0,
  root2 = 0.0;
let real, imaginary;

function calculate() {
  if (determinant > 0) {
    root1 = (-b + Math.sqrt(determinant)) / (2 * a);
    root2 = (-b - Math.sqrt(determinant)) / (2 * a);
  } else if (determinant == 0) {
    root1 = root2 = -b / (2 * a);
  } else {
    real = -b / (2 * a);
    imaginary = Math.sqrt(-determinant) / (2 * a);
  }
}

function displayResults() {
  if (determinant > 0) {
    console.log(
      `Square roots of given equation is : ${root1} and ${root2} respectively`,
    );
  } else if (determinant == 0) {
    console.log(`Roots are equal, Root 1 = Root 2 = ${root1} `);
  } else {
    console.log(`Root 1 = ${real} + ${imaginary}i`);
    console.log(`Root 2 = ${real} - ${imaginary}i`);
  }
}

const main = async () => {
  console.log("Quadratic Equation Solver");
  console.log("Enter coefficients for ax^2 + bx + c = 0");
  a = parseFloat(await input("Enter a: "));
  b = parseFloat(await input("Enter b: "));
  c = parseFloat(await input("Enter c: "));
  closeInput();

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Please enter valid numbers for all coefficients.");
    return;
  }

  if (a === 0) {
    console.log("Coefficient 'a' cannot be zero for a quadratic equation.");
    return;
  }

  determinant = b * b - 4 * a * c;
  calculate();
  displayResults();
};

main();
