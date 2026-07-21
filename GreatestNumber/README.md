# Greatest Number Finder

This project demonstrates two approaches to find the greatest number among a set of numbers in JavaScript:
1. Using the built-in `Math.max` function
2. Using a conditional loop (iterative comparison)

## Files

- `src/main.js` - Contains the implementation
- `src/readLine.js` - Utility for reading user input (assumed to be provided)

## Functions

### `getGreatestNumberUsingBuiltIn(...numbers)`
Returns the greatest number using the built-in `Math.max` function.

### `getGreatestNumberUsingConditional(...numbers)`
Returns the greatest number by iterating through the numbers and keeping track of the maximum.

### `getValidNumber(prompt)`
Prompts the user for a number and validates that the input is a valid finite number.

### `getValidCount()`
Prompts the user for how many numbers they want to compare (minimum 2) and validates the input.

### `main()`
The main function that runs the program loop:
- Asks for the number of values to compare.
- Reads each number from the user.
- Checks if all numbers are equal.
- If not, computes the greatest number using both methods and displays the results.
- Asks if the user wants to continue.

## Usage

Run the script with Node.js:

```bash
node src/main.js
```

Follow the prompts to enter the number of values and then each value. The program will display the greatest number using both methods.

## Example

Input:
```
How many numbers would you like to compare? (minimum 2): 3
Enter 3 numbers:
Number 1: 5
Number 2: 2
Number 3: 9
Would you like to compare another set of numbers? (y/n): n
```

Output:
```
🔢 GREATEST NUMBER FINDER 🔢
Find the maximum number from a set of numbers!

How many numbers would you like to compare? (minimum 2): 3

Enter 3 numbers:
Number 1: 5
Number 2: 2
Number 3: 9

All 3 numbers are not equal.
The greatest number using built-in method is : 9
The greatest number using conditional method is : 9

Would you like to compare another set of numbers? (y/n): n

Thank you for using the Greatest Number Finder! Bye! 👋
```

## Requirements

- Node.js

## License

This project is open-source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)