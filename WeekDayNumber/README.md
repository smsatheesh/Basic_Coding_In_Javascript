# Week Day Number

This project demonstrates how to print the week day corresponding to a number (1-7) in JavaScript with colored output.

## Files

- `src/main.js` - Contains the implementation
- `src/readLine.js` - Utility for reading user input (assumed to be provided)

## Functions

### `main()`
The main function that runs the program:
- Asks for a number from the user (1-7).
- Validates the input to ensure it is an integer between 1 and 7.
- Maps the number to a week day (Sunday to Saturday).
- Displays the entered number and the corresponding week day with color coding (weekends in magenta, weekdays in green).

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
Enter number to print week day (1-7): 3
```

Output:
```
Week Day
Entered number is '3' and respective week day is "Tuesday"
```
(Note: Actual output includes colors; weekends (1 and 7) appear in magenta, weekdays in green.)

## Requirements

- Node.js

## License

This project is open-source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)