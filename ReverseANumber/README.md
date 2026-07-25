# Reverse A Number

This project demonstrates how to reverse a number in JavaScript.

## Files

- `src/main.js` - Contains the implementation
- `src/readLine.js` - Utility for reading user input (assumed to be provided)

## Functions

### `reverseNumber(num)`
Reverses the given number by extracting digits from the end and building the reversed number. Prints the original number and its reversed counterpart.

### `main()`
The main function that runs the program:
- Asks for a number from the user.
- Validates the input to ensure it is a non-negative integer.
- Calls `reverseNumber` to calculate and display the reversed number.

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
Enter number for reversing : 1234
```

Output:
```
Patterns Printing
Given number is 1234 and respective reverse number is 4321
```

Another example (with trailing zeros):
```
Enter number for reversing : 1200
```

Output:
```
Patterns Printing
Given number is 1200 and respective reverse number is 21
```

## Requirements

- Node.js

## License

This project is open-source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)