# Natural Numbers Printer

This project demonstrates how to print natural numbers in a given range (ascending or descending) in JavaScript.

## Files

- `src/main.js` - Contains the implementation
- `src/readLine.js` - Utility for reading user input (assumed to be provided)

## Functions

### `printNaturalNumbers(start, end)`
Prints natural numbers from start to end inclusive. If start is less than end, prints in ascending order; otherwise, in descending order.

### `main()`
The main function that runs the program:
- Asks for a start and end range from the user.
- Validates the input to ensure they are non-negative integers.
- Calls `printNaturalNumbers` to print the numbers in the specified range.

## Usage

Run the script with Node.js:

```bash
npm install readline
node src/main.js
```

Follow the prompt to enter the start and end ranges.

## Example

Input:
```
Enter start range : 1
Enter end range : 5
```

Output:
```
Print Natural Numbers
1
2
3
4
5
```

Another example (descending):
```
Enter start range : 5
Enter end range : 1
```

Output:
```
Print Natural Numbers
5
4
3
2
1
```

## Requirements

- Node.js

## License

This project is open-source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)