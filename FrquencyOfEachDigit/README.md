# Digit Frequency Counter

This project demonstrates how to calculate the frequency of each digit in a given non-negative integer in JavaScript.

## Files

- `src/main.js` - Contains the implementation
- `src/readline.js` - Utility for reading user input (assumed to be provided)

## Functions

### `printOutput(number, countMap)`
Prints the frequency of each digit (0-9) in the given number.

### `calculateFrequencyOfDigits(number)`
Calculates the frequency of each digit in the number using a map and then calls `printOutput` to display the result.

### `main()`
The main function that prompts the user for a non-negative integer, validates the input, and calls `calculateFrequencyOfDigits`.

## Usage

Run the script with Node.js:

```bash
npm install readline
node src/main.js
```

You will be prompted to enter a non-negative integer. The program will then output the frequency of each digit present in the number.

## Example

Input: `112233`

Output:
```
Program to calculate frequency of digits in a number.
Enter a non-negative input: 112233
Digit frequency in 112233:
  Digit 1 appears 2 times
  Digit 2 appears 2 times
  Digit 3 appears 2 times
```

(Note: The actual output may vary slightly due to the way `console.log` is used.)

## Requirements

- Node.js

## License

This project is open-source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)