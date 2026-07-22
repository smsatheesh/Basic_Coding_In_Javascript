# Multiplication Table Generator

This project demonstrates how to generate a multiplication table for a given number up to a specified range in JavaScript.

## Files

- `src/main.js` - Contains the implementation
- `src/readLine.js` - Utility for reading user input (assumed to be provided)

## Functions

### `printTables(tableNumber, range)`
Prints the multiplication table for the given tableNumber from 0 to range.

### `main()`
The main function that runs the program:
- Asks for a table number and a range to print.
- Validates that both inputs are positive numbers.
- Calls `printTables` to display the multiplication table.

## Usage

Run the script with Node.js:

```bash
npm install readline
node src/main.js
```

Follow the prompts to enter the table number and the range.

## Example

Input:
```
Enter table number to compute : 5
Enter range to print: 10
```

Output:
```
0 * 5 = 0
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
```

## Requirements

- Node.js

## License

This project is open-source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)