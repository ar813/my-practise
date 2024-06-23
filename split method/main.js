// Here’s an in-depth look at the .split method in TypeScript, which provides a comprehensive guide to its usage, parameters, behavior, and edge cases.
// Overview
// The .split method in TypeScript (inherited from JavaScript) splits a string into an array of substrings based on a specified separator. The resulting substrings are stored in an array, and the original string is not modified.
// You can use any seperator you like such as space, &, c and so on
var str = "My name is Arsalan Khan";
var splitString = str.split(" "); // spliting based on space .split(" ")
console.log(splitString);
var str1 = "My&name&is&Arsalan&Khan";
var splitString1 = str1.split("&"); // spliting based on & .split(&)
console.log(splitString1[2]);
var str2 = "MycnameciscArsalancKhan";
var splitString2 = str2.split("c"); // spliting based on & .split(&)
console.log(splitString2);
var str3 = "My name is Arsalan Khan";
var splitString3 = str3.split(""); // spliting based on & .split(&)
console.log(splitString3);
