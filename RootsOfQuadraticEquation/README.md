# Roots Of Quadratic Equation

This project demonstrates how to find the roots of a quadratic equation (ax^2 + bx + c = 0) in JavaScript.

## Files

- `src/main.js` - Contains the implementation
- `src/readLine.js` - Utility for reading user input (assumed to be provided)

## Functions

### `calculate()`
Calculates the determinant (b^2 - 4ac) and determines the roots based on its value:
- If determinant > 0: two distinct real roots
- If determinant == 0: one real root (repeated)
- If determinant < 0: two complex roots
Stores the results in variables for display.

### `displayResults()`
Displays the roots in a formatted manner based on the determinant value:
- For real roots: shows both roots
- For equal roots: shows the single root value
- For complex roots: shows the real and imaginary parts

### `main()`
The main function that runs the program:
- Asks for coefficients a, b, and c from the user.
- Validates the input to ensure they are valid numbers and that 'a' is not zero.
- Computes the determinant, calls `calculate()` to compute roots, and then `displayResults()` to show them.

## Usage

Run the script with Node.js:

```bash
npm install readline
node src/main.js
```

Follow the prompt to enter the coefficients a, b, and c.

## Example

Input:
```
Enter coefficients for ax^2 + bx + c = 0
Enter a: 1
Enter b: -3
Enter c: 2
```

Output:
```
Quadratic Equation Solver
Enter coefficients for ax^2 + bx + c = 0
Square roots of given equation is : 2 and 1 respectively
```

Another example (equal roots):
```
Enter coefficients for ax^2 + bx + c = 0
Enter a: 1
Enter b: 2
Enter c: 1
```

Output:
```
Quadratic Equation Solver
Enter coefficients for ax^2 + bx + c = 0
Roots are equal, Root 1 = Root 2 = -1 
```

Another example (complex roots):
```
Enter coefficients for ax^2 + bx + c = 0
Enter a: 1
Enter b: 2
Enter c: 5
```

Output:
```
Quadratic Equation Solver
Enter coefficients for ax^2 + bx + c = 0
Root 1 = -1 + 2i
Root 2 = -1 - 2i
```

## Requirements

- Node.js

## License

This project is open-source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)