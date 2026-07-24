# Power Of A Number

This project demonstrates how to compute the power of a number (exponentiation) in JavaScript.

## Files

- `src/main.js` - Contains the implementation
- `src/readLine.js` - Utility for reading user input (assumed to be provided)

## Functions

### `computePower(number, power)`
Computes `number` raised to the power of `power` using a loop and prints the result.

### `main()`
The main function that runs the program:
- Asks for a number and a power from the user.
- Validates the input to ensure they are non-negative integers.
- Calls `computePower` to calculate and display the result.

## Usage

Run the script with Node.js:

```bash
npm install readline
node src/main.js
```

Follow the prompt to enter the number and the power.

## Example

Input:
```
Enter number for the powering : 2
Enter power for a number : 3
```

Output:
```
Number : 2 for the power value of : 3 is : 8
```

## Requirements

- Node.js

## License

This project is open-source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)