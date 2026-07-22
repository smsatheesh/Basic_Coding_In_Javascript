# Leap Year Checker

This project demonstrates how to check if a given year is a leap year or not in JavaScript.

## Files

- `src/main.js` - Contains the implementation
- `src/readLine.js` - Utility for reading user input (assumed to be provided)

## Functions

### `checkIfLeapYear(year)`
Checks if the given year is a leap year and prints the result.

### `main()`
The main function that runs the program:
- Asks for a year from the user.
- Validates the input to ensure it is a non-negative integer.
- Calls `checkIfLeapYear` to check and display whether the year is a leap year or not.

## Usage

Run the script with Node.js:

```bash
npm install readLine
node src/main.js
```

Follow the prompt to enter a year.

## Example

Input:
```
Enter a year : 2000
```

Output:
```
Check whether entered year is leap or non-leap year
Year: 2000 is a leap year
```

Another example:
```
Enter a year : 1900
```

Output:
```
Check whether entered year is leap or non-leap year
Year: 1900 is a non-leap year
```

## Requirements

- Node.js

## License

This project is open-source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)