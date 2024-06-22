// ********************  FUNCTIONS ASSIGNMENTS  *************************

// Assignment 1: Add Two Numbers
function addNumbers(a: number, b: number): number {
    return a + b;
}
console.log(addNumbers(2,5));

// Assignment 2: Greet a User
function greetUser(username: string): string {
   return `Welcome ${username}`
}
console.log(greetUser("Arsalan"));

// Assignment 3: Check Even or Odd
function isEven(num: number): boolean {
    return num % 2 == 0
}
console.log(isEven(7));

// Assignment 4: Find the Maximum Number
function findMax(numbers: number[]): number {
    return Math.max(...numbers)
}
console.log(findMax([1,2,3,4,58,6,7,8,9]));

// Assignment 5: Reverse a String
function reverseString(str: string): string {
    return str.split("").reverse().join("")
}
console.log(reverseString("Arsalan"));

// Assignment 6: Calculate Factorial
// Write a function factorial that takes a number as an argument and returns its factorial.

function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
console.log(factorial(5));  // Output: 120
console.log(factorial(0));  // Output: 1
console.log(factorial(10)); // Output: 3628800

// Assignment 7: Check Prime Number
function isPrime(num: number): boolean {
    if (num <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }

    // A prime number is only divisible by 1 and itself,
    // so we check if the number has any divisors other than 1 and itself.
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Found a divisor, so the number is not prime
        }
    }

    return true; // No divisors found, so the number is prime
}

// Examples to test the function
console.log(isPrime(2));  // true
console.log(isPrime(3));  // true
console.log(isPrime(4));  // false
console.log(isPrime(5));  // true
console.log(isPrime(10)); // false
console.log(isPrime(17)); // true
console.log(isPrime(1));  // false
console.log(isPrime(-3)); // false

// Assignment 8: Find the Length of a String
function stringLength(str: string): number {
    return str.length
}
console.log(stringLength("Arsalan"));

// Assignment 9: Convert Celsius to Fahrenheit  (F = (9/5)C + 32.)
function celsiusToFahrenheit(celsius: number): number {
    return (9/5)*celsius + 32
}
console.log(celsiusToFahrenheit(0));

// Assignment 10: Calculate the Power of a Number
function power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
}
console.log(power(5,3));









                                                                                                                    
                                                                                                                           

