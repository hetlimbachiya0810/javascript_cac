// 101 guide to Functions in JavaScript
// Functions are first-class objects in JavaScript, meaning they can be treated like any other object.
// This includes being assigned to variables, passed as arguments, and returned from other functions.
// Functions can also be defined in various ways, including function declarations, function expressions, and arrow functions.
// Here we will explore functions in JavaScript

const add = function(a, b) { //defining function add with two **parameters** a and b
    return a + b;
};
console.log("Add function result:", add(5, "10")); // 51
console.log(add(5, 10)); //calling the function add with **arguments** 5 and 10.


// Arrow function syntax, default parameters
const multiply = (a, b = 1) => a * b;
console.log("Multiply function result:", multiply(5, 2)); // 10
console.log("Multiply function result:", multiply(5)); // 5

// Function with rest parameters
const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log("Sum function result:", sum(1, 2, 3, 4, 5)); // 15

const sumargs = (val1,val2, ...args) => args.reduce((acc, curr) => acc + curr, val1 + val2);
console.log("Sumargs function result:", sumargs(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)); // 120

// Function returning another function
const createMultiplier = (factor) => {
    return (x) => x * factor;
};
const double = createMultiplier(2);
console.log("Double function result:", double(5)); // 10


// Function with a callback
const processNumbers = (numbers, callback) => {
    return numbers.map(callback);
};  
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = processNumbers(numbers, (num) => num * num);
console.log("Squared numbers:", squaredNumbers); // [1, 4, 9, 16, 25]
// Function with a closure
const makeCounter = () => {
    let count = 0;
    return () => {
        count += 1;
        return count;
    };
};
const counter = makeCounter();
console.log("Counter result:", counter()); // 1
console.log("Counter result:", counter()); // 2
console.log("Counter result:", counter()); // 3

// Function with a promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
};
fetchData().then((data) => {
    console.log("Fetch Data result:", data); // "Data fetched successfully!"
}).catch((error) => {
    console.error("Error fetching data:", error);
});
// Function with error handling
const safeDivide = (a, b) => {
    try {
        if (b === 0) throw new Error("Division by zero is not allowed.");
        return a / b;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
};
console.log("Safe Divide result:", safeDivide(10, 2)); // 5
console.log("Safe Divide result:", safeDivide(10, 0)); // Error: Division
// by zero is not allowed. null
// Function with a timeout
const delayedMessage = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("This message is delayed by 2 seconds.");
        }, 2000);
    });
};
delayedMessage().then((message) => {
    console.log("Delayed Message result:", message); // "This message is delayed by 2 seconds."
});
// Function with a generator
function* numberGenerator() {
    let num = 1;
    while (true) {
        yield num++;
    }
}
const gen = numberGenerator();
console.log("Generator result:", gen.next().value); // 1
console.log("Generator result:", gen.next().value); // 2
console.log("Generator result:", gen.next().value); // 3       
// Function with a class method
class Calculator {
    constructor() {
        this.result = 0;
    }
    add(value) {
        this.result += value;
        return this.result;
    }
    subtract(value) {
        this.result -= value;
        return this.result;
    }
}
const calc = new Calculator();
console.log("Calculator add result:", calc.add(10)); // 10
console.log("Calculator subtract result:", calc.subtract(5)); // 5
// Function with a method that uses 'this'
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello, my name is ${this.name}.`;
    }
}
const person = new Person("Het");
console.log("Person greet result:", person.greet()); // "Hello, my name is Het."
