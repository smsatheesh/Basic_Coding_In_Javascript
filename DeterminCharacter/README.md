# DeterminCharacter

This project demonstrates how to determine the type of a character (alphabet, number, or special character) in JavaScript.

## Files

- `src/main.js` - Contains the implementation
- `src/readLine.js` - Utility for reading user input (assumed to be provided)

## Functions

### `determineCharacter(character)`
Determines whether the given character is an alphabet, a number, or a special character and prints the result.

### `main()`
The main function that runs the program:
- Asks for a character from the user.
- Validates that the input is exactly one character.
- Calls `determineCharacter` to check and display the type of the character.

## Usage

Run the script with Node.js:

```bash
npm install readLine
node src/main.js
```

Follow the prompt to enter a character. The program will display whether the character is an alphabet, a number, or a special character.

## Example

Input:
```
Enter a valid character : a
```

Output:
```
Determine Entered Character
Entered character is an alphabet.
```

Another example:
Input:
```
Enter a valid character : 5
```

Output:
```
Determine Entered Character
Entered character is a number
```

And for a special character:
Input:
```
Enter a valid character : #
```

Output:
```
Determine Entered Character
Entered character is a special character
```

## Requirements

- Node.js

## License

This project is open-source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)