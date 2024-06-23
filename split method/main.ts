// Here’s an in-depth look at the .split method in TypeScript, which provides a comprehensive guide to its usage, parameters, behavior, and edge cases.

// Overview
// The .split method in TypeScript (inherited from JavaScript) splits a string into an array of substrings based on a specified separator. The resulting substrings are stored in an array, and the original string is not modified.


// You can use any seperator you like such as space, &, c and so on
let str = "My name is Arsalan Khan"
let splitString = str.split(" ") // spliting based on space .split(" ")
console.log(splitString);

let str1 = "My&name&is&Arsalan&Khan"
let splitString1 = str1.split("&") // spliting based on & .split(&)
console.log(splitString1[2]);

let str2 = "MycnameciscArsalancKhan"
let splitString2 = str2.split("c") // spliting based on & .split(&)
console.log(splitString2);

let str3 = "My name is Arsalan Khan"
let splitString3 = str3.split("") // spliting based on noting .split(&)
console.log(splitString3); // In this example space will be a seperate element like ["M", "y", " ", "n" ....... "n"] 

// Basic Usage with a String Separator:
const str4 = "apple,banana,cherry";
const result = str4.split(",");
console.log(result); // Output: ["apple", "banana", "cherry"]

// Using a Regular Expression Separator:
const str5 = "apple,banana;cherry";
const result2 = str5.split(/[,;]/);
console.log(result2); // Output: ["apple", "banana", "cherry"]

// Using a Limit:
const str6 = "apple,banana,cherry";
const result3 = str6.split(",", 2);
console.log(result3); // Output: ["apple", "banana"]

// No Separator Provided:
const str7 = "hello world";
const result4 = str7.split();
console.log(result4); // Output: ["hello world"]

// Separator Not Found: If the separator is not found in the string, the entire string is returned as a single-element array.

const str8 = "hello world";
const result5 = str8.split(",");
console.log(result5); // Output: ["hello world"]

// Empty String as Separator: When an empty string is used as the separator, the method splits the string into individual characters.

const str9 = "";
const result6 = str9.split("");
console.log(result6); // Output: []

// Regular Expression with Capturing Groups: If the separator is a regular expression that contains capturing groups, the results of the capturing groups are included in the output array.

const str10 = "one:two:three";
const result7 = str10.split(/(:)/);
console.log(result7); // Output: ["one", ":", "two", ":", "three"]

// Splitting a URL Query String:
const queryString = "param1=value1&param2=value2&param3=value3";
const queryParams = queryString.split("&").map(param => param.split("="));
console.log(queryParams); 
// Output: [["param1", "value1"], ["param2", "value2"], ["param3", "value3"]]

// Splitting with a Complex Regular Expression:
const text = "one1two2three3four";
const parts = text.split(/\d/); // Splits on any digit
console.log(parts); // Output: ["one", "two", "three", "four"]



