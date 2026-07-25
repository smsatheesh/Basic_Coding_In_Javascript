# Positive or Negative Number Checker

This project demonstrates how to check if a number is positive, negative, or zero using conditional statements and ternary operator in JavaScript.

## Files

- `src/main.js` - Contains the implementation
- `src/readLine.js` - Utility for reading user input (assumed to be provided)

## Functions

### `checkIfNumberStateUsingConditional(number)`
Checks if the number is negative, positive, or zero using if-else-if conditional statements and prints the result.

### `checkIfNumberStateUsingTerminal(number)`
Checks if the number is zero, positive, or negative using a ternary operator and prints the result.

### `main()`
The main function that runs the program:
- Asks for a number from the user.
- Validates the input to ensure it is a non-negative integer.
- Calls both checking functions to demonstrate the two approaches.

## Usage

Run the script with Node.js:

```bash
npm install readline
node src/main.js
```

Follow the prompt to enter a number.

## Example

Input:
```
Enter number for the checking state : 7
```

Output:
```
Number state check using conditional: 
Number 7 is positive
Number state check using ternary: 
The number is 7 is positive
```

Another example (zero):
```
Enter number for the checking state : 0
```

Output:
```
Number state check using conditional: 
The number is zero (0)
Number state check using ternary: 
The number is zero (0)
```

Note: The program currently accepts only non-negative integers due to validation. Negative numbers will trigger an error message.

## Requirements

- Node.js

## License

This project is open-source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)