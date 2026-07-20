# Factors and State of a Number

Factors and State of a Number is a simple JavaScript program (implemented in src/main.js) that finds all factors of a given non-negative integer and determines whether the number is prime or composite.

## Features

- Takes user input for a non-negative integer
- Validates that the input is a valid non-negative integer
- Calculates all factors of the input number
- Determines if the number is prime, composite, or neither (for 0 and 1)
- Displays the factors and the number's state (prime/composite/neither)

## How to Run

1. Ensure you have Node.js installed.
2. Run the script:

```bash
npm install readline
node src/main.js
```

3. Enter a non-negative integer when prompted.

## Example

```
Factors of a number and state
Enter a non-negative integer: 6
Enter number is: 6 and its factors are: 1, 2, 3, 6
It is a composite number.
```

```
Factors of a number and state
Enter a non-negative integer: 7
Enter number is: 7 and its factors are: 1, 7
It is a prime number.
```

```
Factors of a number and state
Enter a non-negative integer: 0
Enter number is: 0, is neither prime nor composite
```

```
Factors of a number and state
Enter a non-negative integer: 1
Enter number is: 1 and has no factors
It is a prime number.
```

## Requirements

- Node.js (v12 or higher)

## License

This project is open source and available under the MIT License.

Contributed by [Sm Satheesh](https://github.com/smsatheesh)