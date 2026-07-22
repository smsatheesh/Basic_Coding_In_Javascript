# Month and Days Calculator

This project demonstrates how to determine the number of days in a given month in JavaScript.

## Files

- `src/main.js` - Contains the implementation
- `src/readline.js` - Utility for reading user input (assumed to be provided)

## Functions

### `checkDaysInMonth(monthNumber)`
Takes a month number (1-12) and prints the corresponding month name and the number of days in that month.
Note: For February, it notes that the days can be 28 or 29 depending on leap year.

### `main()`
The main function that runs the program:
- Asks for a month number (1-12).
- Validates the input to ensure it is an integer between 1 and 12.
- Calls `checkDaysInMonth` to display the month name and number of days.

## Usage

Run the script with Node.js:

```bash
npm install readline
node src/main.js
```

Follow the prompt to enter a month number.

## Example

Input:
```
Enter a month number : 2
```

Output:
```
Print number of days in month
Entered month number is 2 and respective month is February and has days of 28/29 based on leap or non-leap year
```

Another example:
```
Enter a month number : 5
```

Output:
```
Print number of days in month
Entered month number is 5 and respective month is May and has days of 31
```

## Requirements

- Node.js

## License

This project is open-source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)