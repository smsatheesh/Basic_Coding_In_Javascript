# Number Palindrome Checker

This project demonstrates how to check if a given number is a palindrome in JavaScript.

## Files

- `src/main.js` - Contains the implementation
- `src/readLine.js` - Utility for reading user input (assumed to be provided)

## Functions

### `checkIfPalindrome(number)`
Checks if the given number is a palindrome and prints the result.

### `main()`
The main function that runs the program:
- Asks for a number from the user.
- Validates the input to ensure it is a non-negative integer.
- Calls `checkIfPalindrome` to check and display whether the number is a palindrome or not.

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
Enter number to check if it's Palindrome : 121
```

Output:
```
Palindrom of Number
Entered number 121 is a palindrome
```

Another example:
```
Enter number to check if it's Palindrome : 123
```

Output:
```
Palindrom of Number
Entered number 123 is not a palindrome
```

## Requirements

- Node.js

## License

This project is open-source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)