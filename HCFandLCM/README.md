# HCF and LCM Calculator

This project demonstrates how to calculate the Highest Common Factor (HCF) and Least Common Multiple (LCM) of two numbers in JavaScript.

## Files

- `src/main.js` - Contains the implementation
- `src/readline.js` - Utility for reading user input (assumed to be provided)

## Functions

### `hcfOfNumbers(num1, num2)`
Returns the HCF of two numbers using a loop that checks divisibility from 2 up to the larger number.

### `main()`
The main function that runs the program:
- Asks for two non-negative integers.
- Validates input to ensure they are numbers and non-negative.
- Computes HCF using `hcfOfNumbers`.
- Computes LCM using the formula `(num1 * num2) / HCF`.
- Displays the results.

## Usage

Run the script with Node.js:

```bash
npm install readline
node src/main.js
```

Follow the prompts to enter two numbers. The program will display the HCF and LCM.

## Example

Input:
```
Enter a non-negative integer (number 1) : 12
Enter a non-negative integer (number 2) : 18
```

Output:
```
HCF and LCM of numbers
HCF of numbers 12 and 18 is : 6
LCM of numbers 12 and 18 is : 36
```

## Requirements

- Node.js

## License

This project is open-source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)