# Vowel Or Constant

This project demonstrates how to check if an entered character is a vowel or a constant in JavaScript.

## Files

- `src/main.js` - Contains the implementation
- `src/readLine.js` - Utility for reading user input (assumed to be provided)

## Functions

### `main()`
The main function that runs the program:
- Asks for a character from the user.
- Validates the input to ensure it is a single alphabetic character.
- Converts the character to uppercase and checks if it is in the vowel list (A, E, I, O, U).
- Displays whether the entered character is a vowel or a constant.

## Usage

Run the script with Node.js:

```bash
npm install readline
node src/main.js
```

Follow the prompt to enter a character.

## Example

Input:
```
Enter character to check : a
```

Output:
```
Entered character 'a' is vowel
```

Another example (constant):
```
Enter character to check : b
```

Output:
```
Entered character 'b' is constant
```

## Requirements

- Node.js

## License

This project is open-source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)