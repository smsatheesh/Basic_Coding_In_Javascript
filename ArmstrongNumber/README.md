# Armstrong Number Checker

A simple JavaScript program that checks if a given number is an Armstrong number (also known as narcissistic number).

## Features
- Takes user input for a number
- Checks if the number is an Armstrong number
- Prints the result

## How to Run
1. Ensure you have Node.js installed
2. Run the script:
```bash
npm install readline
node src/main.js
```
3. Enter a number when prompted

### Armstrong Number Check
An Armstrong number (also known as narcissistic number) is a number that is the sum of its own digits each raised to the power of the number of digits.

Example: 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153.

The function `isArmstrongNumber` works as follows:
1. Determine the number of digits (power)
2. For each digit, raise it to the power and add to a sum
3. Compare the sum to the original number

## Example
```
Enter a number to check if it is an Armstrong number: 153
153 is an Armstrong number.
```

## Requirements
- Node.js (v12 or higher)

## License
This project is open source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)
