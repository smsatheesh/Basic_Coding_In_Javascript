# Prime Number Checker

This project demonstrates how to check if an entered number is a prime number in JavaScript.

## Files

- `src/main.js` - Contains the implementation
- `src/readLine.js` - Utility for reading user input (assumed to be provided)

## Functions

### `checkPrime(num)`
Checks if a number is prime by testing divisibility up to its square root.

### `main()`
The main function that runs the program:
- Asks for a number from the user.
- Validates the input to ensure it is a valid integer.
- Uses `checkPrime` to determine primality.
- Displays whether the entered number is prime or not.

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
Enter a number: 7
```

Output:
```
7 is a prime number.
```

Another example (non-prime):
```
Enter a number: 10
```

Output:
```
10 is not a prime number.
```

## Requirements

- Node.js

## License

This project is open-source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)