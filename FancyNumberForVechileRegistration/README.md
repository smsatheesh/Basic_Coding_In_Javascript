# Fancy Number For Vehicle Registration

This project demonstrates how to find fancy numbers in a given range based on specific criteria.

## Files

- `src/index.js` - Contains the implementation
- `src/readLine.js` - Utility for reading user input (assumed to be provided)

## Functions

### `getCountOfDigits(num)`
Counts the number of digits in a given number using a loop.

### `getSumCheckIsEqualToNum7(num)`
Recursively calculates the sum of digits until a single digit is obtained and checks if it equals 7.

### `checkIfOddDigitsAreSame(num)`
Checks if all digits at odd positions (2nd, 4th, 6th, ...) are the same.

### `checkIfNumbersAreInUpFace(num)`
Checks if digits at even positions (1st, 3rd, 5th, ...) are in strictly increasing order when compared with the digit two places ahead.

### `main()`
The main function that runs the program:
- Asks for start and end range from the user.
- Validates the input to ensure they are non-negative integers and start ≤ end.
- Iterates through the range and prints numbers that satisfy all three fancy number conditions.
- Displays a message if no fancy numbers are found.

## Usage

Run the script with Node.js:

```bash
npm install readline
node src/index.js
```

Follow the prompts to enter the start and end range.

## Example

Input:
```
Enter start range numbers : 1
Enter end range numbers : 1000
```

Output (example):
```
Fancy Numbers:
108
117
...
```

(You can compute actual examples.)

Additional example for 4-digit numbers (range 1000 to 10000):

Input:
```
Enter start range numbers : 1000
Enter end range numbers : 10000
```

Output (example):
```
Fancy Numbers:
1008
1017
...
```

You can also try other ranges to discover more fancy numbers.

## Requirements

- Node.js

## License

This project is open-source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)