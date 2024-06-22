// Assignment 1: Basic TypeScript Variables and Types
// 1. Create a TypeScript file.
// 2. Define variables of different types: string, number, boolean, array, tuple, enum, and any.
// 3. Write a function that takes parameters of each type and logs them to the console.
var stringType = "Arsalan";
var numberType = 7;
var booleanType = true;
var arrayType = [1, 2, 3, 4, 5];
var anyType = ["Rafay", 1, false];
var logValues = function (string, number, boolean, array, any) {
    console.log("String:", string);
    console.log("Number:", number);
    console.log("Boolean:", boolean);
    console.log("Array:", array);
    console.log("Any:", any);
};
// logValues(stringType, numberType, booleanType, arrayType, anyType);
// // Assignment 2: TypeScript Functions
// 1. Write a TypeScript function that takes two numbers and returns their sum.
// 2. Write another function that takes a string and returns its reverse.
// 3. Create a function that takes an array of numbers and returns the maximum value.
function addition(num1, num2) {
    return num1 + num2;
}
var sum = addition(18, 2);
// console.log(sum);
function rev(name) {
    return name.split('').reverse().join('');
}
// console.log(rev("Arsalan"));
function max(value) {
    return Math.max.apply(Math, value);
}
// console.log(max([1,2,3,4,5,6,7,8,9,10]));
// Assignment 3: TypeScript Interfaces
// 1. Define an interface for a Person object with properties name (string), age (number), and email (string).
// 2. Create a function that takes a Person object and logs a formatted string introducing the person.
// 3. Implement the function and call it with different Person objects.
// ONLY FUNCTIONS ASSIGNMENTS
// Assignment 1: Add Two Numbers
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(2, 5));
// Assignment 2: Greet a User
function greetUser(username) {
    return "Welcome ".concat(username);
}
console.log(greetUser("Arsalan"));
// Assignment 3: Check Even or Odd
function isEven(num) {
    return num % 2 == 0;
}
console.log(isEven(7));
// Assignment 4: Find the Maximum Number
function findMax(numbers) {
    return Math.max.apply(Math, numbers);
}
console.log(findMax([1, 2, 3, 4, 58, 6, 7, 8, 9]));
// Assignment 5: Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Arsalan"));
// Assignment 6: Calculate Factorial
// Write a function factorial that takes a number as an argument and returns its factorial.
function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
// Example usage:
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(10)); // Output: 3628800
// Assignment 7: Check Prime Number
function isPrime(num) {
    if (num <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    // A prime number is only divisible by 1 and itself,
    // so we check if the number has any divisors other than 1 and itself.
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Found a divisor, so the number is not prime
        }
    }
    return true; // No divisors found, so the number is prime
}
// Examples to test the function
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(10)); // false
console.log(isPrime(17)); // true
console.log(isPrime(1)); // false
console.log(isPrime(-3)); // false
// Assignment 8: Find the Length of a String
function stringLength(str) {
    return str.length;
}
console.log(stringLength("Arsalan"));
// Assignment 9: Convert Celsius to Fahrenheit  (F = (9/5)C + 32.)
function celsiusToFahrenheit(celsius) {
    return (9 / 5) * celsius + 32;
}
console.log(celsiusToFahrenheit(0));
// Assignment 10: Calculate the Power of a Number
function power(base, exponent) {
    return Math.pow(base, exponent);
}
console.log(power(5, 3));
