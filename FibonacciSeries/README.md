# Fibonacci Series

This project demonstrates two approaches to generate the Fibonacci series in JavaScript:
1. Iterative approach
2. Recursive approach

## Files

- `src/main.js` - Contains the implementation
- `src/readLine.js` - Utility for reading user input (assumed to be provided)

## Functions

### `printFibonacciUsingIterative(number)`
Prints the Fibonacci series up to `number` terms using an iterative loop.

### `printFibonacciUsingRecursion(count)`
Prints the Fibonacci series up to `count` terms using a recursive helper function.

## Usage

Run the script with Node.js:

```bash
node src/main.js
```

You will be prompted to enter a non-negative integer. The program will then output the Fibonacci series using both methods.

## Example

Input: `5`

Output:
```
Fibonacci SeriesEnter a non-negative integer: 0 1 1 2 3 
0 1 1 2 3 
```

(Note: The actual output may vary due to the way `process.stdout.write` and `console.log` are used.)

## Requirements

- Node.js

## License

This project is open-source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)
