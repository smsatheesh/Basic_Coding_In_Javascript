# Swap Digit Of First And Last In Number

This project demonstrates how to swap the first and last digits of a number in JavaScript.

## Files

- `src/main.js` - Contains the implementation
- `src/readLine.js` - Utility for reading user input (assumed to be provided)

## Functions

### `countOfDigits(num)`
Counts the number of digits in a given number using a loop.

### `swapDigitsUsingMath(num)`
Swaps the first and last digits of a number using mathematical operations:
- Calculates the number of digits
- Extracts the first and last digits
- Extracts the middle digits (if any)
- Reconstructs the number with first and last digits swapped
- Displays the original number, first digit, last digit, middle digits, and the swapped result

### `main()`
The main function that runs the program:
- Asks for a number from the user.
- Validates the input to ensure it is a non-negative integer.
- Calls `swapDigitsUsingMath` to perform the digit swap and display results.

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
Enter number for swapping digits : 1234
```

Output:
```
Swapping Digits
Original Number : 1234
First Digit     : 1
Last Digit      : 4
Middle Digits   : 23
Swapped Number  : 4231
```

Another example (single digit):
```
Enter number for swapping digits : 5
```

Output:
```
Swapping Digits
The entered number has only one digit: 5
```

## Requirements

- Node.js

## License

This project is open-source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)