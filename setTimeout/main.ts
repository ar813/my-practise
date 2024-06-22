// 1. Basic Timeout:
// Write a function that logs "Hello, world!" after 1 second using setTimeout.
function basicTimeout() {
  console.log("Hello, world!");
}
setTimeout(basicTimeout, 1000);

// 2. Delayed Function Call:
// Create a function that takes a callback and a delay in milliseconds as parameters. The function should execute the callback after the specified delay using setTimeout.
function delayedFunctionCall(callback:any, delay:number) {
    setTimeout(callback, delay);
}

delayedFunctionCall(() => {
  console.log("This message is delayed by 2 seconds.");
}, 2000);

// 3. Repeating Timeout:
// Implement a function that logs "Tick" every 2 seconds indefinitely using setTimeout.
function tickIndefinitely() {
  console.log("Tick");
  setTimeout(tickIndefinitely, 1000);
}
tickIndefinitely();

// 4. Clearing Timeout:
// Write a program where a timeout is set for 3 seconds. Before the timeout completes, clear it using clearTimeout.
// Define the function to be called after the timeout
function delayedFunction() {
  console.log("This should not be logged.");
}

// Set the timeout and store the timeout ID
let timeoutID = setTimeout(delayedFunction, 3000);

// Clear the timeout before it completes
clearTimeout(timeoutID);

console.log("Timeout has been cleared.");

// 5. Sequential Timing:
// Write a function that logs messages "One", "Two", and "Three" in sequence with delays of 1 second using setTimeout.
function sequentialTimeouts() {
  console.log("One");
  setTimeout(() => {
    console.log("Two");
    setTimeout(() => {
      console.log("Three");
    }, 1000);
  }, 1000);
}
sequentialTimeouts()

// 6. Interactive Timeout:
// Create a simple quiz program where each question appears after a delay of 5 seconds using setTimeout.
function interactiveTimeout() {
  setTimeout(() => {
    console.log("Question 1");
    setTimeout(() => {
      console.log("Question 2");
      setTimeout(() => {
        console.log("Question 3");
      }, 5000);
    }, 5000);
  }, 5000);
}
interactiveTimeout();

// 7. Callback with Parameters:
// Design a function that accepts a callback and a delay. The callback should take a parameter and be invoked after the specified delay using setTimeout.

function delayedFunctionCallWithParam(callback:any, delay:number, param:string) {
    setTimeout(() => {
        callback(param);
    }, delay);
}
delayedFunctionCallWithParam((message:any) => {
    console.log(message);
}, 2000, "This message is delayed by 2 seconds.");


// 8. Promise Timeout:
// Write a function that returns a promise which resolves after a delay of 3 seconds using setTimeout.
function delayThreeSeconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved after 3 seconds");
        }, 3000);
    });
}
delayThreeSeconds().then((message) => {
    console.log(message);
});

// 9. Handling Errors:
// Modify the previous assignment to reject the promise if an error occurs during the 3-second delay.
function delayThreeSecondsDueToError() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Reject after 3 seconds");
        }, 3000);
    });
}
delayThreeSecondsDueToError().catch((message) => {
    console.log(message);
});

// 10. Nested Timeouts:
// Create a function that logs "First" after 1 second, "Second" after another second, and "Third" after yet another second using nested setTimeout calls.
function nestedTimeouts() {
  setTimeout(() => {
    console.log("First");
    setTimeout(() => {
      console.log("second");
      setTimeout(() => {
        console.log("Third");
      }, 1000);
    }, 1000);
  }, 1000);
}
nestedTimeouts();

// 11. Passing Parameters to the Function
// You can pass parameters to the function being executed by setTimeout.

function greet(name: string, id:number) {
  console.log(`Hello, ${name}! Your id Is ${id}`);
}

// Call setTimeout with a function and its parameter
setTimeout(greet, 2000, "Alice", 1);

// In this example, the greet function will be called with the parameter ("Alice" and 1) after 2 seconds, logging "Hello, Alice!" to the console.

// 12. Using setTimeout in a Loop (for Delay Between Iterations)
// If you want to create a delay between iterations in a loop, you can use setTimeout in combination with a recursive function or setInterval.

function printNumbersWithDelay(n: number) {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, i*1000); // Delay increases with each iteration
  }
}
printNumbersWithDelay(10);

// Call the function to print numbers 1 to 5 with a delay
// In this example, numbers from 1 to 5 will be printed to the console, each with a 1-second delay between them.

// 13. Creating a Countdown Timer

function countdown(seconds: number) {
  if (seconds > 0) {
    console.log(seconds);
    setTimeout(() => countdown(seconds - 1), 1000);
  } else {
    console.log("Time's up!");
  }
}

// Start a countdown from 5 seconds
countdown(5);

// 14 Print Current Time After a Delay

setTimeout(() => {
  const now = new Date();
  console.log(`Current time is: ${now.toLocaleTimeString()}`);
}, 1500);









